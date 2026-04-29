import { NextResponse } from "next/server";

function createPdf() {
  const lines = [
    "Prince Seth",
    "Full Stack Developer",
    "Noida, India | princeseth2611@gmail.com | +91 9369456727",
    "GitHub: prince5433 | LinkedIn: prince43265 | LeetCode: sethjii",
    "",
    "Highlights:",
    "- Competitive Programmer: LeetCode Knight (1868), Codeforces Specialist (1469), CodeChef 3 Star (1700)",
    "- B.Tech (IT) at JSS Academy of Technical Education, Noida | SGPA 9.05/10",
    "- Uzence Design Studio Intern: 25+ UI components, 98+ Lighthouse Accessibility",
    "- Projects: LegalSaathi AI (RAG + KG), InterviewX, Kawach"
  ];

  const contentStream = [
    "BT",
    "/F1 24 Tf",
    "72 720 Td",
    `(${lines[0]}) Tj`,
    "/F1 14 Tf",
    "0 -34 Td",
    `(${lines[1]}) Tj`,
    "0 -22 Td",
    `(${lines[2]}) Tj`,
    "0 -18 Td",
    `(${lines[3]}) Tj`,
    "0 -26 Td",
    `(${lines[5]}) Tj`,
    "/F1 12 Tf",
    "0 -22 Td",
    `(${lines[6]}) Tj`,
    "0 -18 Td",
    `(${lines[7]}) Tj`,
    "0 -18 Td",
    `(${lines[8]}) Tj`,
    "0 -18 Td",
    `(${lines[9]}) Tj`,
    "ET"
  ].join("\n");

  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    `5 0 obj << /Length ${contentStream.length} >> stream\n${contentStream}\nendstream endobj`
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];

  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  }

  const xrefOffset = pdf.length;
  const count = objects.length + 1;
  pdf += `xref\n0 ${count}\n`;
  pdf += "0000000000 65535 f \n";

  for (let index = 1; index < count; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer << /Size ${count} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Buffer.from(pdf, "binary");
}

export async function GET() {
  const pdf = createPdf();

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Prince-Seth-Resume.pdf"'
    }
  });
}