import { site } from "@/lib/site";

export function Pricing() {
  return (
    <section className="section pricing" id="bang-gia" aria-labelledby="pricing-title">
      <div className="container">
        <div className="center" style={{ maxWidth: 560, margin: "0 auto 8px" }}>
          <span className="eyebrow">Bảng giá</span>
          <h2 className="section-title" id="pricing-title">Bắt đầu miễn phí, nâng cấp khi con sẵn sàng</h2>
          <p className="section-lead">Không cần thẻ. Hủy bất cứ lúc nào.</p>
        </div>

        <div className="plans">
          {/* Free */}
          <div className="plan">
            <div className="plan-name">Free</div>
            <div className="plan-price">0đ</div>
            <div className="plan-sub">Dùng thử không giới hạn thời gian</div>
            <ul className="plan-features">
              <li><span className="ck">✓</span>Toàn bộ Level 0 Phonics</li>
              <li><span className="ck">✓</span>Learn: 3 bài đầu L1/L2 · 1 bài mỗi collection L3</li>
              <li><span className="ck">✓</span>Practice: 4 bộ Đố vui · 4 cảnh Thám tử</li>
              <li><span className="ck">✓</span>Adventure: Season 1</li>
              <li><span className="ck">✓</span>Báo cáo tuần rút gọn <span className="soon-tag" style={{ padding: "2px 8px" }}>sắp có</span></li>
            </ul>
            <a className="btn btn-outline plan-cta btn-block" href={site.appUrl}>Bắt đầu miễn phí</a>
          </div>

          {/* Premium */}
          <div className="plan featured">
            <span className="plan-badge">Được chọn nhiều nhất</span>
            <div className="plan-name">Premium</div>
            <div className="plan-price">Dùng thử 14 ngày</div>
            <div className="plan-sub">Miễn phí, không cần thẻ · giá công bố sau</div>
            <ul className="plan-features">
              <li><span className="ck">✓</span>Toàn bộ 100+ bài Learn</li>
              <li><span className="ck">✓</span>Đủ 4 trò chơi, gồm Xếp câu &amp; Nghe &amp; chọn</li>
              <li><span className="ck">✓</span>Trọn bộ Adventure: Season 1–8</li>
              <li><span className="ck">✓</span>Báo cáo chi tiết cho phụ huynh <span className="soon-tag" style={{ padding: "2px 8px" }}>sắp có</span></li>
              <li><span className="ck">✓</span>Sticker &amp; bộ sưu tập đầy đủ</li>
            </ul>
            <a className="btn btn-primary plan-cta btn-block" href={site.appUrl}>Dùng thử Premium miễn phí</a>
          </div>

          {/* Family */}
          <div className="plan">
            <div className="plan-name">Family <span className="soon-tag">Sắp ra mắt</span></div>
            <div className="plan-price">Sắp ra mắt</div>
            <div className="plan-sub">Tiết kiệm cho nhà đông anh em</div>
            <ul className="plan-features">
              <li><span className="ck">✓</span>Mọi quyền lợi Premium</li>
              <li><span className="ck">✓</span>Đến 4 hồ sơ con riêng biệt</li>
              <li><span className="ck">✓</span>Báo cáo từng con tách riêng</li>
            </ul>
            <a className="btn btn-outline plan-cta btn-block" href={site.appUrl}>Nhận thông báo ra mắt</a>
          </div>
        </div>
      </div>
    </section>
  );
}
