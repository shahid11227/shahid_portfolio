export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Python' | 'Power BI' | 'Excel';
  summary: string;
  highlights: string[];
  tools: string[];
  codeSnippet?: string;
  codeLanguage?: string;
  daxFormula?: string;
  excelFormulas?: string[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  chartType: 'retail-sales' | 'kpi-powerbi' | 'ecommerce-excel';
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Visualization' | 'Databases' | 'Analysis' | 'Business';
  level: number; // 0-100
  description: string;
  iconName: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  toolsUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  details: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface SqlSample {
  id: string;
  title: string;
  description: string;
  sql: string;
  result: {
    columns: string[];
    rows: (string | number)[][];
  };
}
