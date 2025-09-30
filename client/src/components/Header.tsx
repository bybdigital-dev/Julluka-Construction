import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Before & After", id: "before-after" },
    { label: "Projects", id: "projects" },
    { label: "Why Us", id: "why-us" },
    { label: "Contact", id: "contact" },
  ];

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/27664382352?text=Hi%20Julluca%20Construction%2C%20I'd%20like%20a%20quote",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/80"
      }`}
      data-testid="header"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate("hero")}
            className="font-heading font-bold text-2xl text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md"
            data-testid="logo-button"
          >
            Julluca Construction
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={handleWhatsApp}
            size="default"
            className="gap-2"
            data-testid="button-whatsapp-header"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
