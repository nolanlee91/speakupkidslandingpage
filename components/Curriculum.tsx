const FEATURES: { ic: string; cls: "t" | "g" | "c"; title: string; desc: string }[] = [
  { ic: "Aa", cls: "t", title: "Từ vựng theo ngữ cảnh", desc: "Học từ trong cảnh thật, không phải danh sách rời" },
  { ic: "S·V", cls: "g", title: "Cấu trúc câu", desc: "Mẫu câu hỏi – đáp, thì và trật tự từ cơ bản" },
  { ic: "🎧", cls: "c", title: "Nghe hiểu", desc: "Hội thoại tốc độ tự nhiên, có phụ đề bật/tắt" },
  { ic: "⋯→", cls: "t", title: "Xây câu", desc: "Ghép từ thành câu đúng ngữ pháp, tăng dần độ khó" },
  { ic: "🔍", cls: "g", title: "Quan sát & suy luận", desc: "Nhìn tranh, tìm manh mối và trả lời bằng tiếng Anh" },
  { ic: "📖", cls: "c", title: "Đọc hiểu chuyện ngắn", desc: "Truyện theo Unit với câu hỏi kiểm tra hiểu" },
];

export function Curriculum() {
  return (
    <section className="section curriculum" id="noi-dung" aria-labelledby="cur-title">
      <div className="container curriculum-grid">
        <div className="curriculum-copy">
          <span className="eyebrow">Nội dung</span>
          <h2 className="section-title" id="cur-title">Một chương trình đúng độ tuổi 9–12</h2>
          <p>
            Không dừng ở màu sắc và con vật. Ở tuổi này, con học cách <strong>mô tả, suy luận, giải thích</strong> và
            dùng tiếng Anh trong tình huống thật — nền tảng để tự tin nói và viết.
          </p>
          <p style={{ fontSize: 15 }}>
            Nội dung bám theo các chủ điểm quen thuộc của chương trình cuối tiểu học và đầu THCS.
          </p>
        </div>

        <ul className="feature-grid" style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {FEATURES.map((f) => (
            <li className="feature" key={f.title}>
              <span className={`feature-ic ${f.cls}`} aria-hidden="true">{f.ic}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
