import { useState } from "react";
import { X } from "lucide-react";
import galleryDriveway from "@assets/generated_images/Project_gallery_driveway_f2324493.png";
import galleryPool from "@assets/generated_images/Julluca_construction_swimming pool_paving.jpg";
import galleryPatio from "@assets/generated_images/Project_gallery_patio_338c0328.png";
import galleryFirePit from "@assets/generated_images/Project_gallery_fire_pit_4e9d4663.png";
import galleryPergola from "@assets/generated_images/Project_gallery_pergola_8fde87ae.png";
import galleryPainting from "@assets/generated_images/Project_gallery_painting_5b56aa52.png";
import galleryGarden from "@assets/generated_images/Project_gallery_garden_44ae208e.png";
import galleryBraai from "@assets/generated_images/Project_gallery_braai_7ccd4e91.png";

interface Project {
  image: string;
  title: string;
  location: string;
}

export function Projects() {
  const [lightboxImage, setLightboxImage] = useState<Project | null>(null);

  const projects: Project[] = [
    { image: galleryDriveway, title: "Herringbone Paver Driveway", location: "Centurion" },
    { image: galleryPool, title: "Pool Paving", location: "Waterkloof" },
    { image: galleryPatio, title: "Outdoor Patio Tiling", location: "Menlyn" },
    { image: galleryFirePit, title: "Boma Fire Pit", location: "Silver Lakes" },
    { image: galleryPergola, title: "Custom Pergola Build", location: "Faerie Glen" },
    { image: galleryPainting, title: "Exterior House Painting", location: "Brooklyn" },
    { image: galleryGarden, title: "Garden Landscaping", location: "Garsfontein" },
    { image: galleryBraai, title: "Braai Area Construction", location: "Eldoraigne" },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-background"
      data-testid="section-projects"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4"
            data-testid="text-projects-title"
          >
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our quality workmanship across Pretoria
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setLightboxImage(project)}
              className="group relative aspect-square overflow-hidden rounded-md hover-elevate active-elevate-2"
              data-testid={`button-project-${index}`}
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.location}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-heading font-semibold text-sm mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/90">{project.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover-elevate active-elevate-2 p-2 rounded-md"
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={lightboxImage.image}
              alt={`${lightboxImage.title} - ${lightboxImage.location}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-heading font-semibold text-xl mb-1">
                {lightboxImage.title}
              </h3>
              <p className="text-white/80">{lightboxImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
