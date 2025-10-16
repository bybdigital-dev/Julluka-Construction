import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    service: "",
    message: "",
  });

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/27664382352?text=Hi%20Julluka%20Construction%2C%20I'd%20like%20a%20quote",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:0664382352";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service) {
      alert("Please select a service type");
      return;
    }
    
    if (!formData.name || !formData.phone || !formData.suburb || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    
    try {
      const response = await fetch("https://formsubmit.co/87724f18c98b3cf1a7fe4a1e3704864d", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          suburb: formData.suburb,
          service: formData.service,
          message: formData.message,
          _subject: `New Quote Request from ${formData.name}`,
          _template: "table",
        })
      });
      
      if (response.ok) {
        alert("Thank you! We'll be in touch soon.");
        setFormData({
          name: "",
          phone: "",
          suburb: "",
          service: "",
          message: "",
        });
      } else {
        alert("There was an issue submitting your request. Please try WhatsApp or phone instead.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an issue submitting your request. Please try WhatsApp or phone instead.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-background"
      data-testid="section-contact"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4"
            data-testid="text-contact-title"
          >
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your outdoor space? Contact us for a free quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="flex-1 gap-2"
                data-testid="button-whatsapp-contact"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={handleCall}
                className="flex-1 gap-2"
                data-testid="button-call-contact"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Service Areas</p>
                    <p className="text-muted-foreground">
                      Pretoria and surrounding areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-muted-foreground">
                      Mon-Sat: 7:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground">Sun: On special arrangement</p>
                  </div>
                </div>
                
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-xl">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Input
                    name="suburb"
                    placeholder="Suburb"
                    value={formData.suburb}
                    onChange={(e) =>
                      setFormData({ ...formData, suburb: e.target.value })
                    }
                    required
                    data-testid="input-suburb"
                  />
                </div>
                <div>
                  <Select
                    name="service"
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                    required
                  >
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paving">Paving</SelectItem>
                      <SelectItem value="pool-paving">Tiling</SelectItem>
                      <SelectItem value="tiling">Construction</SelectItem>
                      <SelectItem value="small-builds">Painting & Plastering</SelectItem>
                      <SelectItem value="painting">
                        Gardening
                      </SelectItem>
                      
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  data-testid="button-submit-form"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
