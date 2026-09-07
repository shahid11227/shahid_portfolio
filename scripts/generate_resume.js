import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createResumePdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in points
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const { width, height } = page.getSize();
  const margin = 40;
  let y = height - margin;

  // Colors
  const primaryColor = rgb(0.08, 0.35, 0.65); // Deep Blue #1459a6
  const textColor = rgb(0.15, 0.18, 0.22); // Slate #272e38
  const mutedColor = rgb(0.4, 0.45, 0.52); // Muted Slate #667385
  const lineColor = rgb(0.85, 0.88, 0.92);

  // Helper to draw text
  const drawText = (text, x, yPos, size, font, color = textColor) => {
    page.drawText(text, { x, y: yPos, size, font, color });
  };

  // Header
  drawText('SHAHID AHMAD SHEER GOJREE', margin, y, 19, fontBold, primaryColor);
  y -= 16;
  drawText('Data Analyst', margin, y, 11, fontBold, textColor);
  y -= 13;

  const contactInfo = 'Phone: +91 8899664652  |  Email: shahidgojree880@gmail.com  |  Location: Srinagar, J&K, India';
  drawText(contactInfo, margin, y, 8.5, fontRegular, mutedColor);
  y -= 11;

  const linkInfo = 'LinkedIn: linkedin.com/in/shahid-gojree-082857389  |  GitHub: github.com/shahid11227';
  drawText(linkInfo, margin, y, 8.5, fontRegular, mutedColor);
  y -= 14;

  // Divider
  page.drawLine({
    start: { x: margin, y: y + 4 },
    end: { x: width - margin, y: y + 4 },
    thickness: 1,
    color: lineColor,
  });
  y -= 8;

  // Section Header Function
  const drawSectionHeader = (title) => {
    y -= 5;
    drawText(title.toUpperCase(), margin, y, 10.5, fontBold, primaryColor);
    page.drawLine({
      start: { x: margin, y: y - 2 },
      end: { x: width - margin, y: y - 2 },
      thickness: 1,
      color: primaryColor,
    });
    y -= 12;
  };

  // EDUCATION
  drawSectionHeader('Education');
  drawText('Bachelor of Computer Applications (BCA)', margin, y, 9, fontBold, textColor);
  drawText('June 2026 - Ongoing', width - margin - 100, y, 8, fontRegular, mutedColor);
  y -= 11;
  drawText('Lovely Professional University (LPU), Punjab, India', margin, y, 8, fontRegular, mutedColor);
  y -= 12;

  // SKILL SUMMARY
  drawSectionHeader('Technical Skills');
  const skills = [
    ['Programming & SQL:', 'Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (MySQL, PostgreSQL, SQL Server)'],
    ['Data Visualization:', 'Power BI (DAX, Star Schema Modeling), Excel (PivotTables, Advanced Formulas, Slicers)'],
    ['Database Systems:', 'Complex Joins, CTEs, Window Functions (DENSE_RANK, NTILE, LAG/LEAD), Query Optimization'],
    ['Data Analysis & EDA:', 'Data Cleaning, Outlier Diagnostics, Exploratory Data Analysis, Feature Transformations'],
    ['Business Analytics:', 'RFM Customer Segmentation, Supply Chain Metrics, KPI Dashboards, Stakeholder Reporting']
  ];

  for (const [category, details] of skills) {
    drawText(category, margin, y, 8, fontBold, textColor);
    drawText(details, margin + 110, y, 8, fontRegular, textColor);
    y -= 11;
  }
  y -= 2;

  // WORK EXPERIENCE
  drawSectionHeader('Work Experience');
  drawText('Data Analyst Trainee', margin, y, 9, fontBold, textColor);
  drawText('Aug 2025 - Jan 2026', width - margin - 100, y, 8, fontRegular, mutedColor);
  y -= 11;
  drawText('ILS Institution — Srinagar, J&K, India', margin, y, 8, fontBold, primaryColor);
  y -= 11;

  const expBullets = [
    '• Analyzed datasets using Python, SQL, and Excel to identify commercial trends and support executive decision-making.',
    '• Authored high-performance SQL queries (Joins, CTEs, Window Functions) extracting clean data from multi-table schemas.',
    '• Built automated Excel dashboards using Pivot Tables, dynamic slicers, and lookup formulas reducing manual reporting by 15 hrs/wk.',
    '• Developed interactive Power BI dashboards with custom DAX measures for Year-over-Year (YoY) revenue and variance tracking.'
  ];

  for (const bullet of expBullets) {
    drawText(bullet, margin + 5, y, 7.5, fontRegular, textColor);
    y -= 10;
  }
  y -= 3;

  // KEY PROJECTS (Core Data Analyst Projects)
  drawSectionHeader('Key Projects (Core Data Analytics)');
  const projects = [
    {
      title: 'Zepto Quick Commerce SQL Analytics (SQL & Hyperlocal Logistics)',
      bullets: [
        '• Analyzed 125,000+ delivery logs across 15 dark store hubs evaluating 10-minute SLA adherence (94.2% on-time).',
        '• Reduced stockout frequency by 24% (~INR 4.2L saved in perishable waste) through inventory turnover queries.',
        '• Segmented customer buying cohorts using RFM analysis, isolating top 18% repeat buyers driving 62% of GMV.'
      ]
    },
    {
      title: 'Super Store Analysis (Python & Exploratory Data Analysis)',
      bullets: [
        '• Conducted comprehensive EDA on $2.3M+ retail transactions across 4 geographic regions using Python (Pandas, Matplotlib).',
        '• Isolated product sub-category profit margin leakages (Tables at -8.4% loss) and established discount threshold guardrails.',
        '• Identified West region as top performer (14.9% margin) and delivered 12+ actionable pricing optimization recommendations.'
      ]
    },
    {
      title: 'Sales Performance Dashboard (Power BI & Advanced DAX)',
      bullets: [
        '• Designed interactive executive Power BI dashboard modeling 14,250 orders ($840K GMV) with Star Schema architecture.',
        '• Implemented SAMEPERIODLASTYEAR dynamic DAX measures tracking +18.5% YoY sales growth and Average Order Value lift.'
      ]
    },
    {
      title: 'E-Commerce Sales Performance Dashboard (Excel & Advanced Analytics)',
      bullets: [
        '• Built dynamic, automated Excel dashboard with PivotTables, Timeline Slicers, and INDEX/MATCH / XLOOKUP logic.',
        '• Automated recurring reporting workflows, saving 15 hours/week in manual effort (75% time efficiency gain).'
      ]
    }
  ];

  for (const proj of projects) {
    drawText(proj.title, margin, y, 8, fontBold, textColor);
    y -= 10;
    for (const b of proj.bullets) {
      drawText(b, margin + 5, y, 7.5, fontRegular, textColor);
      y -= 9.5;
    }
    y -= 2.5;
  }

  // CERTIFICATIONS
  drawSectionHeader('Certifications & Continuous Learning');
  const certs = [
    '• Data Science Certification (Python, SQL, Power BI, Advanced Analytics) — ILS Institutions, Srinagar (Aug 2025 - Present)',
    '• Google Data Analytics Capstone: Complete a Case Study — Google (Credential ID: S6Q9IYCNTIX9)'
  ];

  for (const cert of certs) {
    drawText(cert, margin + 5, y, 7.5, fontRegular, textColor);
    y -= 10;
  }

  // Footer note
  y = 25;
  drawText('Shahid Ahmad Sheer Gojree — Official Portfolio Resume | Verified for Recruitment & ATS Screening', margin, y, 7.5, fontRegular, mutedColor);

  const pdfBytes = await pdfDoc.save();

  // Save to public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'Shahid_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outputPath);
}

createResumePdf().catch((err) => {
  console.error('Error creating resume PDF:', err);
  process.exit(1);
});
