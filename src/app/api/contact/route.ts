import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const SALES_EMAIL = "sales@aarbitechenergy.com";
const INFO_EMAIL = "info@aarbitechenergy.com";

const REQUIRED_SMTP_ENV = [
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASS",
] as const;

function getMissingSmtpEnv() {
  return REQUIRED_SMTP_ENV.filter((key) => !process.env[key] || process.env[key]?.trim() === "");
}

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildEmailHtml(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  consultationType: "sales" | "info";
}) {
  const typeLabel =
    data.consultationType === "sales" ? "Sales Inquiry" : "General Information";
  const accentColor = "#1d4ed8";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Consultation Request</title>
</head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${accentColor},#1e3a8a);padding:36px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">
                      Aarbitech Energy
                    </p>
                    <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:700;">
                      New Consultation Request
                    </h1>
                    <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">
                      Type: <strong style="color:#fff;">${typeLabel}</strong>
                    </p>
                  </td>
                  <td align="right">
                    <div style="background:rgba(255,255,255,0.15);border-radius:50px;padding:8px 18px;display:inline-block;">
                      <span style="color:#fff;font-size:12px;font-weight:600;">
                        ${data.consultationType === "sales" ? "💼 Sales" : "💡 Info"}
                      </span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Sender summary -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8faff;border-radius:10px;border:1px solid #e5edff;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 4px;font-size:18px;font-weight:700;color:#111827;">${data.name}</p>
                    ${data.company ? `<p style="margin:0 0 12px;font-size:13px;color:#6b7280;">${data.company}</p>` : ""}
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:20px;">
                          <a href="mailto:${data.email}" style="font-size:13px;color:${accentColor};text-decoration:none;">✉ ${data.email}</a>
                        </td>
                        ${data.phone ? `<td><span style="font-size:13px;color:#4b5563;">📞 ${data.phone}</span></td>` : ""}
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Details -->
              <table width="100%" cellpadding="0" cellspacing="0">
                ${
                  data.projectType
                    ? `<tr>
                    <td style="padding-bottom:18px;">
                      <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Project Type</p>
                      <p style="margin:0;font-size:14px;color:#111827;font-weight:500;">${data.projectType}</p>
                    </td>
                  </tr>`
                    : ""
                }
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0 0 8px;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;">Message</p>
                    <div style="background:#f9fafb;border-left:3px solid ${accentColor};border-radius:0 8px 8px 0;padding:16px 20px;">
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:#9ca3af;">
                      This message was submitted via the consultation form on <strong>aarbitechenergy.com</strong>
                    </p>
                    <p style="margin:4px 0 0;font-size:11px;color:#d1d5db;">
                      ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" })} IST
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:12px;font-weight:600;color:${accentColor};">Aarbitech Energy</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      company = "",
      email,
      phone = "",
      projectType = "",
      message,
      consultationType,
    } = body ?? {};

    // Basic validation
    if (!name || !email || !message || !consultationType) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (consultationType !== "sales" && consultationType !== "info") {
      return NextResponse.json({ error: "Invalid consultation type." }, { status: 400 });
    }

    if (!isValidEmail(String(email))) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const missingEnv = getMissingSmtpEnv();
    if (missingEnv.length > 0) {
      console.error("[contact API] Missing SMTP env vars", missingEnv);
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please set SMTP environment variables and redeploy.",
        },
        { status: 503 }
      );
    }

    const toEmail = consultationType === "sales" ? SALES_EMAIL : INFO_EMAIL;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpSecure =
      process.env.SMTP_SECURE?.toLowerCase() === "true" ||
      (process.env.SMTP_SECURE == null && smtpPort === 465);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpSecure,
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Aarbitech Energy Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: sanitizeHeaderValue(String(email)),
      subject: `New ${consultationType === "sales" ? "Sales Inquiry" : "Information Request"} from ${sanitizeHeaderValue(String(name))}`,
      html: buildEmailHtml({
        name: String(name).trim(),
        company: String(company).trim(),
        email: String(email).trim(),
        phone: String(phone).trim(),
        projectType: String(projectType).trim(),
        message: String(message).trim(),
        consultationType,
      }),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    const error = err as {
      code?: string;
      message?: string;
      response?: string;
      responseCode?: number;
    };
    console.error("[contact API] send failed", {
      code: error?.code,
      message: error?.message,
      responseCode: error?.responseCode,
      response: error?.response,
    });
    return NextResponse.json({ error: "Failed to send email. Please try again or contact us directly." }, { status: 500 });
  }
}
