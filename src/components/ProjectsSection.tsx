import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../data/portfolioData';
import { BarChart3, Search, Sparkles } from 'lucide-react';
import { Project } from '../types';

type CategoryFilter = 'All' | 'SQL & Analytics' | 'Machine Learning' | 'AI & Automation' | 'Python' | 'Power BI' | 'Excel';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories: CategoryFilter[] = [
    'All',
    'SQL & Analytics',
    'Machine Learning',
    'AI & Automation',
    'Python',
    'Power BI',
    'Excel'
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = searchQuery.trim() === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-200 dark:border-sky-800">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Showcase ({PROJECTS_DATA.length} Projects)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Data Analytics, ML & AI Automation Projects
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Explore live case studies across Quick Commerce SQL analytics, Machine Learning sales forecasting, LLM news automation agents, Power BI KPI trackers, and Exploratory Data Analysis.
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-4 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, tool (e.g., SQL, Scikit-Learn, Telegram)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterCategories.map((cat) => {
                const count = cat === 'All' 
                  ? PROJECTS_DATA.length 
                  : PROJECTS_DATA.filter(p => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                      filter === cat
                        ? 'bg-sky-600 text-white shadow-sky-600/25'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
              <p className="text-base text-slate-600 dark:text-slate-400">
                No projects matched your filter query "{searchQuery}".
              </p>
              <button
                onClick={() => { setFilter('All'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
