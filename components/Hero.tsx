import Image from "next/image";
import { site, IMG } from "@/lib/site";
import { Parallax } from "./Parallax";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Parallax speed={0.12} style={{ position: "absolute", left: 0, right: 0, top: "-9%", height: "118%", zIndex: 0 }}>
        <Image
          src={`${IMG}/vancouver-hero-maple-girl-v3.webp`}
          alt="Maple — cô hải ly nhỏ dẫn đường học tiếng Anh — đứng ở Vancouver"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
      </Parallax>
      <div className="hero-scrim" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-inner">
          <span className="eyebrow">Tiếng Anh cho trẻ 9–12 tuổi</span>
          <h1 id="hero-title">Học chắc từng bước. Dùng tiếng Anh để khám phá.</h1>
          <p className="hero-lead">
            Ba Level Learn xây nền tảng theo độ khó, Practice giúp luyện lại có chấm điểm,
            còn Adventure đưa tiếng Anh vào một câu chuyện mà con thật sự muốn đi tiếp.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={site.appUrl}>Cho con học thử miễn phí</a>
            <a className="btn btn-secondary btn-lg" href={site.appUrl}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5l9 5.5-9 5.5z" fill="#F0654A" /></svg>
              Xem app hoạt động
            </a>
          </div>
          <ul className="hero-points">
            <li><span className="dot" />3 Level · 30 bài MVP</li>
            <li><span className="dot" />4 Practice game</li>
            <li><span className="dot gold" />Adventure 8 Chapter</li>
            <li><span className="dot" />Không quảng cáo</li>
          </ul>
        </div>
      </div>

      <aside className="hero-card" aria-label="Ví dụ tiến độ học trong app">
        <span className="chip">Đang học · Level 2</span>
        <h3>Stories & Situations</h3>
        <div className="bar"><i style={{ width: "64%" }} /></div>
        <div className="meta"><span>6/10 bài</span><span className="star">★ 42</span></div>
      </aside>
    </section>
  );
}
