import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../data/portfolioData';
import { BarChart3, Search, Sparkles, Zap, Cpu, Database, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

type CategoryFilter = 'All' | 'SQL & Analytics' | 'Machine Learning' | 'AI & Automation' | 'Python' | 'Power BI' | 'Excel';

const OVERALL_IMPACT_METRICS = [
  {
    label: 'SQL Data Volume',
    value: '125,000+',
    detail: 'Delivery records across 15 dark store hubs',
    icon: Database,
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800/80'
  },
  {
    label: 'ML Model Precision',
    value: '94.8% R²',
    detail: 'Supervised regression & 5-fold cross validation',
    icon: TrendingUp,
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200/80 dark:border-cyan-800/80'
  },
  {
    label: 'AI Ingestion Stream',
    value: '500+ Daily',
    detail: 'Autonomous research articles & vector deduplication',
    icon: Zap,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950/60 border-purple-200/80 dark:border-purple-800/80'
  },
  {
    label: 'Business Dataset Scope',
    value: '$2.3M+',
    detail: 'Multi-region transactions analyzed for margin leaks',
    icon: Layers,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/80'
  }
];

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
      p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.techTags && p.techTags.some(t => t.name.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-200 dark:border-sky-800 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Technical Portfolio ({PROJECTS_DATA.length} Production Case Studies)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Technical Impact
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Production-grade data engineering, machine learning pipelines, autonomous AI agents, and executive BI dashboards built with reproducible Python, SQL, and DAX logic.
          </p>
        </div>

        {/* Global Technical Impact Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OVERALL_IMPACT_METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`p-4 rounded-2xl border ${item.bg} flex flex-col justify-between shadow-xs transition-transform hover:-translate-y-0.5`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    {item.label}
                  </span>
                  <div className={`p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 ${item.color} shadow-xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug font-medium">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 max-w-4xl mx-auto pt-2">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech tag, tool (e.g. Scikit-Learn, CTEs, DAX, Asyncio)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 shadow-xs"
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
                      ? 'bg-sky-600 text-white shadow-sky-600/25 ring-2 ring-sky-400/40'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
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
                className="px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors"
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
