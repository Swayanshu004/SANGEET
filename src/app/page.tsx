import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import FeaturesPage from "@/components/FeaturesPage"
import ReviewPage from "@/components/ReviewPage";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 antialiased bg-grid-white/[0.03]">
        <Hero />
        <div className="w-full pt-20 bg-neutral-950 relative flex items-center justify-center">
          <Highlights/>
        </div>
        <div className="w-full bg-neutral-950 relative flex items-center justify-center">
          <FeaturesPage />
        </div>
        <div className="w-full bg-neutral-950 relative flex items-center justify-center">
          <ReviewPage />
        </div>
        <div className="w-full bg-neutral-950 relative flex items-center justify-center">
          <UpcomingWebinar />
        </div>
        <div className="w-full bg-neutral-950 flex items-center justify-center">
          <Instructor />
        </div>
        <div className="w-full bg-neutral-950 flex items-center justify-center">
          <Footer />
        </div>
    </main>
  );
}
