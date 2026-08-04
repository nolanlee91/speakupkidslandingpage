// Accordion bằng <details>/<summary> — không cần JS, tốt cho SEO & truy cập.
const FAQS: { q: string; a: string }[] = [
  {
    q: "SpeakUp Kids phù hợp độ tuổi nào?",
    a: "Nội dung được thiết kế cho trẻ 9–12 tuổi — cuối tiểu học và đầu THCS. Bài học đi xa hơn từ vựng cơ bản: con luyện mô tả, suy luận và dùng tiếng Anh trong tình huống thật.",
  },
  {
    q: "Con chưa tự tin nói tiếng Anh có dùng được không?",
    a: "Có. App bắt đầu từ nghe – nhìn – chọn, rồi mới đến xây câu. Mọi hoạt động đều có gợi ý và giải thích tiếng Việt, nên con chưa giỏi vẫn theo được và tiến bộ dần.",
  },
  {
    q: "App có phải chỉ là trò chơi không?",
    a: "Không. Learn xây kiến thức theo lộ trình; Practice luyện lại có đáp án và phản hồi ngay. Adventure là khu truyện tương tác độc lập để con đọc, quan sát và suy luận — không phải bước bắt buộc sau mỗi bài Learn.",
  },
  {
    q: "Phụ huynh có theo dõi tiến độ được không?",
    a: "Có. Phụ huynh có thể bật báo cáo tuần qua email để nhận tóm tắt bài đã học, câu đã luyện, sao, streak, độ chính xác theo chủ đề và phần cần ôn — bằng ngôn ngữ dễ hiểu.",
  },
  {
    q: "Có thể dùng trên tablet và điện thoại không?",
    a: "Có. SpeakUp Kids chạy trực tiếp trên trình duyệt của máy tính, tablet và điện thoại — không cần cài đặt.",
  },
  {
    q: "Có dùng thử miễn phí không?",
    a: "Có. Con được học toàn bộ Level 0 Phonics, ba bài đầu ở Level 1/2 và mỗi collection Level 3, các bộ mở đầu của cả sáu trò Practice cùng Adventure Season 1–2. Khi phù hợp, phụ huynh có thể mở Pro trọn đời bằng một lần thanh toán.",
  },
];

export function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 className="section-title center" id="faq-title" style={{ marginBottom: 4 }}>Câu hỏi thường gặp</h2>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <details className="faq-item" key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
