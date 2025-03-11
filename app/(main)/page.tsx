import LoadingScreen from "@/components/loading-screen";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";
import Experiences from "@/components/sections/experiences";

export default function Home() {
  return (
    <>
      {/* loading screen */}
      <LoadingScreen />
      {/* page sections */}
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Technologies />
      <Experiences />
      <ContactSection />
    </>
  );
}
