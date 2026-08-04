export function Rewards() {
  return (
    <section className="section rewards" id="clubhouse" aria-labelledby="rewards-title">
      <div className="container rewards-grid">
        <div>
          <span className="eyebrow gold">Maple Clubhouse</span>
          <h2 className="section-title" id="rewards-title">Học để xây một ngôi nhà thật sự là của con</h2>
          <p className="section-lead">
            Learn, Practice và Adventure tạo ra Maple Coins. Con tự chọn nội thất, sắp xếp năm căn phòng
            và từng bước mở một không gian riêng — không phải bảng điểm trang trí cho có.
          </p>
          <ul className="rewards-list">
            <li><span className="star" style={{ fontSize: 17 }}>★</span><b>32 món nội thất</b> qua Trail, Cosmic, Studio và Prestige Club</li>
            <li><span className="orb teal" style={{ width: 17, height: 17, border: "none" }} /><b>Kéo, xoay, phóng to</b> và chuyển đồ giữa năm phòng</li>
            <li><span style={{ color: "var(--coral)", fontSize: 16 }}>●</span>Mở <b>Pet Retreat</b> để nhận nuôi Scout hoặc Misty và tự đặt tên</li>
            <li><span style={{ color: "var(--teal-d)" }}>▸</span>Shop giá cố định; không loot box, không bán Coin bằng tiền thật</li>
          </ul>
        </div>

        <div className="clubhouse-showcase" aria-label="Phòng Clubhouse và hai pet có thể nhận nuôi">
          <div className="clubhouse-scene">
            <img src="/assets/images/clubhouse/maple-clubhouse-room-v2.webp" alt="Phòng khách Maple Clubhouse nhìn ra Vancouver" />
            <span className="landing-pet landing-pet-dog" role="img" aria-label="Scout, chú chó lông vàng" />
            <span className="landing-pet landing-pet-cat" role="img" aria-label="Misty, mèo mướp xám" />
            <span className="clubhouse-scene-tag">MAKE IT YOURS</span>
          </div>
          <div className="clubhouse-facts">
            <div><b>32</b><span>món nội thất</span></div>
            <div><b>5</b><span>căn phòng</span></div>
            <div><b>2</b><span>pet để chọn</span></div>
          </div>
          <p>Pet Retreat thuộc Prestige Club. Sở hữu món này để nhận nuôi một người bạn đồng hành miễn phí.</p>
        </div>
      </div>
    </section>
  );
}
