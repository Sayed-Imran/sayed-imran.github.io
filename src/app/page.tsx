'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ArticlesSection from '@/components/ArticlesSection';
import SpeakingSection from '@/components/SpeakingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackgroundLogos from '@/components/BackgroundLogos';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-x-hidden">
      {/* 3D Background Logos */}
      <BackgroundLogos scrollY={scrollY} />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection data={portfolioData.personal} />

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  As a seasoned DevOps Engineer with deep expertise in cloud technologies and
                  container orchestration, I help organizations transform their infrastructure
                  and accelerate their digital transformation journey.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                  {Object.entries(portfolioData.skills).map(([category, skills]) => (
                    <div key={category} className="text-center">
                      <h3 className="text-cyan-400 font-semibold mb-2 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <div className="text-2xl font-bold text-white">
                        {Array.isArray(skills) ? skills.length : 0}+
                      </div>
                      <div className="text-sm text-gray-400">Technologies</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <CertificationsSection certifications={portfolioData.certifications} />

        {/* Speaking Section */}
        <SpeakingSection events={portfolioData.speaking} />

        {/* Projects Section */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* Articles Section */}
        <ArticlesSection articles={portfolioData.articles} />

        {/* Contact Section */}
        <ContactSection personalData={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personalData={portfolioData.personal} />
    </div>
  );
}
