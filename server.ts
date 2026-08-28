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
Role: Data Analyst | Machine Learning & Automation
Contact: +91 8899664652 | shahidgojree880@gmail.com
LinkedIn: https://linkedin.com/in/shahid-gojree-082857389
GitHub: https://github.com/shahid11227

Education:
1. Bachelor of Computer Applications (BCA) — Lovely Professional University (LPU), Punjab, India | June 2026 – Ongoing
2. Data Science Certification (Python, SQL, Power BI, ML, AI) — ILS Institutions, Srinagar, J&K, India | Aug 2025 – Present

Skill Summary:
- Programming & ML: Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn, XGBoost), SQL
- Data Visualization: Power BI (DAX, Data Modeling, Power Query), Excel (Pivot Tables, Dynamic Dashboards, XLOOKUP)
- AI & Automation: Telegram Bot API, Asyncio, LLM Prompt Engineering, Web Scraping & Ingestion
- Database Management: MySQL, PostgreSQL, SQL Server (CTEs, Window Functions, Complex Joins)
- Data Analysis: Data Cleaning, EDA (Exploratory Data Analysis), Feature Engineering, RFM Customer Segmentation, Regression Modeling
- Analytical Skills: Data Interpretation, Problem Solving, Statistical Analysis, KPI & Metrics Analysis
- Business Skills: Business Analysis, Supply Chain Logistics, Stakeholder Communication, Decision Support

Work Experience:
- Data Analyst Trainee at ILS Institution, Srinagar, J&K, India (Aug 2025 – Jan 2026)
  • Analyzed datasets using Python, SQL, and Excel to identify trends and support business decisions.
  • Performed EDA and wrote SQL queries (Joins, Aggregations, Subqueries, Window Functions) to extract and analyze data.
  • Built Excel dashboards using Pivot Tables and charts to track key performance metrics.
  • Created Power BI dashboards with KPI metrics and basic DAX measures for data-driven insights.

Featured Projects (6 Total):
1. Zepto Quick Commerce SQL Analytics (SQL & Logistics Analytics)
   • Repository: https://github.com/shahid11227/zepto-quick-commerce-sql-analytics
   • Analyzed 125,000+ grocery quick-commerce delivery logs across 15 hyperlocal dark store hubs.
   • Evaluated 10-minute delivery SLA adherence (94.2% overall), identified bottleneck peak hours, and performed RFM customer segmentation.
   • Engineered inventory forecasting query reducing fresh produce stockouts by 24%.

2. AI News Telegram Agent (Python & LLM Automation)
   • Repository: https://github.com/shahid11227/ai-news-telegram-agent
   • Built an automated AI intelligence bot scraping ArXiv, TechCrunch, and HackerNews RSS feeds (500+ articles/day).
   • Implemented vector deduplication (85% noise reduction) and LLM prompt pipelines generating 3-bullet executive digests dispatched via Telegram.

3. Retail Sales & Revenue Prediction (Machine Learning & Forecasting)
   • Repository: https://github.com/shahid11227/Sales_prediction
   • Built a supervised regression model (Random Forest / XGBoost) predicting retail revenue from TV, Social, and Radio advertising spend with 94.8% R² score and 4.2% MAE.

4. Super Store Analysis (Python & EDA)
   • Conducted exploratory data analysis on retail store data using Python (Pandas, Seaborn) across 4 regions and 3 customer segments.

5. Sales Dashboard (Power BI & DAX)
   • Built interactive KPI tracking dashboard with custom DAX measures for YoY sales growth, AOV, and margin breakdown.

6. E-Commerce Sales Performance Dashboard (Excel & PivotTables)
   • Built automated Excel dashboard with PivotTables, Slicers, and dynamic lookup formulas.

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
If asked about hiring Shahid, highlight his strong analytical foundation in Python, SQL, Machine Learning, AI Agents, Power BI, and Excel.
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
  let fallbackReply = `Shahid Ahmad Sheer Gojree is a Data Analyst skilled in Python (Pandas, Scikit-Learn), SQL (CTEs, Window Functions), Machine Learning, AI Telegram Agents, Power BI (DAX), and Excel. He is pursuing BCA at Lovely Professional University and holds a Data Science Certification from ILS Institutions.`;

  if (lower.includes('zepto') || lower.includes('quick commerce') || lower.includes('sla')) {
    fallbackReply = `**Zepto Quick Commerce SQL Analytics**:
• Analyzed 125,000+ quick-commerce delivery logs across 15 hyperlocal dark stores.
• Assessed 10-minute delivery SLA adherence (94.2% rate) and peak hourly surges.
• Performed RFM customer segmentation and engineered an inventory restocking query reducing stockouts by 24%.
• GitHub: github.com/shahid11227/zepto-quick-commerce-sql-analytics`;
  } else if (lower.includes('telegram') || lower.includes('ai news') || lower.includes('agent') || lower.includes('bot')) {
    fallbackReply = `**AI News Telegram Agent**:
• Automated end-to-end Python AI agent that ingests 500+ daily articles from ArXiv, TechCrunch, and HackerNews.
• Implemented semantic vector deduplication (85% noise reduction) and LLM prompt pipelines generating 3-bullet executive digests.
• Dispatches daily automated Telegram channel broadcasts with 99.9% uptime.
• GitHub: github.com/shahid11227/ai-news-telegram-agent`;
  } else if (lower.includes('prediction') || lower.includes('ml') || lower.includes('machine learning') || lower.includes('sales_prediction')) {
    fallbackReply = `**Retail Sales & Revenue Prediction (Machine Learning)**:
• Developed supervised regression models (Random Forest, XGBoost) forecasting sales revenue based on advertising investments (TV, Social Media, Radio).
• Engineered lag features, rolling moving averages, and achieved a 94.8% R² score with 4.2% Mean Absolute Error (MAE).
• GitHub: github.com/shahid11227/Sales_prediction`;
  } else if (lower.includes('project') || lower.includes('projects') || lower.includes('github')) {
    fallbackReply = `Shahid has built 6 featured projects in Data Analytics, ML & AI:
1. **Zepto Quick Commerce SQL Analytics**: 125k+ orders analyzed, 10-min SLA adherence, RFM segmentation.
2. **AI News Telegram Agent**: LLM news ingestion, semantic deduplication, automated Telegram bot.
3. **Retail Sales Prediction (ML)**: Supervised regression forecasting with 94.8% R² accuracy.
4. **Super Store Analysis (Python)**: Retail EDA identifying profit margin leaks across 4 regions.
5. **Sales Performance Dashboard (Power BI)**: Executive KPI tracking with dynamic DAX measures.
6. **E-Commerce Sales Dashboard (Excel)**: PivotTable analytics with automated lookup formulas.`;
  } else if (lower.includes('skill') || lower.includes('tools') || lower.includes('python') || lower.includes('sql')) {
    fallbackReply = `Shahid's Core Technical Arsenal:
• **Programming & ML**: Python (Pandas, NumPy, Scikit-Learn, XGBoost), SQL (MySQL, PostgreSQL, CTEs, Window Functions)
• **AI & Automation**: Telegram Bot API, Asyncio, LLM Prompt Engineering, Web Scraping
• **Visualization**: Power BI (DAX, Data Modeling), Excel (PivotTables, Dynamic Dashboards)
• **Business Analysis**: EDA, RFM Segmentation, KPI Tracking, Stakeholder Communication`;
  } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('phone')) {
    fallbackReply = `You can reach Shahid directly:
• **Email**: shahidgojree880@gmail.com
• **Phone**: +91 8899664652
• **LinkedIn**: linkedin.com/in/shahid-gojree-082857389
• **GitHub**: github.com/shahid11227`;
  } else if (lower.includes('education') || lower.includes('degree') || lower.includes('university')) {
    fallbackReply = `Shahid's Education & Credentials:
1. **Bachelor of Computer Applications (BCA)** — Lovely Professional University (LPU), Punjab, India (June 2026 - Ongoing)
2. **Data Science Certification** — ILS Institutions, Srinagar (Aug 2025 - Present) covering Python, SQL, ML, Power BI & AI.`;
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
