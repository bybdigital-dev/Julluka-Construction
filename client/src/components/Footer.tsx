export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-heading font-bold text-2xl mb-2">
            Julluka Construction
          </h3>
          <p className="text-background/80 mb-4">
            Quality Paving, Tiling, Construction & Gardening Projects in Pretoria
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-background/70">
            <span>© {currentYear} Julluka Construction</span>
            <span className="hidden sm:inline">•</span>
            <span>All Rights Reserved</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="tel:0664382352"
              className="hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            >
              066 438 2352
            </a>
                      
          </div>
          <p>
            Developed by{" "}
            <a
              href="https://buildyourbrand.web.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              BYB Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
