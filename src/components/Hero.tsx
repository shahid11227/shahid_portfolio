import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Terminal, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  FileText, 
  Bot, 
  ArrowRight, 
  Check, 
  Copy,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResumeModal,
  onOpenAiAssistant
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950">
      {/* Background Subtle Grid Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Information Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Open to Data Analyst & Business Intelligence Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-600">Shahid Gojree</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                Data Analyst | Python • SQL • Power BI • Excel
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.about}
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedField === 'email' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-slate-400" />}
              </button>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedField === 'phone' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-slate-400" />}
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="btn-hero-explore-projects"
                onClick={() => scrollToSection('projects')}
                className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm flex items-center gap-2 shadow-md shadow-sky-600/25 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Interactive Dashboards</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-hero-sql-simulator"
                onClick={() => scrollToSection('skills')}
                className="px-5 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm flex items-center gap-2 transition-all border border-slate-800 dark:border-slate-700"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Try SQL Simulator</span>
              </button>

              <button
                id="btn-hero-ask-ai"
                onClick={onOpenAiAssistant}
                className="px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 font-semibold text-sm flex items-center gap-2 border border-indigo-200 dark:border-indigo-800 transition-all"
              >
                <Bot className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Ask AI About Shahid</span>
              </button>
            </div>

            {/* Social External Links */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Profiles:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResumeModal}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1 text-xs font-medium"
                title="Print or View Resume PDF"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </button>
            </div>

          </div>

          {/* Right Column: Key Metric Dashboard Card Overview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-medium text-slate-400 ml-2">shahid_analytics_profile.py</span>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-800">
                  Data Analyst
                </span>
              </div>

              {/* Grid of Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Metric 1 */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-sky-600 dark:text-sky-400 mb-2">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-xs font-semibold text-emerald-500">+100%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">3+</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    End-to-End Analytics Projects
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 mb-2">
                    <Database className="w-5 h-5" />
                    <span className="text-xs font-semibold text-indigo-500">SQL & Python</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">4+</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Core Analytics Stack Tools
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-xs font-semibold text-emerald-500">ILS Certified</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">6 Mos</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Data Analyst Trainee Role
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 mb-2">
                    <Award className="w-5 h-5" />
                    <span className="text-xs font-semibold text-amber-500">2026</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">BCA</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Lovely Professional Univ.
                  </div>
                </div>

              </div>

              {/* Core Skill Chips */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Technical Arsenal
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-mono font-medium">Python (Pandas, NumPy)</span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium">SQL (MySQL, SQL Server)</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-mono font-medium">Power BI (DAX)</span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium">Excel (PivotTables)</span>
                  <span className="px-2.5 py-1 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-mono font-medium">EDA & Cleaning</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
