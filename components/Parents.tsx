const CHECKS = [
  "Bài con đã hoàn thành",
  "Kỹ năng đang luyện",
  "Số buổi học trong tuần",
  "Điểm mạnh & phần cần ôn",
  "Nội dung đúng độ tuổi",
];

export function Parents() {
  return (
    <section className="section parents" id="phu-huynh" aria-labelledby="parents-title">
      <div className="container parents-grid">
        <div>
          <span className="eyebrow">Dành cho phụ huynh</span>{" "}
          <span className="soon-tag">Sắp ra mắt</span>
          <h2 className="section-title" id="parents-title" style={{ marginTop: 16 }}>Bạn luôn biết con đang học gì</h2>
          <p className="section-lead">
            Báo cáo phụ huynh đang được hoàn thiện: mỗi tuần, app sẽ tóm tắt việc học của con bằng ngôn ngữ
            dễ hiểu — không cần bạn giỏi tiếng Anh.
          </p>
          <ul className="parents-check">
            {CHECKS.map((c) => (
              <li key={c}><span className="ck">✓</span>{c}</li>
            ))}
          </ul>
        </div>

        <div className="report" aria-label="Bản xem trước báo cáo tuần">
          <div className="report-top">
            <h3>Tuần này của Minh</h3>
            <span>Bản xem trước</span>
          </div>
          <div className="report-stats">
            <div className="rstat"><b>4</b><span>buổi học</span></div>
            <div className="rstat"><b>9</b><span>bài xong</span></div>
            <div className="rstat gold"><b>★ 36</b><span>sao mới</span></div>
          </div>
          <div className="skillbars">
            <div className="skillbar">
              <div className="lab"><span>Từ vựng</span><span className="good">Tốt</span></div>
              <div className="track"><i className="t" style={{ width: "85%" }} /></div>
            </div>
            <div className="skillbar">
              <div className="lab"><span>Nghe hiểu</span><span className="good">Khá</span></div>
              <div className="track"><i className="t" style={{ width: "72%" }} /></div>
            </div>
            <div className="skillbar">
              <div className="lab"><span>Xây câu</span><span className="warn">Cần ôn</span></div>
              <div className="track"><i className="g" style={{ width: "54%" }} /></div>
            </div>
          </div>
          <div className="report-tip"><strong>Gợi ý:</strong> Cùng con ôn lại câu hỏi Where / When trong Unit 3.</div>
        </div>
      </div>
    </section>
  );
}
