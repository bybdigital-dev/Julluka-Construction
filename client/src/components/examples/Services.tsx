import { Services } from "../Services";

export default function ServicesExample() {
  return (
    <Services
      onNavigate={(sectionId) => console.log(`Navigate to: ${sectionId}`)}
    />
  );
}
