import Image from "next/image";
import { IMG, site } from "@/lib/site";

const CHAPTERS = [
  "The Message at the Harbour",
  "The Wrong Ferry",
  "Footprints in the Forest",
  "The Cabin Clue",
  "The Museum Mystery",
  "The Stormy Waterfront",
  "The Lighthouse Code",
  "The Hidden Garden",
];

export function Adventure() {
  return (
    <section className="section adventure-showcase" id="phieu-luu" aria-labelledby="adventure-title">
      <div className="container adventure-grid">
        <div className="adventure-copy">
          <span className="eyebrow gold">Adventure · Season 1</span>
          <h2 className="section-title" id="adventure-title">The Lost Maple Compass</h2>
          <p className="section-lead">
            Adventure là một tuyến truyện riêng, không phải bài Learn đổi tên. Con đọc tình huống, quan sát tranh,
            suy luận bằng tiếng Anh và mở từng Chapter trên bản đồ.
          </p>

          <div className="adventure-stats" aria-label="Thông tin Season 1">
            <span><b>8</b> Chapter</span>
            <span><b>1</b> bí ẩn xuyên suốt</span>
            <span><b>3</b> mảnh la bàn</span>
          </div>

          <ol className="chapter-list">
            {CHAPTERS.map((chapter, index) => (
              <li key={chapter}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {chapter}
              </li>
            ))}
          </ol>

          <a className="btn btn-primary" href={site.appUrl}>Khám phá Season 1</a>
        </div>

        <div className="adventure-visual">
          <Image
            className="adventure-map"
            src={`${IMG}/product/adventure-season-map.webp`}
            alt="Bản đồ tám Chapter của The Lost Maple Compass"
            width={1672}
            height={941}
            sizes="(max-width: 960px) 100vw, 52vw"
          />
          <figure className="adventure-scene">
            <Image
              src={`${IMG}/product/adventure-hidden-garden.webp`}
              alt="Maple và hai người bạn ghép ba mảnh la bàn trong khu vườn bí mật"
              width={1448}
              height={1086}
              sizes="(max-width: 760px) 58vw, 320px"
            />
            <figcaption>Chapter 8 · The Hidden Garden</figcaption>
          </figure>
          <span className="map-note">Mỗi Chapter mở một phần của bí ẩn</span>
        </div>
      </div>
    </section>
  );
}
