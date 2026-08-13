import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, WORK_EXPERIENCE, EDUCATION_DATA, CERTIFICATIONS, SKILLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const fullTextResume = `
SHAHID AHMAD SHEER GOJREE
Data Analyst
Phone: +91 8899664652 | Email: shahidgojree880@gmail.com
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

EDUCATION
• Bachelor of Computer Applications (BCA) — Lovely Professional University (LPU), Punjab, India | June 2026 – Ongoing
• Data Science Certification (Python, SQL, Power BI, ML, AI) — ILS Institutions, Srinagar, J&K, India | Aug 2025 – Present

SKILL SUMMARY
• Programming: Python (Pandas, NumPy, Matplotlib, Seaborn), SQL
• Data Visualization: Power BI, Excel (Pivot Tables, Charts, Dashboards)
• Database Management: MySQL, SQL Server
• Data Analysis: Data Cleaning, EDA, Data Transformation
• Analytical Skills: Data Interpretation, Problem Solving, Statistical Analysis, KPI & Metrics Analysis
• Business Skills: Business Analysis, Stakeholder Communication, Decision-Making Support

WORK EXPERIENCE
Data Analyst Trainee — ILS Institution, Srinagar, J&K, India | Aug 2025 – Jan 2026
• Analyzed datasets using Python, SQL, and Excel to identify trends and support business decisions.
• Performed EDA and wrote SQL queries (Joins, Aggregations, Subqueries) to extract and analyze data.
• Built Excel dashboards using Pivot Tables and charts to track key performance metrics.
• Created Power BI dashboards with KPI metrics and basic DAX measures for data-driven insights.

PROJECTS
1. Super Store Analysis (Python)
• Conducted EDA on retail data using Python (Pandas, Matplotlib) to uncover key sales and profit trends.
• Analyzed regions, categories, and customer segments to identify high- and low-performing products.
• Generated actionable insights by highlighting profit improvement opportunities and region-wise performance.

2. Sales Dashboard (Power BI)
• Designed an interactive Power BI dashboard to track key sales KPIs and performance metrics.
• Analyzed sales trends and category performance to identify business opportunities.
• Delivered actionable insights through clear and visually optimized data visualizations.

3. E-Commerce Sales Performance Dashboard (Excel)
• Developed a dynamic Excel dashboard to track sales performance, profit margin, and key business metrics.
• Utilized advanced Excel functions and PivotTables for data analysis and YoY growth calculation.
• Created interactive visualizations including charts and maps to analyze sales trends and regional performance.

CERTIFICATES
Data Analysis Trainee Program — ILS Institutions
• Completed a Data Analysis Trainee Program, gaining hands-on experience in core Data Analysis.
• Applied Python, SQL, Excel, and Power BI to analyze data and build KPI dashboards for business insights; demonstrated strong analytical and problem-solving skills, currently training in Machine Learning & AI.
  `;

  const handleCopyText = () => {
    navigator.clipboard.writeText(fullTextResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900 rounded-t-2xl">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Shahid Ahmad Sheer Gojree - Resume
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Formatted Curriculum Vitae (PDF & Print View)
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-900 dark:text-slate-100 font-sans print:p-0 print:text-black print:bg-white print:dark:text-black">
          
          {/* Header Contact */}
          <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
              Shahid Ahmad Sheer Gojree
            </h1>
            <p className="text-base font-semibold text-sky-600 dark:text-sky-400">
              Data Analyst
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-sky-600">
                linkedin.com/in/shahid-gojree-082857389
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="underline hover:text-sky-600">
                github.com/shahid11227
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="font-semibold">Programming:</strong> Python (Pandas, NumPy, Matplotlib, Seaborn), SQL</div>
              <div><strong className="font-semibold">Data Visualization:</strong> Power BI, Excel (Pivot Tables, Charts, Dashboards)</div>
              <div><strong className="font-semibold">Database Management:</strong> MySQL, SQL Server</div>
              <div><strong className="font-semibold">Data Analysis:</strong> Data Cleaning, EDA, Data Transformation</div>
              <div><strong className="font-semibold">Analytical Skills:</strong> Data Interpretation, Problem Solving, Statistical Analysis, KPI Metrics</div>
              <div><strong className="font-semibold">Business Skills:</strong> Business Analysis, Stakeholder Communication, Decision Support</div>
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
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1">
              Projects
            </h2>
            {PROJECTS_DATA.map((proj, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="font-bold text-slate-900 dark:text-white">
                  {proj.title} ({proj.category})
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
              Certificates
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

      </div>
    </div>
  );
};
