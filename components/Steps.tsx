import Image from "next/image";
import { IMG } from "@/lib/site";

export function Steps() {
  return (
    <section className="section steps" id="cach-hoc" aria-labelledby="steps-title">
      <div className="hills" aria-hidden="true">
        <span className="hill hill-1" />
        <span className="hill hill-2" />
      </div>

      <div className="container">
        <div className="center" style={{ maxWidth: 660, margin: "0 auto 8px" }}>
          <span className="eyebrow">Cách học</span>
          <h2 className="section-title" id="steps-title">Ba phần khác nhau, cùng giữ một nhịp học</h2>
          <p className="section-lead">
            Learn, Practice và Adventure có tiến độ riêng. Con có thể học bài mới, luyện đúng điểm còn yếu
            hoặc tiếp tục câu chuyện — không bị ép đi theo một vòng lặp cứng.
          </p>
        </div>

        <div className="steps-journey">
          <svg className="steps-trail" viewBox="0 0 1000 130" fill="none" aria-hidden="true">
            <path d="M 70 78 C 250 12, 380 118, 500 62 S 760 10, 930 74" stroke="#E8A98F" strokeWidth="3.5" strokeDasharray="2 14" strokeLinecap="round" />
          </svg>
        <div className="steps-grid">
          <article className="step">
            <Image className="step-fig" src={`${IMG}/gen/mascot-book.webp`} alt="Maple cầm sách học bài" width={150} height={150} />
            <div className="step-card">
              <div className="step-head"><span className="step-num t">Nền tảng</span><h3>Learn</h3></div>
              <p>Học từ vựng theo ngữ cảnh, cấu trúc câu và nghe hiểu theo từng Unit — kiến thức được xây có lộ trình, không rời rạc.</p>
              <div className="step-demo t">
                <div className="demo-row">
                  <span className="demo-ic t">Aa</span>
                  <span><span className="demo-strong">describe · compare · raise a hand</span><br /><span className="demo-sub">Từ vựng Unit 3 kèm âm thanh</span></span>
                </div>
              </div>
            </div>
          </article>

          <article className="step">
            <Image className="step-fig" src={`${IMG}/gen/maple-pose-think.webp`} alt="Maple đang suy nghĩ" width={150} height={150} />
            <div className="step-card">
              <div className="step-head"><span className="step-num g">Luyện lại</span><h3>Practice</h3></div>
              <p>Luyện bằng hoạt động có đáp án và được máy chấm ngay — con biết mình đúng ở đâu, sai vì sao.</p>
              <div className="step-demo g">
                <div className="demo-strong" style={{ marginBottom: 10 }}>Sắp xếp thành câu đúng:</div>
                <div className="chips">
                  <span className="chip-word">Our class</span>
                  <span className="chip-word">starts</span>
                  <span className="chip-word blank">at 8:15</span>
                </div>
              </div>
            </div>
          </article>

          <article className="step">
            <Image className="step-fig" src={`${IMG}/gen/maple-pose-cheer.webp`} alt="Maple reo mừng" width={150} height={150} />
            <div className="step-card">
              <div className="step-head"><span className="step-num c">Khám phá</span><h3>Adventure</h3></div>
              <p>Mỗi mùa là một câu chuyện độc lập. Con quan sát, đọc hiểu và suy luận để mở chương tiếp theo — không phụ thuộc số bài Learn đã hoàn thành.</p>
              <div className="step-demo c">
                <div className="demo-row">
                  <span className="demo-ic c" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5z" /></svg>
                  </span>
                  <span><span className="demo-strong">8+ mùa · những thế giới độc lập</span><br /><span className="demo-sub">50+ chương · bản đồ, vật phẩm và câu chuyện riêng</span></span>
                </div>
              </div>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  );
}
