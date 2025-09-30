import { Header } from "../Header";

export default function HeaderExample() {
  return (
    <Header
      onNavigate={(sectionId) => console.log(`Navigate to: ${sectionId}`)}
    />
  );
}
