import { Hero } from "../Hero";

export default function HeroExample() {
  return (
    <Hero onNavigate={(sectionId) => console.log(`Navigate to: ${sectionId}`)} />
  );
}
