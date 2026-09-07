import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Sparkles
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PROJECTS_DATA, 
  WORK_EXPERIENCE, 
  EDUCATION_DATA, 
  CERTIFICATIONS 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PDF_URL = '/Shahid_Resume.pdf';
const RESUME_FILENAME = 'Shahid_Resume.pdf';

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success'>('idle');

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    try {
      setDownloadStatus('downloading');

      // Native programmatic download trigger for maximal browser compatibility
      const link = document.createElement('a');
      link.href = RESUME_PDF_URL;
      link.setAttribute('download', RESUME_FILENAME);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus('idle'), 3000);
      }, 600);
    } catch (err) {
      console.error('Direct download error, falling back to window.open', err);
      window.open(RESUME_PDF_URL, '_blank');
      setDownloadStatus('idle');
    }
  };

  const fullTextResume = `
SHAHID AHMAD SHEER GOJREE
Data Analyst
Phone: +91 8899664652 | Email: shahidgojree880@gmail.com
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

EDUCATION
• Bachelor of Computer Applications (BCA) — Lovely Professional University (LPU), Punjab, India | June 2026 – Ongoing

SKILL SUMMARY
• Programming & SQL: Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (MySQL, PostgreSQL, SQL Server)
• Data Visualization: Power BI (DAX, Star Schema Modeling), Excel (Pivot Tables, Dynamic Dashboards)
• Database Management: Complex Joins, CTEs, Window Functions (DENSE_RANK, NTILE, LAG/LEAD), Query Optimization
• Data Analysis & EDA: Data Cleaning, Outlier Diagnostics, Exploratory Data Analysis, Feature Transformations
• Statistical & KPI Analysis: Quantitative Interpretation, Variance Tracking, KPI Dashboards, RFM Customer Segmentation
• Business Analytics: Supply Chain Analytics, Stakeholder Communication, Executive Decision Support

WORK EXPERIENCE
Data Analyst Trainee — ILS Institution, Srinagar, J&K, India | Aug 2025 – Jan 2026
• Analyzed datasets using Python, SQL, and Excel to identify commercial trends and support business decisions.
• Performed EDA and wrote high-performance SQL queries (Joins, CTEs, Aggregations, Window Functions) to extract clean data.
• Built automated Excel dashboards using Pivot Tables, dynamic slicers, and lookup formulas reducing manual reporting by 15 hrs/wk.
• Created Power BI dashboards with custom DAX measures for Year-over-Year (YoY) revenue and variance tracking.

KEY PROJECTS (CORE DATA ANALYTICS)
1. Zepto Quick Commerce SQL Analytics (SQL & Hyperlocal Logistics)
• Conducted comprehensive SQL analytics on 125,000+ grocery quick-commerce delivery logs.
• Evaluated 10-minute delivery SLA adherence (94.2% overall) across 15 dark store hubs and isolated delivery bottleneck times.
• Segmented customer purchasing frequency (RFM Analysis) identifying top 18% repeat cohorts generating 62% of GMV.

2. Super Store Analysis (Python & Exploratory Data Analysis)
• Conducted comprehensive EDA on $2.3M+ retail transactions across 4 geographic regions using Python (Pandas, Matplotlib).
• Isolated product sub-category profit margin leakages (Tables at -8.4% loss) and established discount threshold guardrails.
• Identified West region as top performer (14.9% margin) and delivered 12+ actionable pricing optimization recommendations.

3. Sales Performance Dashboard (Power BI & Advanced DAX)
• Designed an interactive executive Power BI dashboard modeling 14,250 orders ($840K GMV) with Star Schema architecture.
• Implemented SAMEPERIODLASTYEAR dynamic DAX measures tracking +18.5% YoY sales growth and Average Order Value lift.

4. E-Commerce Sales Performance Dashboard (Excel & Advanced Analytics)
• Built dynamic, automated Excel dashboard with PivotTables, Timeline Slicers, and INDEX/MATCH / XLOOKUP logic.
• Automated recurring reporting workflows, saving 15 hours/week in manual effort (75% time efficiency gain).

CERTIFICATES & PROGRAMS
• Data Science Certification (Python, SQL, Power BI, Advanced Analytics) — ILS Institutions, Srinagar, J&K | Aug 2025 – Present
• Google Data Analytics Capstone: Complete a Case Study — Google | Credential ID: S6Q9IYCNTIX9
  `;

  const handleCopyText = () => {
    navigator.clipboard.writeText(fullTextResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] flex flex-col my-auto">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900 rounded-t-2xl gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                Shahid Ahmad Sheer Gojree
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Verified Curriculum Vitae • ATS Optimized</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {/* Plain Text Copy Button for ATS */}
            <button
              onClick={handleCopyText}
              id="btn-modal-copy-text"
              className="hidden md:flex px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold items-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-700"
              title="Copy clean plain text for ATS application forms"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            {/* Direct In-Browser PDF Preview */}
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-modal-preview-pdf"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors border border-slate-200 dark:border-slate-700"
              title="Open PDF directly in browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview</span>
            </a>

            {/* Primary One-Click Real PDF Download */}
            <a
              href={RESUME_PDF_URL}
              download={RESUME_FILENAME}
              onClick={handleDownloadPdf}
              id="btn-modal-download-pdf"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-sky-600/25 active:scale-95 group cursor-pointer"
            >
              {downloadStatus === 'downloading' ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : downloadStatus === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              ) : (
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
              <span>
                {downloadStatus === 'downloading' 
                  ? 'Downloading...' 
                  : downloadStatus === 'success' 
                  ? 'Downloaded!' 
                  : 'Download PDF'}
              </span>
            </a>

            {/* Close Modal */}
            <button
              onClick={onClose}
              id="btn-modal-close"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Action Top Alert / Banner */}
        <div className="mx-4 sm:mx-8 mt-4 p-3.5 rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/40 dark:to-indigo-950/40 border border-sky-200/80 dark:border-sky-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
              PDF
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Shahid_Resume.pdf</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                  Ready to Export
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Direct one-click download • Single-page executive format optimized for ATS
              </p>
            </div>
          </div>

          <a
            href={RESUME_PDF_URL}
            download={RESUME_FILENAME}
            onClick={handleDownloadPdf}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-xs shrink-0 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>1-Click Download</span>
          </a>
        </div>

        {/* Interactive Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-900 dark:text-slate-100 font-sans">
          
          {/* Header Contact */}
          <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
              Shahid Ahmad Sheer Gojree
            </h1>
            <p className="text-base font-semibold text-sky-600 dark:text-sky-400">
              Data Analyst
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-sky-500" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 underline hover:text-sky-600">
                <Linkedin className="w-3.5 h-3.5 text-sky-500" />
                LinkedIn
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 underline hover:text-sky-600">
                <Github className="w-3.5 h-3.5 text-sky-500" />
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1">
              Education
            </h2>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="flex flex-wrap justify-between text-xs">
                <div>
                  <span className="font-bold">{edu.degree}</span> — {edu.institution} ({edu.location})
                </div>
                <div className="font-semibold text-slate-500">{edu.period}</div>
              </div>
            ))}
          </div>

          {/* Skill Summary */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1">
              Skill Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div><strong className="font-semibold text-slate-800 dark:text-slate-200">Programming & SQL:</strong> Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (MySQL, PostgreSQL, SQL Server)</div>
              <div><strong className="font-semibold text-slate-800 dark:text-slate-200">Data Visualization:</strong> Power BI (DAX, Star Schema Modeling), Excel (PivotTables, Dynamic Dashboards)</div>
              <div><strong className="font-semibold text-slate-800 dark:text-slate-200">Database Management:</strong> Complex Joins, CTEs, Window Functions (DENSE_RANK, NTILE, LAG/LEAD), Query Optimization</div>
              <div><strong className="font-semibold text-slate-800 dark:text-slate-200">Data Analysis & EDA:</strong> Data Cleaning, Outlier Diagnostics, Exploratory Data Analysis, Feature Transformations</div>
              <div><strong className="font-semibold text-slate-800 dark:text-slate-200">Statistical & KPI Analysis:</strong> Quantitative Interpretation, Variance Tracking, KPI Dashboards, RFM Segmentation</div>
              <div><strong className="font-semibold text-slate-800 dark:text-slate-200">Business Analytics:</strong> Supply Chain Analytics, Stakeholder Communication, Executive Decision Support</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1">
              Work Experience
            </h2>
            {WORK_EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between font-bold">
                  <span>{exp.role} — {exp.company}, {exp.location}</span>
                  <span className="text-slate-500 font-semibold">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b-2 border-slate-900 dark:border-slate-100 pb-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Key Projects (Core Data Analytics)
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                SQL • Python EDA • Power BI • Excel
              </span>
            </div>
            {PROJECTS_DATA.filter(p => !p.isOptional && p.category !== 'Machine Learning' && p.category !== 'AI & Automation').map((proj, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{proj.title}</span>
                  <span className="text-slate-500 font-medium text-[11px]">{proj.category}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1">
              Certifications & Continuous Learning
            </h2>
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="text-xs space-y-1">
                <div className="font-bold">{cert.title} — {cert.issuer}</div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {cert.details.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Sticky Footer with 1-Click Action */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Ready for hiring manager & recruiter offline review.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <a
              href={RESUME_PDF_URL}
              download={RESUME_FILENAME}
              onClick={handleDownloadPdf}
              id="btn-footer-download-pdf"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-sky-600/20 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Shahid_Resume.pdf</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
