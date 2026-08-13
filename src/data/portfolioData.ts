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
  about: 'Detail-oriented Data Analyst experienced in Python, SQL, Power BI, and Excel. Passionate about uncovering hidden business trends, building interactive KPI dashboards, and translating complex dataset patterns into actionable strategic decisions.',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'super-store-analysis',
    title: 'Super Store Analysis',
    subtitle: 'Exploratory Data Analysis & Retail Insights',
    category: 'Python',
    summary: 'Conducted exploratory data analysis (EDA) on retail store data using Python to uncover key sales trends, profit margins, and regional performance gaps.',
    highlights: [
      'Analyzed sales across 4 geographic regions, 3 customer segments, and multiple product categories.',
      'Identified top-performing product sub-categories and isolated negative profit margin products.',
      'Generated actionable business strategies highlighting region-wise expansion opportunities.'
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
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
      { label: 'Total Sales Analyzed', value: '$2.3M+' },
      { label: 'Avg Profit Margin', value: '14.2%' },
      { label: 'Regions Analyzed', value: '4 Major' },
      { label: 'Insights Derived', value: '12+ KPI Metrics' }
    ],
    chartType: 'retail-sales'
  },
  {
    id: 'sales-dashboard-powerbi',
    title: 'Sales Performance Dashboard',
    subtitle: 'Interactive KPI & Sales Trend Tracking',
    category: 'Power BI',
    summary: 'Designed an end-to-end interactive Power BI dashboard tracking revenue, order count, average order value (AOV), and category-level trends with custom DAX measures.',
    highlights: [
      'Built dynamic DAX measures for Year-Over-Year (YoY) revenue comparison and moving averages.',
      'Designed interactive slicers for date ranges, product categories, and regional sales teams.',
      'Delivered clear data visualizations for executive stakeholders to make data-backed inventory decisions.'
    ],
    tools: ['Power BI', 'DAX', 'Data Modeling', 'Power Query', 'Data Visualization'],
    daxFormula: `// YoY Sales Growth DAX Measure
Sales YoY Growth % = 
VAR CurrentSales = [Total Sales]
VAR PriorYearSales = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))
RETURN
    DIVIDE(CurrentSales - PriorYearSales, PriorYearSales, 0) * 100`,
    metrics: [
      { label: 'Total Revenue', value: '$840,000' },
      { label: 'YoY Growth', value: '+18.5%' },
      { label: 'Total Orders', value: '14,250' },
      { label: 'Avg Order Value', value: '$58.90' }
    ],
    chartType: 'kpi-powerbi'
  },
  {
    id: 'ecommerce-excel-dashboard',
    title: 'E-Commerce Sales Performance Dashboard',
    subtitle: 'Dynamic Excel & PivotTable Analytics',
    category: 'Excel',
    summary: 'Developed a dynamic, automated Excel dashboard leveraging PivotTables, Slicers, and advanced functions to monitor profit margins, order volume, and YoY growth.',
    highlights: [
      'Utilized INDEX/MATCH, XLOOKUP, SUMIFS, and PivotTables for automated data calculations.',
      'Implemented conditional formatting and map visualizations to highlight top geographic markets.',
      'Created interactive charts allowing single-click filtering across monthly sales trends.'
    ],
    tools: ['Excel', 'Pivot Tables', 'Advanced Formulas', 'Slicers', 'Data Transformation'],
    excelFormulas: [
      '=INDEX(SalesData[Profit], MATCH(1, (SalesData[Region]=A2)*(SalesData[Category]=B2), 0))',
      '=SUMIFS(SalesData[Sales], SalesData[Year], 2025, SalesData[Status], "Completed")',
      '=GETPIVOTDATA("Sales", $A$3, "Region", "West", "Year", 2025)'
    ],
    metrics: [
      { label: 'Profit Margin', value: '22.4%' },
      { label: 'SKUs Managed', value: '1,200+' },
      { label: 'YoY Sales Delta', value: '+$112K' },
      { label: 'Automation Savings', value: '15 hrs/wk' }
    ],
    chartType: 'ecommerce-excel'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'Python', category: 'Programming', level: 90, description: 'Pandas, NumPy, Matplotlib, Seaborn for data manipulation & EDA', iconName: 'Terminal' },
  { name: 'SQL', category: 'Programming', level: 88, description: 'Complex Joins, Aggregations, Subqueries, CTEs, Data Extraction', iconName: 'Database' },
  { name: 'Power BI', category: 'Visualization', level: 86, description: 'DAX Measures, Data Modeling, Power Query, KPI Reports', iconName: 'BarChart2' },
  { name: 'Excel', category: 'Visualization', level: 92, description: 'PivotTables, Dynamic Dashboards, XLOOKUP, Index/Match', iconName: 'FileSpreadsheet' },
  { name: 'MySQL & SQL Server', category: 'Databases', level: 85, description: 'Relational Database Querying, Table Design, Optimization', iconName: 'HardDrive' },
  { name: 'Data Cleaning & EDA', category: 'Analysis', level: 90, description: 'Missing value treatment, Outlier detection, Feature Engineering', iconName: 'Filter' },
  { name: 'Statistical & KPI Analysis', category: 'Analysis', level: 84, description: 'Descriptive Statistics, Growth Rates, Metric Identification', iconName: 'TrendingUp' },
  { name: 'Stakeholder Communication', category: 'Business', level: 85, description: 'Translating raw numbers into concise business stories', iconName: 'Users' },
  { name: 'Business Analysis', category: 'Business', level: 82, description: 'Problem Solving, Decision Support, Process Optimization', iconName: 'Briefcase' },
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
  },
  {
    id: 'low-performing-segments',
    title: 'Customer Segment Discount vs Profit Analysis',
    description: 'SQL query evaluating discount impact on overall profit margins.',
    sql: `SELECT 
    c.segment_type,
    AVG(s.discount) * 100 AS avg_discount_pct,
    SUM(s.sales) AS category_sales,
    SUM(s.profit) AS category_profit
FROM sales_transactions s
JOIN customers c ON s.customer_id = c.customer_id
GROUP BY c.segment_type
ORDER BY avg_discount_pct DESC;`,
    result: {
      columns: ['segment_type', 'avg_discount_pct (%)', 'category_sales ($)', 'category_profit ($)'],
      rows: [
        ['Consumer', 15.6, 1161401.00, 134119.00],
        ['Corporate', 14.8, 706146.00, 91979.00],
        ['Home Office', 14.2, 429653.00, 60298.00]
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
