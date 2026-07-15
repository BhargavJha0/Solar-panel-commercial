const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType } = require("docx");
const fs = require("fs");

function createBullet(text) {
  return new Paragraph({
    bullet: { level: 0 },
    children: [new TextRun({ text, size: 22 })],
    spacing: { after: 80 },
  });
}

function createHeading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({
    heading: level,
    children: [new TextRun({ text, bold: true, size: level === HeadingLevel.HEADING_1 ? 32 : level === HeadingLevel.HEADING_2 ? 26 : 22 })],
    spacing: { before: 300, after: 150 },
  });
}

function createText(text, bold = false) {
  return new Paragraph({
    children: [new TextRun({ text, bold, size: 22 })],
    spacing: { after: 100 },
  });
}

function createTableRow(cells, isHeader = false) {
  return new TableRow({
    children: cells.map(
      (text) =>
        new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text, bold: isHeader, size: 20 })] })],
          width: { size: 50, type: WidthType.PERCENTAGE },
        })
    ),
  });
}

const doc = new Document({
  sections: [
    {
      children: [
        // Title
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "WEBSITE DATA REQUIREMENTS", bold: true, size: 40, color: "D97706" }),
          ],
          spacing: { after: 100 },
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "SolarPro Design — Pro-Level Animated Website", size: 24, italics: true, color: "666666" }),
          ],
          spacing: { after: 50 },
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: `Generated: ${new Date().toLocaleDateString()}`, size: 20, color: "999999" }),
          ],
          spacing: { after: 400 },
        }),

        // Instructions
        createText("Please fill in the data below to replace dummy/placeholder content on your website. Items marked with * are essential for launch.", false),
        createText(""),

        // ═══════════════════════════════════════════════════════
        // SECTION 1: Company Identity
        // ═══════════════════════════════════════════════════════
        createHeading("1. COMPANY IDENTITY *", HeadingLevel.HEADING_1),

        new Table({
          rows: [
            createTableRow(["Item", "Your Data (Fill In)"], true),
            createTableRow(["Company Name", ""]),
            createTableRow(["Tagline / Slogan", ""]),
            createTableRow(["Logo File (SVG/PNG)", ""]),
            createTableRow(["Brand Primary Color", ""]),
            createTableRow(["Brand Secondary Color", ""]),
            createTableRow(["Brand Font (if any)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 2: Contact Details
        // ═══════════════════════════════════════════════════════
        createHeading("2. CONTACT DETAILS *", HeadingLevel.HEADING_1),

        new Table({
          rows: [
            createTableRow(["Item", "Your Data (Fill In)"], true),
            createTableRow(["Business Email", ""]),
            createTableRow(["Phone Number (Primary)", ""]),
            createTableRow(["Phone Number (Secondary)", ""]),
            createTableRow(["Office Address (HQ)", ""]),
            createTableRow(["Office Address (Branch, if any)", ""]),
            createTableRow(["LinkedIn URL", ""]),
            createTableRow(["Instagram URL", ""]),
            createTableRow(["Twitter/X URL", ""]),
            createTableRow(["YouTube URL", ""]),
            createTableRow(["Facebook URL", ""]),
            createTableRow(["WhatsApp Number", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 3: Key Metrics
        // ═══════════════════════════════════════════════════════
        createHeading("3. KEY METRICS / STATISTICS *", HeadingLevel.HEADING_1),
        createText("These numbers appear prominently on the hero section, stats section, and throughout the site."),

        new Table({
          rows: [
            createTableRow(["Metric", "Currently Shows", "Your Real Number"], true),
            createTableRow(["Total Projects Delivered", "150,000+", ""]),
            createTableRow(["AHJ Approval Rate (%)", "99%", ""]),
            createTableRow(["Average Turnaround Time", "2-24 hours", ""]),
            createTableRow(["Active Clients", "400+", ""]),
            createTableRow(["AHJ Database Count", "12,000+", ""]),
            createTableRow(["Utilities Covered", "500+", ""]),
            createTableRow(["Engineers on Team", "250+", ""]),
            createTableRow(["Countries Served", "5", ""]),
            createTableRow(["Cost Savings for Clients", "60%", ""]),
            createTableRow(["States with PE Coverage", "50", ""]),
            createTableRow(["Years in Business", "-", ""]),
            createTableRow(["MW Designed (Total)", "-", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 4: Services
        // ═══════════════════════════════════════════════════════
        createHeading("4. SERVICES OFFERED *", HeadingLevel.HEADING_1),
        createText("Confirm, edit, or remove these services. Add any missing ones."),

        new Table({
          rows: [
            createTableRow(["#", "Service Name", "Keep? (Yes/No/Edit)", "Your Description"], true),
            createTableRow(["1", "Solar Services", "", ""]),
            createTableRow(["2", "Permit Plan Sets", "", ""]),
            createTableRow(["3", "PE Stamping", "", ""]),
            createTableRow(["4", "Solar Permitting", "", ""]),
            createTableRow(["5", "Interconnection & PTO", "", ""]),
            createTableRow(["6", "Site Surveys", "", ""]),
            createTableRow(["7", "As-Built Drawings", "", ""]),
            createTableRow(["8", "Battery Design", "", ""]),
            createTableRow(["9", "EV Charger Plans", "", ""]),
            createTableRow(["10", "Commercial Engineering", "", ""]),
            createTableRow(["11", "(Add your own)", "", ""]),
            createTableRow(["12", "(Add your own)", "", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 5: Testimonials
        // ═══════════════════════════════════════════════════════
        createHeading("5. CLIENT TESTIMONIALS *", HeadingLevel.HEADING_1),
        createText("Need 4-6 real client testimonials. Fill in the details for each."),

        createHeading("Testimonial 1", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Client Name", ""]),
            createTableRow(["Job Title", ""]),
            createTableRow(["Company Name", ""]),
            createTableRow(["Their Quote/Feedback", ""]),
            createTableRow(["Star Rating (1-5)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Testimonial 2", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Client Name", ""]),
            createTableRow(["Job Title", ""]),
            createTableRow(["Company Name", ""]),
            createTableRow(["Their Quote/Feedback", ""]),
            createTableRow(["Star Rating (1-5)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Testimonial 3", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Client Name", ""]),
            createTableRow(["Job Title", ""]),
            createTableRow(["Company Name", ""]),
            createTableRow(["Their Quote/Feedback", ""]),
            createTableRow(["Star Rating (1-5)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Testimonial 4", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Client Name", ""]),
            createTableRow(["Job Title", ""]),
            createTableRow(["Company Name", ""]),
            createTableRow(["Their Quote/Feedback", ""]),
            createTableRow(["Star Rating (1-5)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Testimonial 5", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Client Name", ""]),
            createTableRow(["Job Title", ""]),
            createTableRow(["Company Name", ""]),
            createTableRow(["Their Quote/Feedback", ""]),
            createTableRow(["Star Rating (1-5)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Testimonial 6", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Client Name", ""]),
            createTableRow(["Job Title", ""]),
            createTableRow(["Company Name", ""]),
            createTableRow(["Their Quote/Feedback", ""]),
            createTableRow(["Star Rating (1-5)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 6: Portfolio Projects
        // ═══════════════════════════════════════════════════════
        createHeading("6. PORTFOLIO / CASE STUDY PROJECTS *", HeadingLevel.HEADING_1),
        createText("Need 4-6 real projects to showcase. Provide details + images."),

        createHeading("Project 1", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Project Type (Residential/Commercial/Carport)", ""]),
            createTableRow(["Project Title", ""]),
            createTableRow(["Location (City, State)", ""]),
            createTableRow(["System Size (kW)", ""]),
            createTableRow(["Number of Panels", ""]),
            createTableRow(["Annual Production (kWh/yr)", ""]),
            createTableRow(["Client Savings ($/yr)", ""]),
            createTableRow(["Brief Description", ""]),
            createTableRow(["Image Filename (attach separately)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Project 2", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Project Type (Residential/Commercial/Carport)", ""]),
            createTableRow(["Project Title", ""]),
            createTableRow(["Location (City, State)", ""]),
            createTableRow(["System Size (kW)", ""]),
            createTableRow(["Number of Panels", ""]),
            createTableRow(["Annual Production (kWh/yr)", ""]),
            createTableRow(["Client Savings ($/yr)", ""]),
            createTableRow(["Brief Description", ""]),
            createTableRow(["Image Filename (attach separately)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Project 3", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Project Type (Residential/Commercial/Carport)", ""]),
            createTableRow(["Project Title", ""]),
            createTableRow(["Location (City, State)", ""]),
            createTableRow(["System Size (kW)", ""]),
            createTableRow(["Number of Panels", ""]),
            createTableRow(["Annual Production (kWh/yr)", ""]),
            createTableRow(["Client Savings ($/yr)", ""]),
            createTableRow(["Brief Description", ""]),
            createTableRow(["Image Filename (attach separately)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        createHeading("Project 4", HeadingLevel.HEADING_3),
        new Table({
          rows: [
            createTableRow(["Field", "Your Data"], true),
            createTableRow(["Project Type (Residential/Commercial/Carport)", ""]),
            createTableRow(["Project Title", ""]),
            createTableRow(["Location (City, State)", ""]),
            createTableRow(["System Size (kW)", ""]),
            createTableRow(["Number of Panels", ""]),
            createTableRow(["Annual Production (kWh/yr)", ""]),
            createTableRow(["Client Savings ($/yr)", ""]),
            createTableRow(["Brief Description", ""]),
            createTableRow(["Image Filename (attach separately)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 7: Client Logos
        // ═══════════════════════════════════════════════════════
        createHeading("7. CLIENT / PARTNER LOGOS", HeadingLevel.HEADING_1),
        createText("List companies whose logos you have permission to display:"),
        createBullet("Company 1: ___________________________"),
        createBullet("Company 2: ___________________________"),
        createBullet("Company 3: ___________________________"),
        createBullet("Company 4: ___________________________"),
        createBullet("Company 5: ___________________________"),
        createBullet("Company 6: ___________________________"),
        createText("(Attach logo files separately — PNG with transparent background preferred)"),

        // ═══════════════════════════════════════════════════════
        // SECTION 8: Certifications
        // ═══════════════════════════════════════════════════════
        createHeading("8. CERTIFICATIONS & AWARDS", HeadingLevel.HEADING_1),

        new Table({
          rows: [
            createTableRow(["#", "Certification/Award Name", "Year Obtained", "Badge/Logo Available?"], true),
            createTableRow(["1", "", "", ""]),
            createTableRow(["2", "", "", ""]),
            createTableRow(["3", "", "", ""]),
            createTableRow(["4", "", "", ""]),
            createTableRow(["5", "", "", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 9: FAQ
        // ═══════════════════════════════════════════════════════
        createHeading("9. FAQ — FREQUENTLY ASKED QUESTIONS", HeadingLevel.HEADING_1),
        createText("Review and edit these questions & answers, or add your own:"),

        new Table({
          rows: [
            createTableRow(["#", "Question", "Your Answer"], true),
            createTableRow(["1", "What is the turnaround time for permit plan sets?", ""]),
            createTableRow(["2", "How does your AHJ compliance process work?", ""]),
            createTableRow(["3", "Do you offer PE stamping in all 50 states?", ""]),
            createTableRow(["4", "Is there a minimum order requirement?", ""]),
            createTableRow(["5", "What file formats do you deliver?", ""]),
            createTableRow(["6", "How do I submit a project?", ""]),
            createTableRow(["7", "(Your own question)", ""]),
            createTableRow(["8", "(Your own question)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 10: Images
        // ═══════════════════════════════════════════════════════
        createHeading("10. IMAGES & MEDIA NEEDED", HeadingLevel.HEADING_1),
        createText("Please provide the following images (high-resolution, min 1920px wide):"),

        new Table({
          rows: [
            createTableRow(["#", "Image Purpose", "Description", "Provided? (Yes/No)"], true),
            createTableRow(["1", "Hero Background", "Solar panels, aerial view, or team at work", ""]),
            createTableRow(["2", "About Section", "Team photo or office image", ""]),
            createTableRow(["3", "Service Icons", "Custom icons or illustrations (optional)", ""]),
            createTableRow(["4", "Project Photos (4-6)", "Completed installations — rooftop, ground, commercial", ""]),
            createTableRow(["5", "Client Portal Screenshot", "Dashboard or order management UI", ""]),
            createTableRow(["6", "Team / Leadership Photos", "Individual headshots or group", ""]),
            createTableRow(["7", "Office / Workspace", "Your delivery center or workspace", ""]),
            createTableRow(["8", "Plan Set Samples", "Sample design output (redacted if needed)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 11: Pages & Links
        // ═══════════════════════════════════════════════════════
        createHeading("11. WEBSITE PAGES & LINKS", HeadingLevel.HEADING_1),

        new Table({
          rows: [
            createTableRow(["Page / Link", "URL or Status"], true),
            createTableRow(["About Us", ""]),
            createTableRow(["Careers Page", ""]),
            createTableRow(["Blog / Insights", ""]),
            createTableRow(["Client Portal Login", ""]),
            createTableRow(["Privacy Policy", ""]),
            createTableRow(["Terms & Conditions", ""]),
            createTableRow(["Service Agreement", ""]),
            createTableRow(["Booking/Calendar Link (Calendly etc.)", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // ═══════════════════════════════════════════════════════
        // SECTION 12: SEO
        // ═══════════════════════════════════════════════════════
        createHeading("12. SEO & META INFORMATION", HeadingLevel.HEADING_1),

        new Table({
          rows: [
            createTableRow(["Item", "Your Data"], true),
            createTableRow(["Page Title (max 60 chars)", ""]),
            createTableRow(["Meta Description (max 160 chars)", ""]),
            createTableRow(["Target Keywords (comma separated)", ""]),
            createTableRow(["Open Graph Image (1200x630px)", ""]),
            createTableRow(["Google Analytics ID", ""]),
            createTableRow(["Domain Name", ""]),
          ],
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),

        // End note
        createText(""),
        createText(""),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "─────────────────────────────────────────", color: "CCCCCC", size: 20 }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Once you fill this out, send it back and all dummy data will be replaced with your real content.", italics: true, size: 20, color: "666666" }),
          ],
          spacing: { before: 200 },
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("e:\\Taks\\Website_Data_Requirements.docx", buffer);
  console.log("✅ Word document created: e:\\Taks\\Website_Data_Requirements.docx");
});
