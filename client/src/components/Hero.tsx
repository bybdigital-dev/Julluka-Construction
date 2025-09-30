import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_background_paved_driveway_51b0da89.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/27664382352?text=Hi%20Julluca%20Construction%2C%20I'd%20like%20a%20quote",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6"
          data-testid="text-hero-title"
        >
          Quality Paving, Tiling & Outdoor Projects
        </h1>
        <p
          className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-8"
          data-testid="text-hero-subtitle"
        >
          Paving, tiling, construction builds, painting, plastering & gardening—done
          right, on time, and on budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="gap-2 text-lg px-8"
            data-testid="button-whatsapp-hero"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us for a Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate("services")}
            className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-view-services"
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
