import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // xuất tĩnh — deploy Netlify/Vercel/Railway một chạm
  images: { unoptimized: true }, // ảnh đã tối ưu sẵn dạng WebP
  trailingSlash: true,
};

export default nextConfig;
