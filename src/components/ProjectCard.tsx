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
  Legend,
  LineChart,
  Line
} from 'recharts';
import { 
  Code, 
  CheckCircle2, 
  Copy, 
  Check, 
  BarChart2, 
  Layers, 
  Filter, 
  Table,
  Github,
  ExternalLink,
  Bot,
  Zap,
  Sliders,
  Send,
  Radio,
  Clock,
  Truck,
  TrendingUp,
  Brain,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';
import { 
  RETAIL_CHART_DATA, 
  REGION_PROFIT_DATA, 
  CATEGORY_BREAKDOWN,
  ZEPTO_DARK_STORES,
  ZEPTO_HOURLY_SURGE,
  ZEPTO_CATEGORY_GMV,
  ML_ACTUAL_VS_PREDICTED,
  ML_FEATURE_IMPORTANCE,
  AI_AGENT_SAMPLE_DIGESTS
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

  // Interactive Controls for Zepto SQL Project
  const [selectedZeptoStore, setSelectedZeptoStore] = useState(ZEPTO_DARK_STORES[0].id);
  const [zeptoViewMode, setZeptoViewMode] = useState<'hubs' | 'hourly' | 'categories'>('hubs');

  // Interactive Controls for ML Sales Prediction Simulator
  const [tvSpend, setTvSpend] = useState<number>(45000);
  const [socialSpend, setSocialSpend] = useState<number>(22000);
  const [radioSpend, setRadioSpend] = useState<number>(10000);
  const [storeFootfall, setStoreFootfall] = useState<number>(2400);
  const [mlViewMode, setMlViewMode] = useState<'simulator' | 'residuals' | 'importance'>('simulator');

  // Interactive Controls for AI News Agent
  const [activeAiNewsCategoryIndex, setActiveAiNewsCategoryIndex] = useState(0);
  const [isSimulatingAgent, setIsSimulatingAgent] = useState(false);

  // Dynamic ML Prediction Calculation
  const predictedSalesRevenue = Math.round(
    14500 + 
    (tvSpend * 0.46) + 
    (socialSpend * 0.68) + 
    (radioSpend * 0.32) + 
    (storeFootfall * 9.2)
  );

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSimulateAgent = () => {
    setIsSimulatingAgent(true);
    setTimeout(() => {
      setIsSimulatingAgent(false);
    }, 800);
  };

  const currentStoreData = ZEPTO_DARK_STORES.find(s => s.id === selectedZeptoStore) || ZEPTO_DARK_STORES[0];

  return (
    <div id={`project-${project.id}`} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all duration-300 hover:border-sky-500/50">
      
      {/* Header Banner */}
      <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
              project.category === 'SQL & Analytics'
                ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                : project.category === 'AI & Automation'
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                : project.category === 'Machine Learning'
                ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800'
                : project.category === 'Python' 
                ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800' 
                : project.category === 'Power BI'
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
            }`}>
              {project.category}
            </span>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>

          {/* Navigation View Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-xs font-medium">
            <button
              id={`tab-visual-${project.id}`}
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'visual'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Interactive View</span>
            </button>
            <button
              id={`tab-code-${project.id}`}
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>
                {project.codeLanguage === 'sql' 
                  ? 'SQL Logic' 
                  : project.category === 'Power BI' 
                  ? 'DAX Formula' 
                  : project.category === 'Excel' 
                  ? 'Excel Formulas' 
                  : 'Python Code'}
              </span>
            </button>
            <button
              id={`tab-insights-${project.id}`}
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
            
            {/* 1. ZEPTO QUICK COMMERCE SQL ANALYTICS */}
            {project.chartType === 'zepto-sql' && (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Logistics Dimension:</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold">
                    <button
                      onClick={() => setZeptoViewMode('hubs')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        zeptoViewMode === 'hubs'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Dark Store Hubs
                    </button>
                    <button
                      onClick={() => setZeptoViewMode('hourly')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        zeptoViewMode === 'hourly'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Hourly Order Surge
                    </button>
                    <button
                      onClick={() => setZeptoViewMode('categories')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        zeptoViewMode === 'categories'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Category GMV Share
                    </button>
                  </div>
                </div>

                {/* Zepto Hub Selector & Metric Preview */}
                {zeptoViewMode === 'hubs' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {ZEPTO_DARK_STORES.map((store) => (
                        <button
                          key={store.id}
                          onClick={() => setSelectedZeptoStore(store.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            selectedZeptoStore === store.id
                              ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/20'
                              : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                          }`}
                        >
                          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate">{store.city}</div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white truncate">{store.name}</div>
                          <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-1">{store.slaRate}% SLA</div>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                        <div className="text-xs text-slate-400">Selected Hub</div>
                        <div className="text-base font-bold text-white mt-0.5">{currentStoreData.name}</div>
                        <div className="text-xs text-indigo-400 mt-1">{currentStoreData.city} Cluster</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                        <div className="text-xs text-slate-400">10-Min SLA Adherence</div>
                        <div className="text-xl font-extrabold text-emerald-400 mt-0.5">{currentStoreData.slaRate}%</div>
                        <div className="text-xs text-slate-400 mt-1">Avg {currentStoreData.avgTime} mins delivery</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                        <div className="text-xs text-slate-400">Total Fulfilled Orders</div>
                        <div className="text-xl font-extrabold text-white mt-0.5">{currentStoreData.orders.toLocaleString()}</div>
                        <div className="text-xs text-slate-400 mt-1">Net GMV: {currentStoreData.gmv}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                        <div className="text-xs text-slate-400">Top Velocity Category</div>
                        <div className="text-base font-bold text-amber-300 mt-0.5">{currentStoreData.topCategory}</div>
                        <div className="text-xs text-slate-400 mt-1">Highest re-order rate</div>
                      </div>
                    </div>

                    <div className="h-60 w-full pt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ZEPTO_DARK_STORES} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                          <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                          <YAxis stroke="#64748b" fontSize={11} domain={[85, 100]} tickFormatter={(v) => `${v}%`} />
                          <Tooltip formatter={(val: any) => [`${val}%`, '10-Min SLA Rate']} />
                          <Bar dataKey="slaRate" fill="#6366f1" radius={[4, 4, 0, 0]} name="10-Min SLA %" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {/* Hourly Surge Curve */}
                {zeptoViewMode === 'hourly' && (
                  <div className="space-y-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Peak order surges occur during morning breakfast hours (8-10 AM) and evening dinner/late-night hours (8-10 PM).
                    </div>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={ZEPTO_HOURLY_SURGE} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="orderGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                          <XAxis dataKey="hour" stroke="#64748b" fontSize={12} />
                          <YAxis stroke="#64748b" fontSize={12} />
                          <Tooltip formatter={(val: any) => [`${val} orders`, 'Hourly Volume']} />
                          <Area type="monotone" dataKey="orders" stroke="#6366f1" fillOpacity={1} fill="url(#orderGrad)" name="Order Volume" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {/* Category GMV Share */}
                {zeptoViewMode === 'categories' && (
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ZEPTO_CATEGORY_GMV}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, gmv }) => `${name} (${gmv}%)`}
                          outerRadius={85}
                          fill="#8884d8"
                          dataKey="gmv"
                        >
                          {ZEPTO_CATEGORY_GMV.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(val: any) => [`${val}%`, 'GMV Share']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            )}

            {/* 2. AI NEWS TELEGRAM AGENT */}
            {project.chartType === 'ai-news-agent' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-4 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold text-slate-200">Telegram Channel Broadcast Simulator (@AINewsRadar)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSimulateAgent}
                        disabled={isSimulatingAgent}
                        className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
                      >
                        <Sparkles className={`w-3.5 h-3.5 ${isSimulatingAgent ? 'animate-spin' : ''}`} />
                        <span>{isSimulatingAgent ? 'Ingesting & Summarizing...' : 'Simulate Live Ingestion'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Channel Topics Selector */}
                  <div className="flex flex-wrap gap-2">
                    {AI_AGENT_SAMPLE_DIGESTS.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveAiNewsCategoryIndex(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          activeAiNewsCategoryIndex === idx
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500'
                            : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                        }`}
                      >
                        {item.category}
                      </button>
                    ))}
                  </div>

                  {/* Simulated Telegram Message Bubble */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-sans">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-[10px]">
                          AI
                        </div>
                        <span className="font-semibold text-white">AI News Radar Agent</span>
                        <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 text-[10px] font-mono">BOT</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">{AI_AGENT_SAMPLE_DIGESTS[activeAiNewsCategoryIndex].timestamp}</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="text-purple-300 font-bold uppercase tracking-wider text-[11px]">
                        📰 BREAKING AI DISPATCH • {AI_AGENT_SAMPLE_DIGESTS[activeAiNewsCategoryIndex].category}
                      </div>
                      <div className="text-slate-300 font-semibold text-sm">
                        "{AI_AGENT_SAMPLE_DIGESTS[activeAiNewsCategoryIndex].rawHeadline}"
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        Source: {AI_AGENT_SAMPLE_DIGESTS[activeAiNewsCategoryIndex].source}
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-900">
                        {AI_AGENT_SAMPLE_DIGESTS[activeAiNewsCategoryIndex].summaryBullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="text-slate-200 leading-relaxed font-sans">
                            {bullet}
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <Check className="w-3 h-3" />
                        <span>{AI_AGENT_SAMPLE_DIGESTS[activeAiNewsCategoryIndex].status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. MACHINE LEARNING SALES PREDICTION SIMULATOR */}
            {project.chartType === 'sales-ml-prediction' && (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">ML Model Tools:</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold">
                    <button
                      onClick={() => setMlViewMode('simulator')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        mlViewMode === 'simulator'
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      What-If Revenue Simulator
                    </button>
                    <button
                      onClick={() => setMlViewMode('residuals')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        mlViewMode === 'residuals'
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Actual vs Predicted
                    </button>
                    <button
                      onClick={() => setMlViewMode('importance')}
                      className={`px-3 py-1 rounded-lg transition-colors ${
                        mlViewMode === 'importance'
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
                      }`}
                    >
                      Feature Importance
                    </button>
                  </div>
                </div>

                {/* Simulator Mode */}
                {mlViewMode === 'simulator' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="text-xs text-slate-400 font-medium">ML Model Predicted Monthly Revenue</div>
                        <div className="text-3xl font-black text-cyan-400 mt-1">
                          ${predictedSalesRevenue.toLocaleString()}
                        </div>
                        <div className="text-xs text-emerald-400 font-semibold mt-1">
                          Based on Random Forest Regressor (R² = 94.8%)
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                          <span className="text-slate-400 block text-[10px]">Confidence Level</span>
                          <span className="font-bold text-white">95.0% Interval</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                          <span className="text-slate-400 block text-[10px]">Model Error (MAE)</span>
                          <span className="font-bold text-emerald-400">± 4.2%</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Feature Sliders */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-700 dark:text-slate-200">TV Advertising Spend</span>
                          <span className="text-cyan-600 dark:text-cyan-400 font-mono">${tvSpend.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100000"
                          step="5000"
                          value={tvSpend}
                          onChange={(e) => setTvSpend(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-700 dark:text-slate-200">Social Media Ad Spend</span>
                          <span className="text-cyan-600 dark:text-cyan-400 font-mono">${socialSpend.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="50000"
                          step="2500"
                          value={socialSpend}
                          onChange={(e) => setSocialSpend(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-700 dark:text-slate-200">Radio Ad Promotions</span>
                          <span className="text-cyan-600 dark:text-cyan-400 font-mono">${radioSpend.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="30000"
                          step="1000"
                          value={radioSpend}
                          onChange={(e) => setRadioSpend(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-700 dark:text-slate-200">Store Footfall (Customers/Day)</span>
                          <span className="text-cyan-600 dark:text-cyan-400 font-mono">{storeFootfall.toLocaleString()} visitors</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="5000"
                          step="100"
                          value={storeFootfall}
                          onChange={(e) => setStoreFootfall(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Residuals View */}
                {mlViewMode === 'residuals' && (
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={ML_ACTUAL_VS_PREDICTED} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                        <XAxis dataKey="testSample" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} tickFormatter={(val) => `$${val}k`} />
                        <Tooltip formatter={(val: any) => [`$${val}k`, '']} />
                        <Legend />
                        <Line type="monotone" dataKey="actual" stroke="#0284c7" strokeWidth={2} name="Actual Revenue ($k)" />
                        <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="ML Predicted Revenue ($k)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Feature Importance View */}
                {mlViewMode === 'importance' && (
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ML_FEATURE_IMPORTANCE} layout="vertical" margin={{ top: 10, right: 20, left: 40, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                        <XAxis type="number" stroke="#64748b" fontSize={12} tickFormatter={(v) => `${v}%`} />
                        <YAxis type="category" dataKey="feature" stroke="#64748b" fontSize={11} width={110} />
                        <Tooltip formatter={(val: any) => [`${val}%`, 'Relative Importance']} />
                        <Bar dataKey="importance" fill="#06b6d4" radius={[0, 4, 4, 0]} name="Feature Weight %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            )}

            {/* 4. Super Store Analysis Chart */}
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

            {/* 5. Power BI Sales Dashboard */}
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

            {/* 6. Excel E-Commerce Sales Performance Dashboard */}
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
              <span>
                {project.codeLanguage === 'sql' 
                  ? `${project.id}.sql` 
                  : project.category === 'Power BI' 
                  ? 'Sales_Measures.dax' 
                  : project.category === 'Excel' 
                  ? 'Excel_Formulas.xlsx' 
                  : `${project.id}.py`}
              </span>
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
