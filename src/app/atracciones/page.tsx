
"use client";

import { useState, useMemo, useEffect } from 'react';
import AttractionCard from '@/components/AttractionCard';
import { mockAttractions, categories as availableCategories } from '@/lib/data';
import type { Attraction } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ListFilter, ArrowDownUp, XCircle, Map } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function AtraccionesPage() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('title-asc'); // Default sort

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAttractions(mockAttractions);
      setIsLoading(false);
    }, 300); // Simulate API call
  }, []);

  const filteredAndSortedAttractions = useMemo(() => {
    let filtered = attractions;

    if (searchTerm) {
      filtered = filtered.filter(attr =>
        attr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attr.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(attr => attr.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    return filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'intensity-asc': // Assuming intensity can be ordered (e.g., Baja < Media < Alta)
          const intensityOrder = { 'Baja': 1, 'Para todos': 1, 'Media': 2, 'Alta': 3 };
          return (intensityOrder[a.intensity || 'Baja'] || 0) - (intensityOrder[b.intensity || 'Baja'] || 0);
        case 'intensity-desc':
          const intensityOrderDesc = { 'Baja': 1, 'Para todos': 1, 'Media': 2, 'Alta': 3 };
          return (intensityOrderDesc[b.intensity || 'Baja'] || 0) - (intensityOrderDesc[a.intensity || 'Baja'] || 0);
        default:
          return 0;
      }
    });
  }, [attractions, searchTerm, selectedCategory, sortOrder]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOrder('title-asc');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <LoadingSpinner size={64} />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <section className="text-center animate-fade-in">
        <Map className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">Nuestras Atracciones</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Descubre las experiencias que te helarán la sangre. ¿Cuál será tu primera pesadilla?
        </p>
      </section>

      <section className="space-y-6 p-6 bg-card/50 rounded-lg shadow-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
          <div className="space-y-2">
            <label htmlFor="search" className="text-sm font-medium text-muted-foreground">Buscar Atracción</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="search"
                type="text"
                placeholder="Buscar por nombre o etiqueta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium text-muted-foreground">Filtrar por Categoría</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category" className="w-full">
                <ListFilter className="h-4 w-4 mr-2 text-muted-foreground inline-block" />
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las Categorías</SelectItem>
                {availableCategories.map(cat => (
                  <SelectItem key={cat.id} value={cat.name.toLowerCase()}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="sort" className="text-sm font-medium text-muted-foreground">Ordenar Por</label>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger id="sort" className="w-full">
                <ArrowDownUp className="h-4 w-4 mr-2 text-muted-foreground inline-block" />
                <SelectValue placeholder="Orden de atracción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title-asc">Nombre (A-Z)</SelectItem>
                <SelectItem value="title-desc">Nombre (Z-A)</SelectItem>
                <SelectItem value="intensity-desc">Más Intenso Primero</SelectItem>
                <SelectItem value="intensity-asc">Menos Intenso Primero</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {(searchTerm || selectedCategory !== 'all') && (
          <Button variant="outline" onClick={clearFilters} className="w-full md:w-auto">
            <XCircle className="mr-2 h-4 w-4" /> Limpiar Filtros
          </Button>
        )}
      </section>

      {filteredAndSortedAttractions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {filteredAndSortedAttractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-2xl font-headline text-muted-foreground mb-2">No se Encontraron Atracciones</h2>
          <p className="text-lg text-muted-foreground">
            Prueba ajustando tu búsqueda o filtros. El terror te espera... si puedes encontrarlo.
          </p>
        </div>
      )}
    </div>
  );
}
