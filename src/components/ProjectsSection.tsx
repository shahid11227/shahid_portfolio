import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../data/portfolioData';
import { BarChart3, Filter } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Python' | 'Power BI' | 'Excel'>('All');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-200 dark:border-sky-800">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Portfolio Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Data Analytics & Visualization Showcase
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Explore real interactive case studies built with Python, SQL, Power BI, and Excel. Switch between interactive charts, inspect real analytical code & formulas, and review key business outcomes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {(['All', 'Python', 'Power BI', 'Excel'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  filter === cat
                    ? 'bg-sky-600 text-white shadow-sky-600/25'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat === 'All' ? 'All Projects (3)' : `${cat} Projects`}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
