import React, { useState } from 'react';
import { 
  FileText, 
  Bot, 
  Send, 
  Menu, 
  X, 
  BarChart2, 
  Moon, 
  Sun,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResumeModal: () => void;
  onOpenAiAssistant: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenResumeModal,
  onOpenAiAssistant,
  darkMode,
  setDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav-brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
            SG
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              Shahid Gojree
            </h1>
            <p className="text-xs text-sky-600 dark:text-sky-400 font-medium flex items-center gap-1">
              <BarChart2 className="w-3 h-3 inline" /> Data Analyst
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button 
            id="nav-link-projects"
            onClick={() => scrollToSection('projects')} 
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            Projects
          </button>
          <button 
            id="nav-link-skills"
            onClick={() => scrollToSection('skills')} 
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            Skills & SQL
          </button>
          <button 
            id="nav-link-experience"
            onClick={() => scrollToSection('experience')} 
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            Experience
          </button>
          <button 
            id="nav-link-education"
            onClick={() => scrollToSection('education')} 
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            Education
          </button>
          <button 
            id="nav-link-contact"
            onClick={() => scrollToSection('contact')} 
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            id="btn-ask-ai-assistant"
            onClick={onOpenAiAssistant}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 border border-indigo-200 dark:border-indigo-800/60 text-xs font-semibold flex items-center gap-2 transition-all shadow-xs"
          >
            <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <span>Ask AI Assistant</span>
          </button>

          <button
            id="btn-view-resume"
            onClick={onOpenResumeModal}
            className="px-3.5 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm shadow-sky-600/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>

          <button
            id="btn-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Toggle & Quick Action */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            id="btn-mobile-ai-trigger"
            onClick={onOpenAiAssistant}
            className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
            title="Ask AI Assistant"
          >
            <Bot className="w-4 h-4" />
          </button>

          <button
            id="btn-mobile-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-3">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Skills & SQL Simulator
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Work Experience
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Education & Certifications
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Contact
          </button>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResumeModal(); }}
              className="w-full py-2.5 rounded-lg bg-sky-600 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAiAssistant(); }}
              className="w-full py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold text-xs flex items-center justify-center gap-2 border border-indigo-200 dark:border-indigo-800"
            >
              <Bot className="w-4 h-4 text-indigo-600" />
              <span>Ask AI Career Assistant</span>
            </button>
          </div>

          <div className="pt-3 flex items-center justify-center space-x-6 text-slate-500 dark:text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-slate-900 dark:hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
