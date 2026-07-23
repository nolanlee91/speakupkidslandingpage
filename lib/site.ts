// Cấu hình chung của landing — đổi link app ở ĐÂY một chỗ duy nhất.
export const site = {
  name: "SpeakUp Kids",
  // URL app thật (đang chạy). Đổi thành domain production của bạn khi có.
  appUrl: "https://speakupkids.up.railway.app/",
  loginUrl: "https://speakupkids.up.railway.app/",
  url: "https://speakupkids.com",
  title: "SpeakUp Kids — Học tiếng Anh như một chuyến phiêu lưu (9–12 tuổi)",
  description:
    "Cùng Maple, con học từ vựng, cấu trúc câu và nghe hiểu theo từng Unit, rồi vận dụng trong nhiệm vụ khám phá. Tiếng Anh có lộ trình cho trẻ 9–12 tuổi. Học thử miễn phí.",
};

// Điều hướng trong trang (anchor thật, cuộn tới section)
export const nav = [
  { label: "Cách học", href: "#cach-hoc" },
  { label: "Nội dung", href: "#noi-dung" },
  { label: "Dành cho phụ huynh", href: "#phu-huynh" },
  { label: "Bảng giá", href: "#bang-gia" },
];

export const IMG = "/assets/images";
