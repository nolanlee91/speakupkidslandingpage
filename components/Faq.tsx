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
    a: "Không. Mỗi hoạt động gắn với một mục tiêu học cụ thể và được máy chấm. Con học kiến thức (Learn), luyện tập có đáp án (Practice), rồi vận dụng trong nhiệm vụ (Adventure) — chơi có chủ đích.",
  },
  {
    q: "Phụ huynh có theo dõi tiến độ được không?",
    a: "Báo cáo tuần cho phụ huynh đang được hoàn thiện và sẽ sớm ra mắt: tóm tắt bài đã học, kỹ năng đang luyện, điểm mạnh và phần cần ôn — bằng ngôn ngữ dễ hiểu.",
  },
  {
    q: "Có thể dùng trên tablet và điện thoại không?",
    a: "Có. SpeakUp Kids chạy trực tiếp trên trình duyệt của máy tính, tablet và điện thoại — không cần cài đặt.",
  },
  {
    q: "Có dùng thử miễn phí không?",
    a: "Có. Con có thể học toàn bộ Level 0 Phonics, một số bài Learn, Đố vui, Thám tử hình ảnh và Adventure Season 1 mà không cần thẻ. Khi phù hợp, phụ huynh có thể mở Pro trọn đời bằng một lần thanh toán.",
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
