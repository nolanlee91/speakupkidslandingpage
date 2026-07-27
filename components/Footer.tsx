import { nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="brand-mini">SpeakUp <span className="k">Kids</span></span>
      {nav.map((n) => (
        <a key={n.href} href={n.href}>{n.label}</a>
      ))}
      <span className="copy">© 2026 SpeakUp Kids</span>
    </footer>
  );
}
