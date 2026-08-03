import Image from "next/image";
import { IMG } from "@/lib/site";

export function Rewards() {
  return (
    <section className="section rewards" aria-labelledby="rewards-title">
      <div className="container rewards-grid">
        <div>
          <span className="eyebrow gold">Động lực</span>
          <h2 className="section-title" id="rewards-title">Mọi thành quả đều trở về Maple Clubhouse</h2>
          <p className="section-lead">
            Không còn nhiều hệ thống phần thưởng rời rạc. Con hoàn thành hoạt động để nhận Maple Coins,
            tự chọn nội thất và nhìn căn phòng cùng cuốn sổ hành trình đầy dần theo thời gian.
          </p>
          <ul className="rewards-list">
            <li><span className="star" style={{ fontSize: 17 }}>★</span>Sao và chuỗi ngày cho biết tiến độ hiện tại</li>
            <li><span className="orb teal" style={{ width: 17, height: 17, border: "none" }} />Learn, Practice và Chapter mới thưởng Coins một lần</li>
            <li><span style={{ color: "var(--coral)", fontSize: 16 }}>❋</span>Shop giá cố định, không loot box hay tiền thật</li>
            <li><span style={{ color: "var(--teal-d)" }}>▸</span>Sticker, huy hiệu và quà Season là kỷ vật không thể mua</li>
          </ul>
        </div>

        <div className="collect-card" aria-label="Maple Clubhouse của con">
          <h3>Maple Clubhouse</h3>
          <div className="orbs">
            <span className="orb teal">ROOM</span>
            <span className="orb gold">STICKER</span>
            <span className="orb empty">?</span>
            <span className="orb empty">?</span>
          </div>
          <div className="collect-week">
            <div>
              <div className="d1">My Room · Shop · Journey Book</div>
              <div className="d2">Mua, trưng bày và cất nội thất bất cứ lúc nào</div>
            </div>
            <div style={{ fontSize: 22, color: "var(--gold)", letterSpacing: 2 }}>★ 128</div>
          </div>
          <Image className="collect-fig" src={`${IMG}/gen/mascot-star.webp`} alt="" aria-hidden="true" width={104} height={104} />
        </div>
      </div>
    </section>
  );
}
