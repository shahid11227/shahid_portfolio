import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { 
  Code, 
  CheckCircle2, 
  Copy, 
  Check, 
  BarChart2, 
  TrendingUp, 
  Layers, 
  ChevronRight,
  Filter,
  PieChart as PieIcon,
  Table
} from 'lucide-react';
import { Project } from '../types';
import { 
  RETAIL_CHART_DATA, 
  REGION_PROFIT_DATA, 
  CATEGORY_BREAKDOWN 
} from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'code' | 'insights'>('visual');
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Interactive Controls for Retail Chart
  const [retailView, setRetailView] = useState<'monthly' | 'region' | 'category'>('monthly');

  // Interactive Controls for Power BI Dashboard
  const [powerBiMetric, setPowerBiMetric] = useState<'revenue' | 'profit' | 'orders'>('revenue');

  // Interactive Controls for Excel Dashboard
  const [excelCategoryFilter, setExcelCategoryFilter] = useState<'All' | 'Tech' | 'Office' | 'Furniture'>('All');

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all duration-300 hover:border-sky-500/50">
      
      {/* Header Banner */}
      <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
              project.category === 'Python' 
                ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800' 
                : project.category === 'Power BI'
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
            }`}>
              {project.category} Project
            </span>
            <span className="text-xs font-mono text-slate-400">ID: {project.id}</span>
          </div>

          {/* Navigation View Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-xs font-medium">
            <button
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'visual'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Interactive Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>{project.category === 'Python' ? 'Python EDA Code' : project.category === 'Power BI' ? 'DAX Formula' : 'Excel Formulas'}</span>
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'insights'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Key Findings</span>
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mt-0.5">
          {project.subtitle}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          {project.summary}
        </p>

        {/* Project KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{m.label}</div>
              <div className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8">

        {/* TAB 1: VISUALIZATIONS & INTERACTIVE DASHBOARDS */}
        {activeTab === 'visual' && (
          <div className="space-y-6">
            
            {/* 1. Super Store Analysis Chart */}
            {project.chartType === 'retail-sales' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">View Dimension:</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold">
                    <button
                      onClick={() => setRetailView('monthly')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        retailView === 'monthly'
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Monthly Trend
                    </button>
                    <button
                      onClick={() => setRetailView('region')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        retailView === 'region'
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Regional Performance
                    </button>
                    <button
                      onClick={() => setRetailView('category')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        retailView === 'category'
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Category Breakdown
                    </button>
                  </div>
                </div>

                <div className="h-72 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    {retailView === 'monthly' ? (
                      <AreaChart data={RETAIL_CHART_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0284c7" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0284c7" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                        <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} tickFormatter={(val) => `$${val / 1000}k`} />
                        <Tooltip 
                          formatter={(value: any) => [`$${Number(value).toLocaleString()}`, '']}
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                        />
                        <Legend />
                        <Area type="monotone" dataKey="Sales" stroke="#0284c7" fillOpacity={1} fill="url(#salesGrad)" name="Gross Revenue ($)" />
                        <Area type="monotone" dataKey="Profit" stroke="#10b981" fillOpacity={1} fill="url(#profitGrad)" name="Net Profit ($)" />
                      </AreaChart>
                    ) : retailView === 'region' ? (
                      <BarChart data={REGION_PROFIT_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                        <XAxis dataKey="region" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} tickFormatter={(val) => `$${val / 1000}k`} />
                        <Tooltip 
                          formatter={(value: any) => [`$${Number(value).toLocaleString()}`, '']}
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                        />
                        <Legend />
                        <Bar dataKey="Sales" fill="#0284c7" radius={[4, 4, 0, 0]} name="Regional Sales ($)" />
                        <Bar dataKey="Profit" fill="#10b981" radius={[4, 4, 0, 0]} name="Regional Profit ($)" />
                      </BarChart>
                    ) : (
                      <PieChart>
                        <Pie
                          data={CATEGORY_BREAKDOWN}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={90}
                          fill="#8884d8"
                          dataKey="sales"
                        >
                          {CATEGORY_BREAKDOWN.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(val: any) => [`$${Number(val).toLocaleString()}`, 'Sales']} />
                        <Legend />
                      </PieChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* 2. Power BI Sales Dashboard */}
            {project.chartType === 'kpi-powerbi' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-4 border border-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="text-xs font-bold text-slate-200">Power BI Desktop • Executive Sales KPI View</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-mono">DAX Engine Active</span>
                    </div>
                  </div>

                  {/* Interactive Metric Filter Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setPowerBiMetric('revenue')}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        powerBiMetric === 'revenue'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs text-slate-400">DAX Revenue</div>
                      <div className="text-lg font-extrabold text-white">$840,000</div>
                      <div className="text-xs text-emerald-400 font-bold mt-1">▲ +18.5% YoY</div>
                    </button>

                    <button
                      onClick={() => setPowerBiMetric('profit')}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        powerBiMetric === 'profit'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs text-slate-400">Net Profit</div>
                      <div className="text-lg font-extrabold text-white">$142,800</div>
                      <div className="text-xs text-emerald-400 font-bold mt-1">▲ 17.0% Margin</div>
                    </button>

                    <button
                      onClick={() => setPowerBiMetric('orders')}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        powerBiMetric === 'orders'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs text-slate-400">Total Volume</div>
                      <div className="text-lg font-extrabold text-white">14,250 Orders</div>
                      <div className="text-xs text-amber-400 font-bold mt-1">Avg $58.90 AOV</div>
                    </button>
                  </div>

                  {/* Chart representation */}
                  <div className="h-56 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={RETAIL_CHART_DATA.slice(0, 8)}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(val) => `$${val / 1000}k`} />
                        <Tooltip contentStyle={{ backgroundColor: '#020617', borderColor: '#475569', color: '#fff' }} />
                        <Bar 
                          dataKey={powerBiMetric === 'revenue' ? 'Sales' : powerBiMetric === 'profit' ? 'Profit' : 'Target'} 
                          fill={powerBiMetric === 'revenue' ? '#f59e0b' : powerBiMetric === 'profit' ? '#10b981' : '#38bdf8'} 
                          radius={[4, 4, 0, 0]} 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Excel E-Commerce Sales Performance Dashboard */}
            {project.chartType === 'ecommerce-excel' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-3">
                    <div className="flex items-center gap-2">
                      <Table className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">Excel PivotTable Interactive Dashboard View</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <span className="text-slate-500">Pivot Slicer:</span>
                      {(['All', 'Tech', 'Office', 'Furniture'] as const).map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setExcelCategoryFilter(cat)}
                          className={`px-2.5 py-1 rounded transition-colors ${
                            excelCategoryFilter === cat
                              ? 'bg-emerald-600 text-white font-bold'
                              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="h-56 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={REGION_PROFIT_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                        <XAxis dataKey="region" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} tickFormatter={(val) => `$${val / 1000}k`} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Sales" fill="#10b981" name="Sales ($)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="Profit" fill="#3b82f6" name="Profit ($)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* Tools Used Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Tools Applied:</span>
              {project.tools.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">
                  {t}
                </span>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: CODE & FORMULA INSPECTOR */}
        {activeTab === 'code' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>{project.category === 'Python' ? 'superstore_eda.py' : project.category === 'Power BI' ? 'Sales_Measures.dax' : 'Excel_Formulas.xlsx'}</span>
              <button
                onClick={() => copyCode(project.codeSnippet || project.daxFormula || (project.excelFormulas || []).join('\n'))}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors text-xs font-semibold"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            {project.codeSnippet && (
              <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.codeSnippet}</code>
              </pre>
            )}

            {project.daxFormula && (
              <pre className="p-4 rounded-xl bg-slate-950 text-amber-300 text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.daxFormula}</code>
              </pre>
            )}

            {project.excelFormulas && (
              <div className="space-y-2">
                {project.excelFormulas.map((f, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950 text-emerald-400 text-xs font-mono border border-slate-800">
                    <span className="text-slate-500 font-sans block text-[10px] uppercase mb-0.5">Formula #{idx + 1}</span>
                    <code>{f}</code>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: KEY FINDINGS & BUSINESS IMPACT */}
        {activeTab === 'insights' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Project Insights & Deliverables
            </h4>
            <div className="space-y-3">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
