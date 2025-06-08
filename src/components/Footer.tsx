
export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Horrorland Sevilla. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          Tu peor pesadilla te espera en Sevilla.
        </p>
      </div>
    </footer>
  );
}
