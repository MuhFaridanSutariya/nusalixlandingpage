import SectionHeader from '../../components/sections/sectionheader';
import Aurora from '../../components/aurora';
import HeroSection from '../../components/sections/hero-section';
import ServicesSection from '../../components/sections/services-section';
import ProjectSection from '../../components/sections/project-section-new';
import FaqSection from '../../components/sections/faq-section';
import ContactSection from '../../components/sections/contact-section-new';
import Footer from '../../components/sections/footer';
import LogoSection from '../../components/sections/logo-sections';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log('Page - received locale:', locale);
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Aurora Background untuk seluruh halaman */}
      <Aurora
        colorStops={["#3A29FF", "#7cff67", "#5227FF"]}
        blend={10}
        amplitude={5}
        speed={0.5}
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: -1 }}
      />
      
      {/* Sections */}
      <SectionHeader />
      <HeroSection />
      <ServicesSection />
      <ProjectSection />
      <LogoSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      {/* Section lain bisa ditambah di sini */}
    </div>
  );
}