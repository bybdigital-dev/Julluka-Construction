import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryDriveway from "@assets/generated_images/Renovation.jpeg";
import galleryPool from "@assets/generated_images/Julluca_construction_swimming pool_paving.jpg";
import galleryPatio from "@assets/generated_images/Paving1.jpeg";
import galleryFirePit from "@assets/generated_images/Tiles.jpeg";
import galleryPergola from "@assets/generated_images/Ceiling11.jpeg";
import galleryPainting from "@assets/generated_images/Ceiling3.jpeg";
import galleryGarden from "@assets/generated_images/Wall.jpeg";
import galleryBraai from "@assets/generated_images/Irrigation.jpeg";
import galleryRoadkerb from "@assets/generated_images/Road_Kerb.jpeg";
import galleryRoadkerb2 from "@assets/generated_images/Road_Kerb2.jpeg";
import galleryRoadkerb3 from "@assets/generated_images/Road_Kerb3.jpeg";
import galleryMallkerb from "@assets/generated_images/Mall_Kerb.jpeg";
import galleryRoaddrain from "@assets/generated_images/Road_drain.jpeg";
import galleryPoolpiping from "@assets/generated_images/Pool_Piping.jpeg";
import galleryPoolpiping2 from "@assets/generated_images/Pool_Piping2.jpeg";


interface Project {
  image: string;
  title: string;
  location: string;
}

export function Projects() {
  const [lightboxImage, setLightboxImage] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const projects: Project[] = [
    { image: galleryDriveway, title: "Exterior house renovation", location: "Centurion" },
    { image: galleryPool, title: "Pool Paving", location: "Waterkloof" },
    { image: galleryPatio, title: "Pattern paving", location: "Menlyn" },
    { image: galleryFirePit, title: "Tiling", location: "Silver Lakes" },
    { image: galleryPergola, title: "Custom Ceiling", location: "Faerie Glen" },
    { image: galleryPainting, title: "Rhinolite ceiling", location: "Brooklyn" },
    { image: galleryGarden, title: "Walls", location: "Garsfontein" },
    { image: galleryBraai, title: "Irrigation installation", location: "Eldoraigne"},
    { image: galleryRoadkerb, title: "Roadside Kerbing", location: "Erasmusrand"},
    { image: galleryRoadkerb2, title: "Roadside Kerbing", location: "Erasmusrand"},
    { image: galleryRoadkerb3, title: "Roadside Kerbing", location: "Erasmusrand"},
    { image: galleryMallkerb, title: "Kerbing", location: "Pretoria East"},
    { image: galleryRoaddrain, title: "Roadside Drain", location: "Pretoria East"},
    { image: galleryPoolpiping, title: "Pool pump piping", location: "Pretoria East"},
    { image: galleryPoolpiping2, title: "Pool pump piping", location: "Pretoria East"},

    // You can add more items—pagination will automatically handle them.
  ];

  // 🔢 2 rows × 4 columns => 8 items per page
  const itemsPerPage = 8;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

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

        <div className="relative">

          {/* 📌 2 rows × 4 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {currentProjects.map((project, index) => (
              <button
                key={startIndex + index}
                onClick={() => setLightboxImage(project)}
                className="group relative aspect-square overflow-hidden rounded-md hover-elevate active-elevate-2"
                data-testid={`button-project-${startIndex + index}`}
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

          {/* ⬅️➡️ Arrows if more than 8 items exist */}
          {totalPages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous projects"
                className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur border rounded-full shadow-md p-3 hover:-translate-x-2 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next projects"
                className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur border rounded-full shadow-md p-3 hover:translate-x-2 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Lightbox stays unchanged */}
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
