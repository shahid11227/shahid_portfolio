import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory contact storage for demonstration
const contactSubmissions: Array<{ id: string; name: string; email: string; message: string; date: string }> = [];

// API: Health Check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API: Contact Submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  const newSubmission = {
    id: Date.now().toString(),
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
  };

  contactSubmissions.push(newSubmission);
  return res.json({ success: true, message: 'Thank you for reaching out! Shahid will get back to you shortly.', data: newSubmission });
});

// Resume Context for AI Assistant
const RESUME_CONTEXT = `
Candidate Name: Shahid Ahmad Sheer Gojree
Role: Data Analyst
Contact: +91 8899664652 | shahidgojree880@gmail.com
LinkedIn: https://linkedin.com/in/shahid-gojree-082857389
GitHub: https://github.com/shahid11227

Education:
1. Bachelor of Computer Applications (BCA) — Lovely Professional University (LPU), Punjab, India | June 2026 – Ongoing
2. Data Science Certification (Python, SQL, Power BI, ML, AI) — ILS Institutions, Srinagar, J&K, India | Aug 2025 – Present

Skill Summary:
- Programming & Libraries: Python (Pandas, NumPy, Matplotlib, Seaborn), SQL
- Data Visualization: Power BI, Excel (Pivot Tables, Charts, Dashboards)
- Database Management: MySQL, SQL Server
- Data Analysis: Data Cleaning, EDA (Exploratory Data Analysis), Data Transformation
- Analytical Skills: Data Interpretation, Problem Solving, Statistical Analysis, KPI & Metrics Analysis
- Business Skills: Business Analysis, Stakeholder Communication, Decision-Making Support

Work Experience:
- Data Analyst Trainee at ILS Institution, Srinagar, J&K, India (Aug 2025 – Jan 2026)
  • Analyzed datasets using Python, SQL, and Excel to identify trends and support business decisions.
  • Performed EDA and wrote SQL queries (Joins, Aggregations, Subqueries) to extract and analyze data.
  • Built Excel dashboards using Pivot Tables and charts to track key performance metrics.
  • Created Power BI dashboards with KPI metrics and basic DAX measures for data-driven insights.

Projects:
1. Super Store Analysis (Python):
   • Conducted EDA on retail data using Python (Pandas, Matplotlib) to uncover key sales and profit trends.
   • Analyzed regions, categories, and customer segments to identify high- and low-performing products.
   • Generated actionable insights by highlighting profit improvement opportunities and region-wise performance.
2. Sales Dashboard (Power BI):
   • Designed an interactive Power BI dashboard to track key sales KPIs and performance metrics.
   • Analyzed sales trends and category performance to identify business opportunities.
   • Delivered actionable insights through clear and visually optimized data visualizations.
3. E-Commerce Sales Performance Dashboard (Excel):
   • Developed a dynamic Excel dashboard to track sales performance, profit margin, and key business metrics.
   • Utilized advanced Excel functions and PivotTables for data analysis and YoY growth calculation.
   • Created interactive visualizations including charts and maps to analyze sales trends and regional performance.

Certificates:
- Data Analysis Trainee Program — ILS Institutions (Hands-on experience in core Data Analysis, Python, SQL, Excel, Power BI, DAX, currently training in Machine Learning & AI).
`;

// API: AI Assistant for Resume & Data Queries
app.post('/api/ai-chat', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt string is required.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are Shahid Ahmad Sheer Gojree's AI Career & Data Assistant on his portfolio website.
Answer questions accurately, professionally, and concisely based on Shahid's resume and qualifications below.
If asked about hiring Shahid, highlight his strong analytical foundation in Python, SQL, Power BI, Excel, and Machine Learning.
Keep responses concise, engaging, and structured with bullet points or short paragraphs.

${RESUME_CONTEXT}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }] }
        ],
      });

      const text = response.text || 'I am ready to share details about Shahid\'s experience and qualifications.';
      return res.json({ reply: text });
    } catch (err: any) {
      console.error('Gemini API Error:', err?.message || err);
    }
  }

  // Smart fallback response if API Key is not set or fails
  const lower = prompt.toLowerCase();
  let fallbackReply = `Shahid Ahmad Sheer Gojree is a Data Analyst proficient in Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (MySQL, SQL Server), Power BI, and Excel. He is currently pursuing his BCA at Lovely Professional University and holds a Data Science Certification from ILS Institutions.`;

  if (lower.includes('project') || lower.includes('super store') || lower.includes('sales')) {
    fallbackReply = `Shahid has completed 3 key data analytics projects:
1. **Super Store Analysis (Python)**: Conducted EDA on retail data to uncover sales & profit trends across regions and categories.
2. **Sales Dashboard (Power BI)**: Built interactive KPI tracking and category performance dashboards using DAX measures.
3. **E-Commerce Sales Performance Dashboard (Excel)**: Created dynamic PivotTable dashboards with YoY growth calculation and profit margin tracking.`;
  } else if (lower.includes('skill') || lower.includes('tools') || lower.includes('python') || lower.includes('sql')) {
    fallbackReply = `Shahid's Core Technical Toolkit:
• **Programming & Analysis**: Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (Joins, Aggregations, Subqueries)
• **Visualization**: Power BI (DAX, KPI Dashboards), Advanced Excel (PivotTables, Dynamic Formulas)
• **Databases**: MySQL, SQL Server
• **Business Acumen**: EDA, KPI Analysis, Stakeholder Communication & Decision Support`;
  } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('phone')) {
    fallbackReply = `You can connect with Shahid directly:
• **Email**: shahidgojree880@gmail.com
• **Phone**: +91 8899664652
• **LinkedIn**: linkedin.com/in/shahid-gojree-082857389
• **GitHub**: github.com/shahid11227`;
  } else if (lower.includes('education') || lower.includes('degree') || lower.includes('university')) {
    fallbackReply = `Shahid's Education & Credentials:
1. **Bachelor of Computer Applications (BCA)** — Lovely Professional University (LPU), Punjab, India (June 2026 - Ongoing)
2. **Data Science Certification** — ILS Institutions, Srinagar (Aug 2025 - Present) covering Python, SQL, Power BI, ML & AI.`;
  }

  return res.json({ reply: fallbackReply });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
