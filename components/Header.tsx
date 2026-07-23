"use client";

import { useState } from "react";
import { nav, site } from "@/lib/site";

function StarMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FEFAF1" aria-hidden="true">
      <path d="M12 2l1.7 3.6 3.6-1.2-.6 3.8 3.8.9-2.6 2.9 2.6 2.9-3.8.9.6 3.8-3.6-1.2L12 22l-1.7-3.6-3.6 1.2.6-3.8-3.8-.9L6.1 12 3.5 9.1l3.8-.9-.6-3.8 3.6 1.2z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="SpeakUp Kids — về đầu trang">
        <span className="brand-mark"><StarMark /></span>
        SpeakUp <span className="k">Kids</span>
      </a>

      <nav className="main-nav" aria-label="Điều hướng chính">
        {nav.map((n) => (
          <a key={n.href} href={n.href}>{n.label}</a>
        ))}
      </nav>

      <div className="header-cta">
        <a className="login" href={site.loginUrl}>Đăng nhập</a>
        <a className="btn btn-primary" href={site.appUrl} style={{ padding: "12px 22px", fontSize: 15 }}>
          Học thử miễn phí
        </a>
        <button
          className="btn btn-secondary menu-toggle"
          style={{ padding: "10px 12px" }}
          aria-expanded={open}
          aria-label="Mở menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Điều hướng di động"
          style={{
            position: "absolute", top: "100%", left: 0, right: 0, background: "var(--cream)",
            borderBottom: "1px solid var(--line)", display: "flex", flexDirection: "column",
            gap: 4, padding: "8px 24px 16px",
          }}
        >
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ color: "var(--navy)", fontWeight: 700, padding: "10px 0" }}>
              {n.label}
            </a>
          ))}
          <a className="btn btn-primary btn-block" href={site.appUrl} style={{ marginTop: 8 }}>Học thử miễn phí</a>
        </nav>
      )}
    </header>
  );
}
