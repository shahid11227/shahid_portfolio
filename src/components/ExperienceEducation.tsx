import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION_DATA, CERTIFICATIONS } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-200 dark:border-indigo-800">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey & Academic Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Education
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Practical experience gained as a Data Analyst Trainee along with ongoing degree work at Lovely Professional University and certification at ILS Institutions.
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-600 text-white shadow-md">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Work Experience
            </h3>
          </div>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-semibold text-slate-500 dark:text-slate-400 gap-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {exp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>

                {/* Tools Applied */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">Stack Applied:</span>
                  {exp.toolsUsed.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div id="education" className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {edu.institution} <span className="text-slate-400 font-normal">({edu.location})</span>
                  </p>
                  {edu.details && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 pt-1 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-600 text-white shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certifications & Programs
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {cert.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
