// Intelligent Client-Side Knowledge Engine for Shahid's Career Assistant
// Guarantees 100% instant, accurate, rich Markdown responses on any mobile phone, browser, or network state.

export function generateCareerAnswer(prompt: string): string {
  const q = prompt.toLowerCase().trim();

  // 1. Greetings & Introductory
  if (/^(hi|hello|hey|greetings|hola|namaste|good\s*(morning|afternoon|evening)|who are you|what can you do)/i.test(q)) {
    return `Hello! 👋 I'm **Shahid's AI Career Assistant**.

I can answer any questions about Shahid's:
• 🛒 **Zepto Quick Commerce SQL Project** (125k+ orders, 94.2% SLA, dark stores)
• 🤖 **AI News Telegram Agent** (LLM summarization, async Python pipeline)
• 📈 **Retail Sales ML Prediction** (94.8% R² score, XGBoost & Random Forest)
• 📊 **Super Store Retail EDA** ($2.3M+ dataset, profit margin leak analysis)
• 💼 **Power BI & DAX Dashboards** (Star schema, dynamic YoY growth)
• 📑 **Advanced Excel & Automation** (XLOOKUP, PivotTables, 15 hrs/wk saved)
• 🎓 **Education & Certifications** (LPU BCA & ILS Data Science)
• 📬 **Contact & Hiring Information** (+91 8899664652, Email, LinkedIn)

What specific project or skill would you like to explore?`;
  }

  // 2. Zepto SQL Project
  if (q.includes('zepto') || q.includes('quick commerce') || q.includes('dark store') || q.includes('10-min') || q.includes('sla') || (q.includes('sql') && (q.includes('project') || q.includes('grocery') || q.includes('delivery')))) {
    return `### 🛒 **Zepto Quick Commerce SQL Analytics**

**Project Overview**:
Shahid executed comprehensive SQL analytics on **125,000+ grocery quick-commerce delivery logs** spanning **15 dark store fulfillment hubs** across major metro clusters (Bengaluru, Mumbai, Gurugram).

---

#### 🔑 **Key Technical Highlights & Methodologies**:
1. **10-Minute SLA Adherence (94.2%)**:
   - Leveraged SQL **Common Table Expressions (CTEs)** and **Window Functions** (\`LAG\`, \`LEAD\`, \`DENSE_RANK\`) to track end-to-end order processing, rider pickup latency, and transit times.
   - Identified severe SLA degradation during the 8:00 PM – 10:00 PM peak delivery window.
2. **RFM Customer Segmentation**:
   - Divided 40,000+ active customers into Recency, Frequency, and Monetary quintiles using \`NTILE(5)\`.
   - Uncovered that the top **18% Champions cohort** generated **62% of total Gross Merchandise Value (GMV)**.
3. **Stockout Prevention Query**:
   - Formulated dynamic rolling inventory velocity queries that reduced out-of-stock incidents in high-turnover categories (Fresh Produce & Dairy) by **24%**.

---

🔗 **GitHub Repository**: [github.com/shahid11227/zepto-quick-commerce-sql-analytics](https://github.com/shahid11227/zepto-quick-commerce-sql-analytics)`;
  }

  // 3. AI News Telegram Agent
  if (q.includes('telegram') || q.includes('ai news') || q.includes('agent') || q.includes('bot') || q.includes('arxiv') || q.includes('llm') || q.includes('digest')) {
    return `### 🤖 **AI News Telegram Agent**

**Project Overview**:
Shahid engineered an autonomous end-to-end Python intelligence agent that ingests, filters, and summarizes daily artificial intelligence breakthroughs from **ArXiv cs.AI**, **TechCrunch**, and **HackerNews**.

---

#### 🔑 **Architecture & Capabilities**:
1. **Asynchronous Ingestion Pipeline**:
   - Built using \`asyncio\` and \`aiohttp\` to poll and parse 500+ research papers and news articles daily with non-blocking concurrency.
2. **Semantic Deduplication (85% Noise Elimination)**:
   - Generated text embeddings to calculate cosine similarity across multi-source stories, deduplicating repetitive coverage.
3. **LLM Prompt Synthesis**:
   - Automated 3-bullet executive takeaways covering *Core Technical Breakthrough*, *Business & Commercial Implication*, and *Original Source Link*.
4. **Automated Scheduled Broadcast**:
   - Deployed with Telegram Bot API and asynchronous cron loops operating with **99.9% uptime**.

---

🔗 **GitHub Repository**: [github.com/shahid11227/ai-news-telegram-agent](https://github.com/shahid11227/ai-news-telegram-agent)`;
  }

  // 4. Sales Prediction / Machine Learning
  if (q.includes('predict') || q.includes('sales_prediction') || q.includes('machine learning') || q.includes('ml') || q.includes('regression') || q.includes('xgboost') || q.includes('random forest') || q.includes('scikit') || q.includes('r2') || q.includes('r²')) {
    return `### 📈 **Retail Sales & Revenue Prediction (Machine Learning)**

**Project Overview**:
A supervised machine learning predictive pipeline developed with Python to forecast retail sales performance based on marketing allocations (TV, Radio, Social Media advertising), seasonal demand, and historical velocity.

---

#### 🔑 **Model Performance & Engineering**:
1. **Benchmark Accuracy**:
   - Achieved a **94.8% R² Score** and **4.2% Mean Absolute Error (MAE)**.
   - Validated through **5-Fold Cross Validation** with Bayesian hyperparameter tuning.
2. **Feature Engineering**:
   - Created non-linear feature interactions, 7-day rolling sales averages, and promotional lag variables.
3. **Spend Attribution**:
   - Tree-based feature importance revealed **TV Advertising (42.8%)** and **Social Campaigns (26.5%)** as the primary revenue drivers.

---

🔗 **GitHub Repository**: [github.com/shahid11227/Sales_prediction](https://github.com/shahid11227/Sales_prediction)`;
  }

  // 5. Super Store Analysis / Python EDA
  if (q.includes('super store') || q.includes('superstore') || q.includes('eda') || q.includes('exploratory') || (q.includes('python') && (q.includes('analysis') || q.includes('pandas') || q.includes('seaborn')))) {
    return `### 📊 **Super Store Exploratory Data Analysis (EDA)**

**Project Overview**:
A deep-dive Python data exploration on **$2.3M+ in multi-region commercial transactions** to diagnose margin leakages, customer segment profitability, and regional growth frontiers.

---

#### 🔑 **Key Insights Uncovered**:
• **Profit Margins**: Overall commercial sales averaged **14.2% profit margin**, but Tables and Bookcases suffered **negative profit margins (-8.4%)** due to unchecked discount bundling.
• **Regional Strength**: The Western region emerged as the highest margin driver (**14.9%**), primarily fueled by Technology and Office Supplies.
• **Strategic Recommendation**: Implemented discount guardrails capping promotional allowances at 20%, projected to recover ~$45,000 in annual profit.`;
  }

  // 6. Power BI & DAX
  if (q.includes('power bi') || q.includes('powerbi') || q.includes('dax') || q.includes('dashboard') || q.includes('kpi') || q.includes('star schema')) {
    return `### 💼 **Power BI & Business Intelligence Competencies**

Shahid designs executive-ready, interactive Power BI reporting solutions focused on actionable decision support:

---

• **Advanced DAX Formulation**:
  - Complex dynamic measures utilizing \`CALCULATE\`, \`SAMEPERIODLASTYEAR\`, \`DIVIDE\`, \`DATEADD\`, and \`RANKX\`.
  - Built Year-over-Year (YoY) revenue comparison and moving average indicators.
• **Data Architecture & Modeling**:
  - Structured star schema data models (Fact tables joined to normalized Dimension tables) with 1-to-Many single-direction relationships.
  - Power Query (M) ETL transformations for clean schema loads.
• **Dashboard UX**:
  - Dynamic slicers, drill-through matrix pages, sparklines, and KPI target variance gauges.`;
  }

  // 7. SQL Skills & Queries
  if (q.includes('sql') || q.includes('database') || q.includes('mysql') || q.includes('postgres') || q.includes('window function') || q.includes('cte') || q.includes('join')) {
    return `### 🗄️ **SQL & Relational Database Mastery**

Shahid possesses strong SQL querying and relational schema engineering skills:

---

• **Complex Querying**: Multi-table \`INNER / LEFT / FULL OUTER JOIN\`s, Subqueries, and Nested Common Table Expressions (\`WITH cte AS (...)\`).
• **Window Functions**: \`ROW_NUMBER()\`, \`DENSE_RANK()\`, \`NTILE(4)\`, \`LAG()\`, \`LEAD()\`, \`SUM() OVER (PARTITION BY ... ORDER BY ...)\`.
• **Database Engines**: MySQL, PostgreSQL, Microsoft SQL Server.
• **Optimization**: Query indexing strategies, \`EXPLAIN ANALYZE\` execution plan inspection, and aggregation pipelines.`;
  }

  // 8. Excel & Automation
  if (q.includes('excel') || q.includes('pivot') || q.includes('xlookup') || q.includes('vlookup') || q.includes('spreadsheet')) {
    return `### 📑 **Advanced Microsoft Excel Proficiency**

• **Advanced Lookup & Calculation**: \`XLOOKUP\`, \`INDEX / MATCH\`, \`SUMIFS\`, \`COUNTIFS\`, nested logical \`IF / AND / OR\` formulas.
• **Interactive Dashboards**: Dynamic PivotTables, PivotCharts, Timeline slicers, and conditional formatting rules.
• **Process Automation**: Streamlined manual reconciliation and reporting spreadsheets, **saving ~15 hours per week** of repetitive manual effort.`;
  }

  // 9. Education & Background
  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('lpu') || q.includes('study') || q.includes('qualif') || q.includes('certif') || q.includes('google') || q.includes('capstone')) {
    return `### 🎓 **Shahid's Education & Certifications**

1. **Bachelor of Computer Applications (BCA)**
   - **Institution**: Lovely Professional University (LPU), Punjab, India
   - **Timeline**: June 2026 – Ongoing
   - **Focus**: Computer Science fundamentals, database design, software engineering, and data structures.

2. **Data Science Certification (Python, SQL, Power BI, ML, AI)**
   - **Institution**: ILS Institutions, Srinagar, J&K
   - **Timeline**: Aug 2025 – Present
   - **Curriculum**: Intensive hands-on training in Python, SQL, Power BI, Machine Learning fundamentals, AI techniques, and business analytics.

3. **Google Data Analytics Capstone: Complete a Case Study**
   - **Issuer**: Google
   - **Credential ID**: \`S6Q9IYCNTIX9\`
   - **Key Competencies**: End-to-end data analysis lifecycle (Ask, Prepare, Process, Analyze, Share, Act), data cleansing, SQL transformations, and executive storytelling.`;
  }

  // 10. Work Experience
  if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('trainee') || q.includes('intern') || q.includes('career')) {
    return `### 💼 **Work Experience & Internships**

**Data Analyst Trainee** — *ILS Institution, Srinagar, J&K*
*(August 2025 – January 2026)*

• Ingested, cleaned, and analyzed complex commercial and retail datasets using Python (Pandas/NumPy) and SQL.
• Authored optimized SQL scripts (CTEs, Window Functions, Aggregate Joins) to extract high-accuracy metric reports.
• Designed automated Excel reporting workflows and Power BI KPI dashboards to assist stakeholder decision-making.
• Built end-to-end data pipelines translating raw operational numbers into commercial strategies.`;
  }

  // 11. Why Hire / Strengths
  if (q.includes('hire') || q.includes('why') || q.includes('strength') || q.includes('fit') || q.includes('value') || q.includes('reason')) {
    return `### 🌟 **Why Shahid is a Strong Addition to Your Team**

1. **Full-Stack Data Capabilities**: Competent across the complete pipeline — from writing raw SQL data warehouse queries to training predictive Scikit-Learn ML models and crafting executive Power BI dashboards.
2. **Proven Big Data Handling**: Analyzed **125,000+ live transactions** in quick commerce logistics and built autonomous AI systems with **99.9% uptime**.
3. **Business & Commercial Focus**: Doesn't just generate graphs; isolates margin leakage (e.g. -8.4% furniture loss in Super Store), optimizes delivery SLAs, and automates manual reporting.
4. **Proactive & Fast Learner**: Combines academic BCA rigor with real-world case studies in modern Python, SQL, and AI tools.`;
  }

  // 12. Contact & Availability
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('linkedin') || q.includes('github') || q.includes('reach') || q.includes('resume') || q.includes('location') || q.includes('hire him')) {
    return `### 📬 **Get in Touch with Shahid**

• 📱 **Phone**: [+91 8899664652](tel:+918899664652)
• ✉️ **Email**: [shahidgojree880@gmail.com](mailto:shahidgojree880@gmail.com)
• 💼 **LinkedIn**: [linkedin.com/in/shahid-gojree-082857389](https://linkedin.com/in/shahid-gojree-082857389)
• 🐙 **GitHub**: [github.com/shahid11227](https://github.com/shahid11227)
• 📍 **Location**: Srinagar, Jammu & Kashmir / Punjab, India *(Available for On-site & Remote roles)*

Feel free to reach out directly via email or phone for interview scheduling!`;
  }

  // 13. General / Comprehensive Fallback
  return `### **Shahid Ahmad Sheer Gojree** — *Data Analyst*

Shahid specializes in **Python, SQL, Machine Learning, AI Automation, Power BI, and Advanced Excel**.

Here are quick links to his core projects:
• **Zepto SQL Analytics**: [GitHub Repo](https://github.com/shahid11227/zepto-quick-commerce-sql-analytics) — 125,000+ orders, 94.2% SLA adherence.
• **AI News Telegram Agent**: [GitHub Repo](https://github.com/shahid11227/ai-news-telegram-agent) — Async ingestion & LLM 3-bullet digests.
• **Sales ML Prediction**: [GitHub Repo](https://github.com/shahid11227/Sales_prediction) — 94.8% R² regression model.
• **Super Store Analysis**: $2.3M+ retail transaction exploration.

You can contact him directly at **shahidgojree880@gmail.com** or **+91 8899664652**.

What would you like to know more about?`;
}
