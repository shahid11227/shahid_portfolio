import React, { useState } from 'react';
import { 
  Terminal, 
  Database, 
  BarChart2, 
  FileSpreadsheet, 
  Play, 
  Check, 
  Copy, 
  Cpu, 
  Layers, 
  TrendingUp,
  Table,
  Sparkles
} from 'lucide-react';
import { SKILLS_DATA, SQL_SAMPLES } from '../data/portfolioData';
import { SkillItem, SqlSample } from '../types';

export const SkillsSection: React.FC = () => {
  const [skillCategory, setSkillCategory] = useState<'All' | 'Programming' | 'Visualization' | 'Databases' | 'Analysis' | 'Business'>('All');
  const [selectedSqlSample, setSelectedSqlSample] = useState<SqlSample>(SQL_SAMPLES[0]);
  const [isExecutingSql, setIsExecutingSql] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const filteredSkills = SKILLS_DATA.filter(
    (s) => skillCategory === 'All' || s.category === skillCategory
  );

  const runSqlSimulation = () => {
    setIsExecutingSql(true);
    setTimeout(() => {
      setIsExecutingSql(false);
    }, 400);
  };

  const copySql = (sql: string) => {
    navigator.clipboard.writeText(sql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiency & SQL Playground</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills Matrix & SQL Query Simulator
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Review core technical capabilities in Python, SQL, Power BI, and Excel. Try executing real analytical SQL queries below to test query logic, joins, and aggregations.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {(['All', 'Programming', 'Visualization', 'Databases', 'Analysis', 'Business'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSkillCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  skillCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/50 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{skill.category}</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  {skill.level}%
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE SQL QUERY SIMULATOR */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <Terminal className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Interactive SQL Query Execution Simulator</h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Database Engine:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-semibold border border-slate-700">
                MySQL 8.0 / SQL Server
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300">
            Select a sample analytical query below to inspect SQL syntax (Joins, CTEs, Aggregations, Group By, Having) and simulate query execution on Shahid's sample retail database:
          </p>

          {/* Query Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {SQL_SAMPLES.map((sample) => (
              <button
                key={sample.id}
                onClick={() => setSelectedSqlSample(sample)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedSqlSample.id === sample.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                {sample.title}
              </button>
            ))}
          </div>

          {/* SQL Editor & Controls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{selectedSqlSample.description}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copySql(selectedSqlSample.sql)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors text-xs"
                >
                  {copiedSql ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSql ? 'Copied' : 'Copy SQL'}</span>
                </button>
                <button
                  onClick={runSqlSimulation}
                  disabled={isExecutingSql}
                  className="px-3.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 font-bold transition-all shadow-xs"
                >
                  <Play className={`w-3.5 h-3.5 ${isExecutingSql ? 'animate-spin' : ''}`} />
                  <span>{isExecutingSql ? 'Executing...' : 'Run Query'}</span>
                </button>
              </div>
            </div>

            {/* SQL Code Block */}
            <pre className="p-4 rounded-xl bg-slate-950 text-emerald-300 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed border border-slate-800">
              <code>{selectedSqlSample.sql}</code>
            </pre>
          </div>

          {/* Query Execution Result Table */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5">
                <Table className="w-4 h-4 text-emerald-400" />
                <span>Execution Output ({selectedSqlSample.result.rows.length} rows returned)</span>
              </span>
              <span className="text-emerald-400 font-mono">0.024s • Query OK</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
              <table className="w-full text-left text-xs font-mono text-slate-200">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
                  <tr>
                    {selectedSqlSample.result.columns.map((col, idx) => (
                      <th key={idx} className="p-3 font-bold uppercase tracking-wider">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {selectedSqlSample.result.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-900/50 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 text-slate-200">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
