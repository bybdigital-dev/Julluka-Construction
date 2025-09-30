import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Shield,
  Award,
  Clock,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";

export function WhyUs() {
  const benefits = [
    {
      icon: FileText,
      title: "Fixed, Itemised Quotes",
      description: "Transparent pricing with no hidden costs. You know exactly what you're paying for.",
    },
    {
      icon: Shield,
      title: "Experienced, Insured Team",
      description: "Fully insured professionals with years of experience in construction and landscaping.",
    },
    {
      icon: Award,
      title: "Quality Materials & Workmanship",
      description: "We use only the best materials and deliver work that stands the test of time.",
    },
    {
      icon: Clock,
      title: "Clean Site, On-Time Delivery",
      description: "We respect your property and complete projects on schedule, every time.",
    },
    {
      icon: Users,
      title: "Local References Available",
      description: "Don't just take our word for it—ask our satisfied customers in your area.",
    },
    {
      icon: CheckCircle2,
      title: "12-24 Month Guarantee",
      description: "Comprehensive workmanship guarantee for your peace of mind.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 bg-card"
      data-testid="section-why-us"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4"
            data-testid="text-why-us-title"
          >
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Local team, fixed quotes, tidy site—proudly serving Pretoria
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Badge variant="secondary" className="gap-1 px-4 py-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <Star className="h-4 w-4 fill-accent text-accent" />
              <Star className="h-4 w-4 fill-accent text-accent" />
              <Star className="h-4 w-4 fill-accent text-accent" />
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="ml-1 font-semibold">5.0 Rating</span>
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 font-semibold">
              10+ Years Experience
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 font-semibold">
              500+ Completed Projects
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2"
                data-testid={`card-benefit-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-xl">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
