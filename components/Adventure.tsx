import Image from "next/image";
import { IMG, site } from "@/lib/site";

const SEASONS = [
  {
    number: "01",
    title: "The Lost Maple Compass",
    desc: "Theo dấu bản đồ, so sánh manh mối và ghép lại chiếc la bàn thất lạc.",
    meta: "8 Chapter · suy luận từ hình ảnh",
  },
  {
    number: "02",
    title: "The Silent Harbour Signal",
    desc: "Lần theo tín hiệu Blue 7 qua cảng, đảo, thủy triều và những bằng chứng âm thanh.",
    meta: "8 Chapter · nghe, kiểm chứng và giải thích",
  },
] as const;

export function Adventure() {
  return (
    <section className="section adventure-showcase" id="phieu-luu" aria-labelledby="adventure-title">
      <div className="container adventure-grid">
        <div className="adventure-copy">
          <span className="eyebrow gold">Adventure · 2 Season</span>
          <h2 className="section-title" id="adventure-title">Hai cuộc phiêu lưu, hai bí ẩn độc lập</h2>
          <p className="section-lead">
            Adventure là tuyến truyện riêng, không phải bài Learn đổi tên. Con quan sát, đọc, nghe và dùng bằng chứng
            để đưa ra kết luận trước khi mở Chapter tiếp theo trên bản đồ.
          </p>

          <div className="adventure-stats" aria-label="Thông tin Adventure">
            <span><b>2</b> Season</span>
            <span><b>16</b> Chapter</span>
            <span><b>2</b> bí ẩn độc lập</span>
          </div>

          <ol className="season-list">
            {SEASONS.map((season) => (
              <li key={season.number}>
                <span className="season-number">{season.number}</span>
                <div>
                  <h3>{season.title}</h3>
                  <p>{season.desc}</p>
                  <small>{season.meta}</small>
                </div>
              </li>
            ))}
          </ol>

          <a className="btn btn-primary" href={site.appUrl}>Khám phá Adventure</a>
        </div>

        <div className="adventure-visual">
          <Image
            className="adventure-map"
            src={`${IMG}/product/adventure-season-02-map.webp`}
            alt="Bản đồ biển tám Chapter của The Silent Harbour Signal"
            width={1600}
            height={900}
            sizes="(max-width: 960px) 100vw, 52vw"
          />
          <figure className="adventure-scene">
            <Image
              src={`${IMG}/product/adventure-season-02-finale.webp`}
              alt="Maple và nhóm nghiên cứu khôi phục tín hiệu của Blue 7 tại cảng"
              width={1448}
              height={1086}
              sizes="(max-width: 760px) 58vw, 320px"
            />
            <figcaption>Season 2 · The Silent Harbour Signal</figcaption>
          </figure>
          <span className="map-note">Mỗi bằng chứng đưa con tới Chapter tiếp theo</span>
        </div>
      </div>
    </section>
  );
}
