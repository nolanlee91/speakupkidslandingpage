import Image from "next/image";
import { IMG, site } from "@/lib/site";

const SEASONS = [
  {
    number: "01",
    title: "The Lost Maple Compass",
    vi: "Chiếc la bàn Maple thất lạc",
    desc: "Theo dấu bản đồ, so sánh manh mối và ghép lại chiếc la bàn bị thất lạc.",
    meta: "8 Chapter · quan sát & suy luận",
    image: "adventure-season-map.webp",
  },
  {
    number: "02",
    title: "The Silent Harbour Signal",
    vi: "Tín hiệu bí ẩn ngoài bến cảng",
    desc: "Lần theo tín hiệu Blue 7 qua cảng, đảo, thủy triều và những bằng chứng âm thanh.",
    meta: "8 Chapter · nghe & kiểm chứng",
    image: "adventure-season-02-map.webp",
  },
  {
    number: "03",
    title: "The Sky Garden Challenge",
    vi: "Thử thách khu vườn trên mây",
    desc: "Biến một sân thượng trống thành khu vườn bền vững bằng cách thử, sửa và phối hợp ý tưởng.",
    meta: "6 Chapter · thiết kế & giải quyết vấn đề",
    image: "adventure-season-03-map.webp",
  },
  {
    number: "04",
    title: "The Mountain Weather Station",
    vi: "Trạm thời tiết trên núi",
    desc: "Khôi phục trạm dự báo, đọc dấu hiệu thời tiết và chọn tuyến đường an toàn lên đỉnh núi.",
    meta: "6 Chapter · bằng chứng & quyết định",
    image: "adventure-season-04-map.webp",
  },
] as const;

const JOURNEY = [
  ["01", "Chọn một mùa", "Mỗi Season là một câu chuyện độc lập, con có thể bắt đầu ở thế giới mình thích."],
  ["02", "Đi qua từng Chapter", "Đọc, nghe, quan sát tranh và đưa ra lựa chọn để mở điểm tiếp theo trên bản đồ."],
  ["03", "Mang phần thưởng về", "Mỗi chặng mở khóa vật phẩm, huy hiệu và một phần mới trong bộ sưu tập của Maple."],
] as const;

export function Adventure() {
  return (
    <section className="section adventure-showcase" id="phieu-luu" aria-labelledby="adventure-title">
      <div className="container">
        <header className="adventure-heading">
          <div>
            <span className="eyebrow gold">Adventure · 4+ mùa phiêu lưu</span>
            <h2 className="section-title" id="adventure-title">Tiếng Anh trở thành một phần của câu chuyện</h2>
          </div>
          <p className="section-lead">
            Adventure là tuyến truyện riêng, không phải bài Learn đổi tên. Con cùng Maple quan sát, đọc, nghe,
            dùng bằng chứng và đưa ra quyết định để mở từng Chapter trên bản đồ.
          </p>
        </header>

        <div className="adventure-feature">
          <div className="adventure-visual">
            <Image
              className="adventure-map"
              src={`${IMG}/product/adventure-season-04-map.webp`}
              alt="Bản đồ hành trình lên trạm thời tiết trên núi của Maple"
              width={1600}
              height={900}
              sizes="(max-width: 960px) 100vw, 58vw"
            />
            <figure className="adventure-scene">
              <Image
                src={`${IMG}/product/adventure-season-04-scene.webp`}
                alt="Maple cùng các bạn khôi phục trạm thời tiết trên đỉnh núi"
                width={1200}
                height={900}
                sizes="(max-width: 760px) 72vw, 330px"
              />
              <figcaption>Season 4 · The Mountain Weather Station</figcaption>
            </figure>
            <span className="map-note">Đi qua từng Chapter và mở khóa điểm đến mới</span>
          </div>

          <div className="adventure-flow">
            <p className="adventure-kicker">Một hành trình có mở đầu, thử thách và phần thưởng</p>
            <ol>
              {JOURNEY.map(([number, title, desc]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{desc}</p></div>
                </li>
              ))}
            </ol>
            <div className="adventure-stats" aria-label="Thông tin Adventure">
              <span><b>4+</b> Season</span>
              <span><b>28+</b> Chapter</span>
              <span><b>24+</b> vật phẩm</span>
            </div>
            <a className="btn btn-primary" href={site.appUrl}>Bắt đầu phiêu lưu</a>
          </div>
        </div>

        <div className="season-heading">
          <div><span>Thế giới đang mở</span><h3>Chọn cuộc phiêu lưu của con</h3></div>
          <p>4 mùa hiện có · những mùa mới sẽ tiếp tục được bổ sung</p>
        </div>

        <ol className="season-gallery">
          {SEASONS.map((season) => (
            <li key={season.number}>
              <div className="season-cover">
                <Image src={`${IMG}/product/${season.image}`} alt="" fill sizes="(max-width: 720px) 100vw, 25vw" />
                <span className="season-number">{season.number}</span>
              </div>
              <div className="season-body">
                <h3>{season.title}</h3>
                <span className="season-vi">{season.vi}</span>
                <p>{season.desc}</p>
                <small>{season.meta}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
