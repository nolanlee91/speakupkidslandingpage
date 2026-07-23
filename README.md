# SpeakUp Kids — Landing Page

Landing page cho **SpeakUp Kids** — app học tiếng Anh dạng phiêu lưu cho trẻ 9–12 tuổi (mascot Maple).
Dựng bằng **Next.js 16 + React 19 + TypeScript**, xuất tĩnh (static export).

## Tính năng
- Tách thành các **section component** (`components/`): Header, Hero, Steps, Curriculum, Units, Games, Rewards, Parents, Pricing, FAQ, FinalCta, Footer.
- **Ảnh thật WebP** (mascot, cảnh, game) trong `public/assets/images`.
- **SEO**: metadata, OpenGraph/Twitter, JSON-LD, semantic HTML, fonts self-host qua `next/font`.
- **Parallax nhẹ** ở hero, tự tắt trên mobile & `prefers-reduced-motion`.
- FAQ dùng `<details>` (không JS), responsive 3 breakpoint.

## Chạy
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # xuất tĩnh ra ./out
```

## Cấu hình
Đổi link app / thông tin site tại `lib/site.ts`.
