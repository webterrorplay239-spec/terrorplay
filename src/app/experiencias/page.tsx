
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from "@/hooks/use-toast";
import { generateTrendingHorrorStory, type TrendingHorrorStoryInput, type TrendingHorrorStoryOutput } from '@/ai/flows/include-trending-themes'; // Flow name kept for now
import { Sparkles, FileText } from 'lucide-react';

const experienceSchema = z.object({
  userPreferences: z.string().min(10, { message: "Describe tus preferencias en al menos 10 caracteres." }).max(500, { message: "Las preferencias no pueden exceder los 500 caracteres."}),
  storyLength: z.enum(['short', 'medium', 'long'], { required_error: "Selecciona una duración para la experiencia." }), // Renamed to storyLength for consistency with flow
});

type ExperienceFormData = z.infer<typeof experienceSchema>;

export default function ExperienciasPage() {
  const [generatedExperience, setGeneratedExperience] = useState<TrendingHorrorStoryOutput | null>(null); // Output type kept as is
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      userPreferences: '',
      storyLength: 'medium',
    },
  });

  const onSubmit: SubmitHandler<ExperienceFormData> = async (data) => {
    setIsLoading(true);
    setGeneratedExperience(null);
    try {
      // The flow input expects `storyLength`, so we use that name even if UI says "duration"
      const inputForFlow: TrendingHorrorStoryInput = {
        userPreferences: data.userPreferences,
        storyLength: data.storyLength,
      };
      const result = await generateTrendingHorrorStory(inputForFlow);
      setGeneratedExperience(result);
      toast({
        title: "¡Experiencia Diseñada!",
        description: "Tu concepto de experiencia de terror personalizado está listo.",
      });
    } catch (error) {
      console.error("Error generando experiencia:", error);
      toast({
        title: "Error al Generar Experiencia",
        description: "No se pudo generar tu experiencia. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <section className="text-center animate-fade-in">
        <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-5xl font-headline text-primary mb-3">Diseñador de Pesadillas IA</h1>
        <p className="text-xl text-muted-foreground">
          ¿Tienes una idea para una atracción o historia de terror? Describe tus elementos más terroríficos y nuestra IA te ayudará a conceptualizar una experiencia única para Horrorland Sevilla.
        </p>
      </section>

      <Card className="shadow-2xl shadow-primary/20 animate-slide-up" style={{animationDelay: '0.2s'}}>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Crea Tu Pesadilla Perfecta</CardTitle>
          <CardDescription>Define los elementos de tu experiencia y deja que la IA la traiga a la vida... o a la muerte.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="userPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tus Preferencias de Terror</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Una atracción sobre un circo abandonado con payasos fantasma, enfocada en el terror psicológico y los sustos repentinos. Incorpora leyendas urbanas de Sevilla."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="storyLength" // Internal name matching flow input
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Intensidad/Duración de la Experiencia</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona intensidad/duración" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="short">Corta (Concepto breve)</SelectItem>
                        <SelectItem value="medium">Media (Desarrollo intermedio)</SelectItem>
                        <SelectItem value="long">Larga (Descripción detallada)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? (
                  <>
                    <LoadingSpinner size={20} className="mr-2" /> Forjando Pesadillas...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" /> Diseñar Experiencia
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {generatedExperience && (
        <Card className="mt-10 shadow-2xl shadow-accent/20 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-accent" />
              <CardTitle className="font-headline text-3xl text-accent">{generatedExperience.title || "Concepto de Experiencia"}</CardTitle>
            </div>
            <CardDescription>Tu concepto de experiencia de terror, generado por IA. ¡Inspírate!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none whitespace-pre-wrap font-body leading-relaxed text-foreground">
              <h4 className="font-headline text-lg text-primary">Idea General:</h4>
              <p>{generatedExperience.story}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
