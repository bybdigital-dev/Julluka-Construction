import { useState } from "react";
import { Card } from "@/components/ui/card";
import beforeDriveway from "@assets/generated_images/Pavement_Before.jpeg";
import afterDriveway from "@assets/generated_images/Pavement_After.jpeg";
import beforePool from "@assets/generated_images/Julluka_Construction_Before_Pool_1.jpeg";
import afterPool from "@assets/generated_images/Julluka_Construction_After_Pool_1(2).jpeg";
import beforeTiling from "@assets/generated_images/Shower_Before1.jpeg";
import afterTiling from "@assets/generated_images/Shower_After1.jpeg";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  index: number;
}

function ComparisonSlider({ beforeImage, afterImage, title, index }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    handleMove(touch.clientX, rect);
  };

  return (
    <Card className="overflow-hidden" data-testid={`card-comparison-${index}`}>
      <div
        className="relative aspect-[4/3] select-none cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        <img
          src={afterImage}
          alt={`After - ${title}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`Before - ${title}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-foreground rounded-full" />
              <div className="w-0.5 h-4 bg-foreground rounded-full" />
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
          After
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg" data-testid={`text-comparison-title-${index}`}>
          {title}
        </h3>
      </div>
    </Card>
  );
}

export function BeforeAfter() {
  const comparisons = [
    {
      before: beforeDriveway,
      after: afterDriveway,
      title: "Driveway Transformation - Centurion",
    },
    {
      before: beforePool,
      after: afterPool,
      title: "Pool Area Renovation - Waterkloof",
    },
    {
      before: beforeTiling,
      after: afterTiling,
      title: "Shower Tiling - Brooklyn",
    },
  ];

  return (
    <section
      id="before-after"
      className="py-20 bg-card"
      data-testid="section-before-after"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4"
            data-testid="text-before-after-title"
          >
            Before & After
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation. Drag the slider to compare before and after results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((comparison, index) => (
            <ComparisonSlider
              key={index}
              beforeImage={comparison.before}
              afterImage={comparison.after}
              title={comparison.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
