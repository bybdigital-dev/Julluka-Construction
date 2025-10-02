import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Hammer,
  Waves,
  SquareStack,
  Flame,
  Brush,
  Leaf,
} from "lucide-react";

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Hammer,
      title: "Paving",
      description: "Driveways, swimming pools, footpaths, kerbing, stairs, and paving repairs with quality materials and professional craftsmanship.",
    },
    {
      icon: SquareStack,
      title: "Tiling",
      description: "Expert tiling for floors, bathrooms, and patios with precision and attention to detail.",
    },
    {
      icon: Flame,
      title: "Construction / Building",
      description: "Renovations, custom ceilings, concrete slabs, boma fire pits, braai areas to enhance your outdoor space.",
    },
    {
      icon: Brush,
      title: "Painting & Plastering",
      description: "Interior and exterior painting, rhinolite and re-skimming for a fresh finish.",
    },
    {
      icon: Leaf,
      title: "Gardening",
      description: "Irrigation, landscaping, gardening services, new lawns, garden beds, pruning, edging, and complete garden clean-ups.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-background"
      data-testid="section-services"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4"
            data-testid="text-services-title"
          >
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From driveways to gardens, we deliver quality workmanship across all outdoor projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <button
                    className="text-primary font-medium hover-elevate active-elevate-2 px-2 py-1 rounded-md inline-flex items-center"
                    onClick={() => onNavigate("contact")}
                    data-testid={`button-quote-${index}`}
                  >
                    Get a Quote →
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
