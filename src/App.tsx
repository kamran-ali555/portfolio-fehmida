
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
// import CompaniesSection from './components/CompaniesSection';
// import ServicesSection from './components/ServicesSection';
// import ExperienceSection from './components/ExperienceSection';
// import SkillsSection from './components/SkillsSection';
// import ProjectsSection from './components/ProjectsSection';
// import GallerySection from './components/GallerySection';
// import ContactSection from './components/ContactSection';
// import FuturePlansSection from './components/FuturePlansSection';
// import Footer from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        {/* <CompaniesSection /> */}
        {/* <ServicesSection /> */}
        {/* <ExperienceSection /> */}
        {/* <SkillsSection /> */}
        {/* <ProjectsSection /> */}
        {/* <GallerySection /> */}
        {/* <ContactSection /> */}
        {/* <FuturePlansSection /> */}
      </main>
      {/* <Footer /> */}
    </div>;
}