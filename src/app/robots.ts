export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://prince-seth.dev/sitemap.xml"
  };
}