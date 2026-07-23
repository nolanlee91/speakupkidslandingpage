import Image from "next/image";
import { IMG } from "@/lib/site";

export function Rewards() {
  return (
    <section className="section rewards" aria-labelledby="rewards-title">
      <div className="container rewards-grid">
        <div>
          <span className="eyebrow gold">Động lực</span>
          <h2 className="section-title" id="rewards-title">Phần thưởng nhỏ, đủ để con muốn quay lại</h2>
          <p className="section-lead">
            Sao, huy hiệu Unit, sticker sưu tầm và những vùng đất mới mở khóa — tất cả gắn với việc hoàn thành
            bài học, không phải vòng quay may mắn.
          </p>
          <ul className="rewards-list">
            <li><span className="star" style={{ fontSize: 17 }}>★</span>Sao cho từng bài hoàn thành tốt</li>
            <li><span className="orb teal" style={{ width: 17, height: 17, border: "none" }} />Huy hiệu khi xong mỗi Unit</li>
            <li><span style={{ color: "var(--coral)", fontSize: 16 }}>❋</span>Sticker và bộ sưu tập theo chủ đề</li>
            <li><span style={{ color: "var(--teal-d)" }}>▸</span>Vùng đất mới mở sau mỗi Adventure</li>
          </ul>
        </div>

        <div className="collect-card" aria-label="Bộ sưu tập của con">
          <h3>Bộ sưu tập của con</h3>
          <div className="orbs">
            <span className="orb teal">PARK</span>
            <span className="orb gold">CLASS</span>
            <span className="orb empty">?</span>
            <span className="orb empty">?</span>
          </div>
          <div className="collect-week">
            <div>
              <div className="d1">Tuần này: 4 ngày học</div>
              <div className="d2">T2 · T3 · T5 · T6</div>
            </div>
            <div style={{ fontSize: 22, color: "var(--gold)", letterSpacing: 2 }}>★ 128</div>
          </div>
          <Image className="collect-fig" src={`${IMG}/gen/mascot-star.webp`} alt="" aria-hidden="true" width={104} height={104} />
        </div>
      </div>
    </section>
  );
}
