import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 72,
        color: "white",
        background:
          "radial-gradient(circle at top, rgba(56,189,248,0.35), transparent 38%), linear-gradient(135deg, #040816 0%, #081122 55%, #111827 100%)"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Prince Seth</div>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1, maxWidth: 900 }}>Full Stack Developer | AI Integration Engineer</div>
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.78)", maxWidth: 880 }}>I build scalable systems, AI-powered products, and real-world solutions.</div>
      </div>
    ),
    size
  );
}