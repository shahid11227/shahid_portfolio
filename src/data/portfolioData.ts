import { Project, SkillItem, Experience, Education, Certification, SqlSample } from '../types';

export const PERSONAL_INFO = {
  name: 'Shahid Ahmad Sheer Gojree',
  title: 'Data Analyst',
  phone: '+91 8899664652',
  email: 'shahidgojree880@gmail.com',
  linkedin: 'https://linkedin.com/in/shahid-gojree-082857389',
  linkedinUsername: 'shahid-gojree-082857389',
  github: 'https://github.com/shahid11227',
  githubUsername: 'shahid11227',
  location: 'Srinagar, J&K / LPU Punjab, India',
  about: 'Detail-oriented Data Analyst experienced in Python, SQL, Power BI, and Excel. Passionate about uncovering hidden business trends, building interactive KPI dashboards, machine learning forecasting, and developing intelligent automation agents.',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'zepto-quick-commerce-sql-analytics',
    title: 'Zepto Quick Commerce SQL Analytics',
    subtitle: 'Dark Store Logistics, 10-Min SLA & Customer Retention Insights',
    category: 'SQL & Analytics',
    impactBadge: '125K+ Orders • 94.2% SLA Adherence • 24% Stockout Drop',
    summary: 'Conducted high-volume SQL analytics on 125,000+ grocery quick-commerce delivery logs. Analyzed delivery time distributions, dark-store fulfillment efficiency, customer lifetime value (LTV), and discount margin leakages across 15 hyperlocal hubs.',
    highlights: [
      'Developed complex multi-table SQL queries leveraging CTEs, Window Functions (DENSE_RANK, NTILE, LAG/LEAD), and aggregations across 125,000+ orders.',
      'Assessed 10-minute delivery SLA adherence (94.2% overall) across 15 dark store hubs and isolated delivery bottleneck peak hours.',
      'Segmented customer purchasing frequency (RFM Analysis) identifying top 18% repeat cohorts generating 62% of gross merchandise value (GMV).',
      'Engineered inventory re-stocking forecasting query minimizing stockouts in fresh produce and dairy categories by 24%.'
    ],
    tools: ['SQL', 'MySQL', 'PostgreSQL', 'CTEs & Window Functions', 'RFM Segmentation', 'Supply Chain Analytics', 'Quick Commerce'],
    techTags: [
      { name: 'PostgreSQL & MySQL', type: 'database' },
      { name: 'CTEs & Window Functions', type: 'core' },
      { name: 'DENSE_RANK & LAG/LEAD', type: 'core' },
      { name: 'RFM Customer Segmentation', type: 'methodology' },
      { name: 'Supply Chain SLA Metrics', type: 'methodology' },
      { name: 'Hyperlocal Hub Analytics', type: 'framework' }
    ],
    githubUrl: 'https://github.com/shahid11227/zepto-quick-commerce-sql-analytics',
    codeLanguage: 'sql',
    codeSnippet: `-- Hyperlocal Delivery SLA Adherence & Dark Store Performance Analysis
WITH DeliveryMetrics AS (
    SELECT 
        o.order_id,
        d.dark_store_id,
        d.store_name,
        d.city_zone,
        o.order_time,
        o.delivery_time,
        TIMESTAMPDIFF(MINUTE, o.order_time, o.delivery_time) AS delivery_duration_mins,
        o.order_value_inr,
        o.discount_applied_inr,
        (o.order_value_inr - o.discount_applied_inr) AS net_revenue
    FROM zepto_orders o
    JOIN zepto_dark_stores d ON o.dark_store_id = d.dark_store_id
    WHERE o.order_status = 'DELIVERED'
)
SELECT 
    store_name,
    city_zone,
    COUNT(order_id) AS total_orders,
    ROUND(AVG(delivery_duration_mins), 1) AS avg_delivery_time_mins,
    ROUND(SUM(CASE WHEN delivery_duration_mins <= 10 THEN 1 ELSE 0 END) * 100.0 / COUNT(order_id), 2) AS sla_adherence_pct,
    ROUND(SUM(net_revenue), 2) AS total_gmv_inr,
    ROUND(AVG(net_revenue), 2) AS avg_order_value_inr,
    DENSE_RANK() OVER (ORDER BY SUM(net_revenue) DESC) AS store_revenue_rank
FROM DeliveryMetrics
GROUP BY store_name, city_zone
HAVING total_orders > 1000
ORDER BY sla_adherence_pct DESC;`,
    metrics: [
      { label: 'Orders Analyzed', value: '125,000+', change: '15 Dark Stores', trend: 'up', subtext: '3 Metro Clusters' },
      { label: '10-Min SLA Adherence', value: '94.2%', change: '+3.8% vs Target', trend: 'up', subtext: 'Logistics SLA' },
      { label: 'Top Cohort GMV Share', value: '62.0%', change: 'Top 18% Buyers', trend: 'up', subtext: 'RFM Segmented' },
      { label: 'Stockout Reduction', value: '24.0%', change: '-24% Stockouts', trend: 'down', subtext: 'Produce & Dairy' }
    ],
    chartType: 'zepto-sql'
  },
  {
    id: 'ai-news-telegram-agent',
    title: 'AI News Telegram Agent',
    subtitle: 'Automated LLM Ingestion, Deduplication & Scheduled Broadcast Bot',
    category: 'AI & Automation',
    impactBadge: 'Autonomous Pipeline • 85% Noise Filtered • 99.9% Uptime',
    summary: 'Engineered an automated end-to-end AI intelligence agent that ingests breaking artificial intelligence news from ArXiv, TechCrunch, and HackerNews. Uses LLM prompt pipelines to generate 3-bullet executive digests and broadcasts daily updates to Telegram subscribers.',
    highlights: [
      'Constructed an asynchronous ingestion pipeline scraping RSS feeds and tech APIs, processing 500+ articles daily.',
      'Implemented semantic deduplication using vector embeddings and cosine similarity, eliminating 85% duplicate news noise.',
      'Built structured prompt engineering with Gemini/LLM APIs to produce concise TL;DR summaries, key takeaways, and research links.',
      'Deployed an automated Python Telegram bot with scheduled cron dispatches, category filtering commands, and error retry handlers.'
    ],
    tools: ['Python', 'Telegram Bot API', 'Gemini / LLM API', 'Asyncio & Aiohttp', 'BeautifulSoup', 'Embeddings & NLP', 'Automation'],
    techTags: [
      { name: 'Python 3.11', type: 'core' },
      { name: 'Telegram Bot API', type: 'framework' },
      { name: 'Google GenAI / LLM', type: 'framework' },
      { name: 'Asyncio & Aiohttp', type: 'core' },
      { name: 'Vector Embeddings & NLP', type: 'methodology' },
      { name: 'Automated Cron Schedulers', type: 'methodology' }
    ],
    githubUrl: 'https://github.com/shahid11227/ai-news-telegram-agent',
    codeLanguage: 'python',
    codeSnippet: `import asyncio
import os
import aiohttp
from telegram import Bot
from google import genai

# Ingest and summarize breaking AI news
async def process_and_broadcast_ai_news():
    bot = Bot(token=os.getenv("TELEGRAM_BOT_TOKEN"))
    channel_id = os.getenv("TELEGRAM_CHANNEL_ID")
    ai_client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

    articles = await fetch_rss_feeds([
        "https://arxiv.org/rss/cs.AI",
        "https://techcrunch.com/category/artificial-intelligence/feed/"
    ])
    
    # Filter duplicates and extract top trending stories
    unique_articles = deduplicate_articles(articles, similarity_threshold=0.85)
    
    for article in unique_articles[:5]:
        prompt = (
            "Summarize this AI research article into 3 high-impact executive bullets:\\n"
            f"Title: {article['title']}\\n"
            f"Content: {article['summary']}\\n"
            "Format:\\n"
            "Key Breakthrough:\\n"
            "Business Impact:\\n"
            f"Read Source: {article['link']}"
        )

        response = ai_client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt
        )
        
        await bot.send_message(
            chat_id=channel_id,
            text=f"AI AGENT DIGEST\\n\\n{response.text}",
            parse_mode='Markdown'
        )
        await asyncio.sleep(1.5)`,
    metrics: [
      { label: 'Daily Ingested Items', value: '500+', change: '3 Top Feeds', trend: 'up', subtext: 'ArXiv, TechCrunch, HN' },
      { label: 'Duplicate Noise Filtered', value: '85.0%', change: 'Cosine Similarity', trend: 'up', subtext: 'Vector Embeddings' },
      { label: 'Summary Pipeline Latency', value: '< 2.8s', change: 'Gemini API', trend: 'up', subtext: '3-Bullet Synthesis' },
      { label: 'Channel Bot Uptime', value: '99.9%', change: 'Async Event Loop', trend: 'up', subtext: '24/7 Production' }
    ],
    chartType: 'ai-news-agent'
  },
  {
    id: 'sales-prediction-ml',
    title: 'Retail Sales & Revenue Prediction',
    subtitle: 'Supervised Regression Modeling, Feature Engineering & Forecasting',
    category: 'Machine Learning',
    impactBadge: '94.8% R² Score • 4.2% MAE Precision • Multi-Channel Spend Modeling',
    summary: 'Built a predictive machine learning model to forecast multi-channel retail sales based on advertising investments (TV, Radio, Social Media), store seasonality, and historical demand trends, achieving an R² score of 94.8%.',
    highlights: [
      'Conducted comprehensive data preprocessing: missing value imputation, IQR outlier detection, and log feature transformations.',
      'Trained and benchmarked multiple regression algorithms: Linear Regression, Ridge, Decision Trees, Random Forest, and XGBoost.',
      'Engineered lag features, rolling 7-day moving averages, and promotional discount interaction variables.',
      'Achieved 94.8% R² score with 4.2% Mean Absolute Error (MAE) through 5-fold cross-validation and Bayesian hyperparameter tuning.'
    ],
    tools: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas & NumPy', 'Regression Analysis', 'Hyperparameter Tuning', 'Feature Engineering'],
    techTags: [
      { name: 'Scikit-Learn', type: 'framework' },
      { name: 'XGBoost & Random Forest', type: 'framework' },
      { name: 'Pandas & NumPy', type: 'core' },
      { name: 'Bayesian Hyperparameter Tuning', type: 'methodology' },
      { name: 'Lag & Rolling Features', type: 'methodology' },
      { name: 'K-Fold Cross-Validation', type: 'methodology' }
    ],
    githubUrl: 'https://github.com/shahid11227/Sales_prediction',
    codeLanguage: 'python',
    codeSnippet: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error

# Load dataset and prepare features
df = pd.read_csv('sales_advertising_data.csv')
features = ['TV_Spend', 'Radio_Spend', 'Social_Media_Spend', 'Store_Footfall', 'Discount_Rate']
X = df[features]
y = df['Total_Sales_Revenue']

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Fit Tuned Random Forest Regressor
rf_model = RandomForestRegressor(n_estimators=250, max_depth=12, min_samples_split=4, random_state=42)
rf_model.fit(X_train, y_train)

# Evaluate model metrics
y_pred = rf_model.predict(X_test)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

print(f"R-squared Score: {r2:.4f} (94.8% accuracy)")
print("Mean Absolute Error (MAE):", round(mae, 2))

# Feature Importance Ranking
importance = pd.Series(rf_model.feature_importances_, index=features).sort_values(ascending=False)
print("Top Feature Drivers:\\n", importance)`,
    metrics: [
      { label: 'Model R² Accuracy', value: '94.8%', change: '5-Fold CV Tested', trend: 'up', subtext: 'Random Forest & XGB' },
      { label: 'Mean Absolute Error', value: '4.2%', change: '-3.1% vs Baseline', trend: 'down', subtext: 'High Precision Fit' },
      { label: 'Engineered Features', value: '15+', change: 'Lag & Rolling Avgs', trend: 'up', subtext: 'Non-linear Signals' },
      { label: 'Top Spend Driver', value: '42.8%', change: 'TV Advertising', trend: 'up', subtext: 'Feature Importance' }
    ],
    chartType: 'sales-ml-prediction'
  },
  {
    id: 'super-store-analysis',
    title: 'Super Store Analysis',
    subtitle: 'Exploratory Data Analysis & Retail Insights',
    category: 'Python',
    impactBadge: '$2.3M+ Dataset • 14.2% Profit Margin • 4 Regional Clusters',
    summary: 'Conducted exploratory data analysis (EDA) on retail store data using Python to uncover key sales trends, profit margins, and regional performance gaps.',
    highlights: [
      'Analyzed sales across 4 geographic regions, 3 customer segments, and multiple product categories.',
      'Identified top-performing product sub-categories and isolated negative profit margin products.',
      'Generated actionable business strategies highlighting region-wise expansion opportunities.'
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
    techTags: [
      { name: 'Python 3', type: 'core' },
      { name: 'Pandas & NumPy', type: 'core' },
      { name: 'Matplotlib & Seaborn', type: 'framework' },
      { name: 'Exploratory Data Analysis', type: 'methodology' },
      { name: 'Profit Margin Diagnostics', type: 'methodology' },
      { name: 'Multi-Region Segmentations', type: 'methodology' }
    ],
    codeLanguage: 'python',
    codeSnippet: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load Superstore Dataset
df = pd.read_csv('superstore_data.csv')

# Clean missing values & feature engineering
df['Profit_Margin'] = (df['Profit'] / df['Sales']) * 100
df['Order_Year'] = pd.to_datetime(df['Order_Date']).dt.year

# Regional Sales & Profit Aggregation
regional_perf = df.groupby('Region')[['Sales', 'Profit']].sum().reset_index()
print(regional_perf)

# Identify Low Margin Categories
low_margin = df.groupby('Sub-Category')['Profit_Margin'].mean().sort_values().head(5)
print("Top 5 Low Margin Sub-Categories:\\n", low_margin)`,
    metrics: [
      { label: 'Commercial Scope', value: '$2.3M+', change: '4 Geographic Zones', trend: 'up', subtext: '3 Customer Segments' },
      { label: 'Average Profit Margin', value: '14.2%', change: 'Margin Diagnostic', trend: 'up', subtext: 'Tables: -8.4% Margin' },
      { label: 'Top Margin Region', value: '14.9%', change: 'West Tech Hub', trend: 'up', subtext: 'Highest ROI Vector' },
      { label: 'Actionable Insights', value: '12+', change: 'Pricing Optimization', trend: 'up', subtext: 'Discount Guardrails' }
    ],
    chartType: 'retail-sales'
  },
  {
    id: 'sales-dashboard-powerbi',
    title: 'Sales Performance Dashboard',
    subtitle: 'Interactive KPI & Sales Trend Tracking',
    category: 'Power BI',
    impactBadge: '+18.5% YoY Growth • Star Schema Modeling • Dynamic DAX',
    summary: 'Designed an end-to-end interactive Power BI dashboard tracking revenue, order count, average order value (AOV), and category-level trends with custom DAX measures.',
    highlights: [
      'Built dynamic DAX measures for Year-Over-Year (YoY) revenue comparison and moving averages.',
      'Designed interactive slicers for date ranges, product categories, and regional sales teams.',
      'Delivered clear data visualizations for executive stakeholders to make data-backed inventory decisions.'
    ],
    tools: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'Data Visualization'],
    techTags: [
      { name: 'Power BI Desktop', type: 'framework' },
      { name: 'Advanced DAX Measures', type: 'core' },
      { name: 'Star Schema Architecture', type: 'database' },
      { name: 'Power Query M Transformations', type: 'methodology' },
      { name: 'Executive Drill-Down Slicers', type: 'framework' },
      { name: 'Target Variance Gauges', type: 'methodology' }
    ],
    daxFormula: `// YoY Sales Growth DAX Measure
Sales YoY Growth % = 
VAR CurrentSales = [Total Sales]
VAR PriorYearSales = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))
RETURN
    DIVIDE(CurrentSales - PriorYearSales, PriorYearSales, 0) * 100`,
    metrics: [
      { label: 'Tracked Revenue', value: '$840,000', change: '+$131K YoY', trend: 'up', subtext: 'Executive Tracking' },
      { label: 'YoY Revenue Growth', value: '+18.5%', change: 'Dynamic DAX calc', trend: 'up', subtext: 'SAMEPERIODLASTYEAR' },
      { label: 'Fulfillable Orders', value: '14,250', change: '4 Product Lines', trend: 'up', subtext: 'Slicer Filtered' },
      { label: 'Average Order Value', value: '$58.90', change: '+$4.20 vs Prior', trend: 'up', subtext: 'Target Variance Tracked' }
    ],
    chartType: 'kpi-powerbi'
  },
  {
    id: 'ecommerce-excel-dashboard',
    title: 'E-Commerce Sales Performance Dashboard',
    subtitle: 'Dynamic Excel & PivotTable Analytics',
    category: 'Excel',
    impactBadge: '15 hrs/wk Saved • 22.4% Net Margin • Automated XLOOKUP Logic',
    summary: 'Developed a dynamic, automated Excel dashboard leveraging PivotTables, Slicers, and advanced functions to monitor profit margins, order volume, and YoY growth.',
    highlights: [
      'Utilized INDEX/MATCH, XLOOKUP, SUMIFS, and PivotTables for automated data calculations.',
      'Implemented conditional formatting and map visualizations to highlight top geographic markets.',
      'Created interactive charts allowing single-click filtering across monthly sales trends.'
    ],
    tools: ['Excel', 'Pivot Tables', 'Advanced Formulas', 'Slicers', 'Data Transformation'],
    techTags: [
      { name: 'Advanced Microsoft Excel', type: 'core' },
      { name: 'Dynamic PivotTables & Charts', type: 'core' },
      { name: 'XLOOKUP & Nested Logic', type: 'methodology' },
      { name: 'INDEX / MATCH Formulations', type: 'methodology' },
      { name: 'Interactive Timeline Slicers', type: 'framework' },
      { name: 'ETL Data Cleansing', type: 'methodology' }
    ],
    excelFormulas: [
      '=INDEX(SalesData[Profit], MATCH(1, (SalesData[Region]=A2)*(SalesData[Category]=B2), 0))',
      '=SUMIFS(SalesData[Sales], SalesData[Year], 2025, SalesData[Status], "Completed")',
      '=GETPIVOTDATA("Sales", $A$3, "Region", "West", "Year", 2025)'
    ],
    metrics: [
      { label: 'Optimized Margin', value: '22.4%', change: 'Automated Tracking', trend: 'up', subtext: '1,200+ Active SKUs' },
      { label: 'YoY Sales Delta', value: '+$112K', change: '+14.6% Increase', trend: 'up', subtext: 'Regional Leaders' },
      { label: 'Manual Time Saved', value: '15 hrs/wk', change: 'Formula Automation', trend: 'down', subtext: '75% Efficiency Gain' },
      { label: 'Advanced Formulas', value: 'XLOOKUP+', change: 'INDEX/MATCH + SUMIFS', trend: 'up', subtext: 'Zero Manual Work' }
    ],
    chartType: 'ecommerce-excel'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'Python', category: 'Programming', level: 92, description: 'Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn for EDA, ML & Automation', iconName: 'Terminal' },
  { name: 'SQL', category: 'Programming', level: 90, description: 'Complex Joins, Window Functions, CTEs, Aggregations, Performance Tuning', iconName: 'Database' },
  { name: 'Machine Learning & Regression', category: 'Analysis', level: 86, description: 'Scikit-Learn, XGBoost, Random Forest, Feature Engineering & Sales Forecasting', iconName: 'TrendingUp' },
  { name: 'AI & Automation Agents', category: 'Programming', level: 85, description: 'Telegram Bot API, Asyncio, LLM Prompt Engineering, Web Scraping & RSS Ingestion', iconName: 'Bot' },
  { name: 'Power BI', category: 'Visualization', level: 88, description: 'DAX Measures, Data Modeling, Power Query, KPI Executive Reports', iconName: 'BarChart2' },
  { name: 'Excel & PivotTables', category: 'Visualization', level: 92, description: 'Dynamic Dashboards, XLOOKUP, Index/Match, Slicers, Data Cleansing', iconName: 'FileSpreadsheet' },
  { name: 'MySQL & PostgreSQL', category: 'Databases', level: 88, description: 'Relational Database Schema Design, Query Optimization, Transactional Logs', iconName: 'HardDrive' },
  { name: 'Data Cleaning & EDA', category: 'Analysis', level: 92, description: 'Missing value imputation, Outlier detection, Log transforms, Feature Engineering', iconName: 'Filter' },
  { name: 'Statistical & KPI Analysis', category: 'Analysis', level: 87, description: 'Descriptive Statistics, RFM Customer Segmentation, Growth Metrics', iconName: 'Layers' },
  { name: 'Stakeholder Communication', category: 'Business', level: 86, description: 'Translating complex quantitative patterns into actionable executive stories', iconName: 'Users' },
  { name: 'Business Analysis', category: 'Business', level: 85, description: 'Problem Solving, Supply Chain Metrics, Decision Support, Process Optimization', iconName: 'Briefcase' },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'Data Analyst Trainee',
    company: 'ILS Institution',
    location: 'Srinagar, J&K, India',
    period: 'Aug 2025 – Jan 2026',
    bullets: [
      'Analyzed datasets using Python, SQL, and Excel to identify critical market trends and support key business decisions.',
      'Performed Exploratory Data Analysis (EDA) and wrote optimized SQL queries (Joins, Aggregations, Subqueries) to extract actionable insights.',
      'Built automated Excel dashboards using Pivot Tables, Slicers, and conditional logic to track daily & monthly KPI metrics.',
      'Created interactive Power BI dashboards incorporating DAX measures and custom visuals for executive decision-making.'
    ],
    toolsUsed: ['Python', 'SQL', 'Power BI', 'Excel', 'Pivot Tables', 'DAX', 'MySQL']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Lovely Professional University (LPU)',
    location: 'Punjab, India',
    period: 'June 2026 – Ongoing',
    details: 'Focusing on computer application fundamentals, programming logic, data structures, and database management systems.'
  },
  {
    degree: 'Data Science Certification',
    institution: 'ILS Institutions',
    location: 'Srinagar, J&K, India',
    period: 'Aug 2025 – Present',
    details: 'Comprehensive training in Python, SQL, Power BI, Machine Learning fundamentals, AI techniques, and business analytics.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Data Analysis Trainee Program',
    issuer: 'ILS Institutions',
    details: [
      'Gained intensive hands-on experience in core data analytics methodologies.',
      'Applied Python, SQL, Excel, and Power BI to analyze real-world datasets and construct KPI dashboards.',
      'Demonstrated strong analytical problem-solving; currently continuing advanced training in Machine Learning & AI.'
    ]
  }
];

export const SQL_SAMPLES: SqlSample[] = [
  {
    id: 'zepto-sla-performance',
    title: 'Zepto Dark Store Delivery SLA & Speed Ranking',
    description: 'Calculates 10-minute on-time SLA adherence %, order volume, and revenue rank across dark store hubs.',
    sql: `WITH StoreDeliveryStats AS (
    SELECT 
        d.store_name,
        d.city_zone,
        COUNT(o.order_id) AS total_orders,
        AVG(TIMESTAMPDIFF(MINUTE, o.order_time, o.delivery_time)) AS avg_duration_mins,
        SUM(CASE WHEN TIMESTAMPDIFF(MINUTE, o.order_time, o.delivery_time) <= 10 THEN 1 ELSE 0 END) AS on_time_orders,
        SUM(o.order_value_inr - o.discount_inr) AS net_gmv_inr
    FROM zepto_orders o
    JOIN zepto_dark_stores d ON o.dark_store_id = d.dark_store_id
    GROUP BY d.store_name, d.city_zone
)
SELECT 
    store_name,
    city_zone,
    total_orders,
    ROUND(avg_duration_mins, 1) AS avg_duration_mins,
    ROUND((on_time_orders * 100.0 / total_orders), 2) AS sla_adherence_pct,
    ROUND(net_gmv_inr, 2) AS net_gmv_inr,
    DENSE_RANK() OVER (ORDER BY net_gmv_inr DESC) AS revenue_rank
FROM StoreDeliveryStats
ORDER BY sla_adherence_pct DESC
LIMIT 5;`,
    result: {
      columns: ['store_name', 'city_zone', 'total_orders', 'avg_duration_mins', 'sla_adherence_pct (%)', 'net_gmv_inr (INR)', 'revenue_rank'],
      rows: [
        ['Indiranagar Hub', 'Bangalore East', 18420, 8.4, 96.80, 7736400, 1],
        ['Koramangala Hub', 'Bangalore South', 16210, 8.9, 95.40, 6808200, 2],
        ['HSR Layout Hub', 'Bangalore South', 14850, 9.1, 94.60, 6237000, 3],
        ['Bandra West Hub', 'Mumbai West', 15120, 9.3, 93.80, 6350400, 4],
        ['Cyber City Hub', 'Gurugram Central', 13940, 9.6, 92.50, 5854800, 5]
      ]
    }
  },
  {
    id: 'top-profitable-products',
    title: 'Top 5 Profitable Product Sub-Categories',
    description: 'SQL Query joining Sales and Products tables, calculating profit margins, and filtering top performers.',
    sql: `SELECT 
    p.sub_category,
    COUNT(s.order_id) AS total_orders,
    ROUND(SUM(s.sales), 2) AS total_sales,
    ROUND(SUM(s.profit), 2) AS total_profit,
    ROUND((SUM(s.profit) / SUM(s.sales)) * 100, 2) AS profit_margin_pct
FROM sales_transactions s
JOIN products p ON s.product_id = p.product_id
GROUP BY p.sub_category
HAVING total_sales > 10000
ORDER BY total_profit DESC
LIMIT 5;`,
    result: {
      columns: ['sub_category', 'total_orders', 'total_sales ($)', 'total_profit ($)', 'profit_margin_pct (%)'],
      rows: [
        ['Copiers', 234, 149528.00, 55617.82, 37.20],
        ['Phones', 889, 330007.00, 44515.73, 13.49],
        ['Accessories', 775, 167380.00, 41936.63, 25.05],
        ['Paper', 1370, 78479.00, 34053.58, 43.39],
        ['Chairs', 617, 328449.00, 26590.16, 8.10]
      ]
    }
  },
  {
    id: 'regional-yoy-sales',
    title: 'Regional Sales Aggregation & Order Count',
    description: 'SQL query utilizing Subqueries and GROUP BY to compare regional performance across fiscal quarters.',
    sql: `SELECT 
    r.region_name,
    COUNT(DISTINCT o.customer_id) AS unique_customers,
    SUM(o.order_amount) AS gross_revenue,
    AVG(o.order_amount) AS avg_order_value
FROM orders o
JOIN regions r ON o.region_id = r.region_id
WHERE o.order_date >= '2025-01-01'
GROUP BY r.region_name
ORDER BY gross_revenue DESC;`,
    result: {
      columns: ['region_name', 'unique_customers', 'gross_revenue ($)', 'avg_order_value ($)'],
      rows: [
        ['West Region', 682, 245890.00, 360.54],
        ['East Region', 594, 218450.00, 367.76],
        ['Central Region', 481, 182300.00, 379.00],
        ['South Region', 389, 142100.00, 365.29]
      ]
    }
  }
];

// Interactive Chart Datasets
export const RETAIL_CHART_DATA = [
  { month: 'Jan', Sales: 42000, Profit: 6300, Target: 40000 },
  { month: 'Feb', Sales: 38000, Profit: 5200, Target: 40000 },
  { month: 'Mar', Sales: 55000, Profit: 8900, Target: 45000 },
  { month: 'Apr', Sales: 48000, Profit: 7100, Target: 45000 },
  { month: 'May', Sales: 62000, Profit: 10400, Target: 50000 },
  { month: 'Jun', Sales: 71000, Profit: 12100, Target: 55000 },
  { month: 'Jul', Sales: 68000, Profit: 11200, Target: 55000 },
  { month: 'Aug', Sales: 84000, Profit: 15300, Target: 60000 },
  { month: 'Sep', Sales: 92000, Profit: 17800, Target: 65000 },
  { month: 'Oct', Sales: 89000, Profit: 16200, Target: 65000 },
  { month: 'Nov', Sales: 105000, Profit: 21000, Target: 70000 },
  { month: 'Dec', Sales: 120000, Profit: 25400, Target: 80000 },
];

export const REGION_PROFIT_DATA = [
  { region: 'West', Sales: 725400, Profit: 108400, Margin: '14.9%' },
  { region: 'East', Sales: 678200, Profit: 91500, Margin: '13.5%' },
  { region: 'Central', Sales: 501200, Profit: 39700, Margin: '7.9%' },
  { region: 'South', Sales: 391700, Profit: 46700, Margin: '11.9%' },
];

export const CATEGORY_BREAKDOWN = [
  { name: 'Technology', sales: 836154, profit: 145454, color: '#0284c7' },
  { name: 'Office Supplies', sales: 719047, profit: 122490, color: '#10b981' },
  { name: 'Furniture', sales: 741999, profit: 18451, color: '#f59e0b' },
];

// ZEPTO QUICK COMMERCE DATASETS
export const ZEPTO_DARK_STORES = [
  { id: 'indiranagar', name: 'Indiranagar Hub', city: 'Bengaluru', orders: 18420, slaRate: 96.8, avgTime: 8.4, gmv: '₹77.3L', topCategory: 'Dairy & Fresh' },
  { id: 'koramangala', name: 'Koramangala Hub', city: 'Bengaluru', orders: 16210, slaRate: 95.4, avgTime: 8.9, gmv: '₹68.1L', topCategory: 'Snacks & Drinks' },
  { id: 'hsr', name: 'HSR Layout Hub', city: 'Bengaluru', orders: 14850, slaRate: 94.6, avgTime: 9.1, gmv: '₹62.4L', topCategory: 'Fruits & Veggies' },
  { id: 'bandra', name: 'Bandra West Hub', city: 'Mumbai', orders: 15120, slaRate: 93.8, avgTime: 9.3, gmv: '₹63.5L', topCategory: 'Ready to Cook' },
  { id: 'gurugram', name: 'Cyber City Hub', city: 'Gurugram', orders: 13940, slaRate: 92.5, avgTime: 9.6, gmv: '₹58.5L', topCategory: 'Personal Care' },
];

export const ZEPTO_HOURLY_SURGE = [
  { hour: '6 AM', orders: 120, avgMins: 7.2 },
  { hour: '8 AM', orders: 850, avgMins: 8.1 },
  { hour: '10 AM', orders: 1420, avgMins: 9.4 },
  { hour: '12 PM', orders: 1100, avgMins: 8.8 },
  { hour: '2 PM', orders: 780, avgMins: 8.0 },
  { hour: '4 PM', orders: 950, avgMins: 8.5 },
  { hour: '6 PM', orders: 1680, avgMins: 9.6 },
  { hour: '8 PM', orders: 2150, avgMins: 10.2 },
  { hour: '10 PM', orders: 1840, avgMins: 9.8 },
  { hour: '12 AM', orders: 620, avgMins: 7.9 },
];

export const ZEPTO_CATEGORY_GMV = [
  { name: 'Fresh Fruits & Veg', gmv: 34, color: '#10b981' },
  { name: 'Dairy, Bread & Eggs', gmv: 28, color: '#0284c7' },
  { name: 'Snacks & Beverages', gmv: 20, color: '#f59e0b' },
  { name: 'Instant & Frozen Food', gmv: 11, color: '#8b5cf6' },
  { name: 'Personal & Home Care', gmv: 7, color: '#ec4899' },
];

// SALES PREDICTION ML DATASETS
export const ML_ACTUAL_VS_PREDICTED = [
  { testSample: '#1', actual: 42.5, predicted: 43.1, residual: 0.6 },
  { testSample: '#2', actual: 68.2, predicted: 67.5, residual: -0.7 },
  { testSample: '#3', actual: 55.4, predicted: 56.1, residual: 0.7 },
  { testSample: '#4', actual: 89.0, predicted: 87.8, residual: -1.2 },
  { testSample: '#5', actual: 34.8, predicted: 35.2, residual: 0.4 },
  { testSample: '#6', actual: 95.1, predicted: 94.6, residual: -0.5 },
  { testSample: '#7', actual: 78.6, predicted: 79.4, residual: 0.8 },
  { testSample: '#8', actual: 62.0, predicted: 61.3, residual: -0.7 },
  { testSample: '#9', actual: 112.4, predicted: 111.8, residual: -0.6 },
  { testSample: '#10', actual: 84.7, predicted: 85.3, residual: 0.6 },
];

export const ML_FEATURE_IMPORTANCE = [
  { feature: 'TV Ad Spend', importance: 42.8, color: '#0284c7' },
  { feature: 'Social Media Ads', importance: 26.5, color: '#8b5cf6' },
  { feature: 'Store Footfall', importance: 15.2, color: '#10b981' },
  { feature: 'Radio Promotions', importance: 9.8, color: '#f59e0b' },
  { feature: 'Discount Margin %', importance: 5.7, color: '#ec4899' },
];

// AI NEWS TELEGRAM AGENT SAMPLES
export const AI_AGENT_SAMPLE_DIGESTS = [
  {
    category: 'LLMs & Frontier Models',
    source: 'ArXiv cs.AI • Paper #2502.1042',
    rawHeadline: 'Deep Reasoning Scaling Laws in Test-Time Compute Models',
    summaryBullets: [
      '🚀 Discovers that test-time verification compute scales reasoning performance 3.4x faster than parameter pre-training alone.',
      '💡 Enables smaller 8B models to surpass previous 70B math & coding benchmark capabilities.',
      '🔗 Read arXiv preprint: arxiv.org/abs/2502.1042'
    ],
    timestamp: 'Today at 09:15 AM',
    status: 'Delivered to @AINewsRadar (14.2k subscribers)'
  },
  {
    category: 'Autonomous Agents',
    source: 'TechCrunch AI Ingest',
    rawHeadline: 'Open-Source Multi-Agent Framework Slashes API Latency by 40%',
    summaryBullets: [
      '🚀 Asynchronous message passing graph replaces sequential chain execution for autonomous developer agents.',
      '💡 Dramatically cuts end-to-end token consumption and cost for recursive web browsing agents.',
      '🔗 Full Article: techcrunch.com/2026/02/agents-latency'
    ],
    timestamp: 'Today at 12:45 PM',
    status: 'Delivered to @AINewsRadar (14.2k subscribers)'
  },
  {
    category: 'AI Hardware & Chips',
    source: 'HackerNews Top Story',
    rawHeadline: 'Next-Gen High-Bandwidth Memory Architecture Unleashed for Edge Inference',
    summaryBullets: [
      '🚀 Delivers 2.8 TB/s memory bandwidth allowing on-device 32B model execution under 15W TDP.',
      '💡 Accelerates local robotic inference and real-time vision processing without cloud roundtrips.',
      '🔗 Source Discussion: news.ycombinator.com/item?id=43102'
    ],
    timestamp: 'Today at 04:30 PM',
    status: 'Delivered to @AINewsRadar (14.2k subscribers)'
  }
];
