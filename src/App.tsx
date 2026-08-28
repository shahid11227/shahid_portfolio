import React, { useState, useEffect } from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { AiAssistant } from './components/AiAssistant';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 antialiased relative`}>
      
      {/* Navigation Header */}
      <Header
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        />

        <ProjectsSection />

        <SkillsSection />

        <ExperienceEducation />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Assistant Trigger Button (Bottom Right) */}
      {!isAiAssistantOpen && (
        <button
          id="btn-floating-ai-assistant"
          onClick={() => setIsAiAssistantOpen(true)}
          className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 group border border-indigo-400/30"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-indigo-700 animate-pulse" />
          </div>
          <span className="hidden sm:inline font-medium">Ask Shahid's AI</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Drawers / Modals */}
      <AiAssistant
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}
