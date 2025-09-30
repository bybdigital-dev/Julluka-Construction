import { BackToTop } from "../BackToTop";

export default function BackToTopExample() {
  return (
    <div className="min-h-[200vh] relative">
      <p className="p-8">Scroll down to see the back to top button appear</p>
      <BackToTop />
    </div>
  );
}
