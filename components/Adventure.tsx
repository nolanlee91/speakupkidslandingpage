import Image from "next/image";
import { IMG, site } from "@/lib/site";

const SEASONS = [
  {
    number: "01",
    title: "The Lost Maple Compass",
    vi: "Chiếc la bàn Maple thất lạc",
    desc: "Theo dấu bản đồ, so sánh manh mối và ghép lại chiếc la bàn bị thất lạc.",
    meta: "8 chương · quan sát & suy luận",
    image: "adventure-season-map.webp",
  },
  {
    number: "02",
    title: "The Silent Harbour Signal",
    vi: "Tín hiệu bí ẩn ngoài bến cảng",
    desc: "Lần theo tín hiệu Blue 7 qua cảng, đảo, thủy triều và những bằng chứng âm thanh.",
    meta: "8 chương · nghe & kiểm chứng",
    image: "adventure-season-02-map.webp",
  },
  {
    number: "03",
    title: "The Sky Garden Challenge",
    vi: "Thử thách khu vườn trên mây",
    desc: "Biến một sân thượng trống thành khu vườn bền vững bằng cách thử, sửa và phối hợp ý tưởng.",
    meta: "6 chương · thiết kế & giải quyết vấn đề",
    image: "adventure-season-03-map.webp",
  },
  {
    number: "04",
    title: "The Mountain Weather Station",
    vi: "Trạm thời tiết trên núi",
    desc: "Khôi phục trạm dự báo, đọc dấu hiệu thời tiết và chọn tuyến đường an toàn lên đỉnh núi.",
    meta: "6 chương · bằng chứng & quyết định",
    image: "adventure-season-04-map.webp",
  },
  {
    number: "05",
    title: "The Story Atlas",
    vi: "Cuốn bản đồ truyện",
    desc: "Bước vào những câu chuyện bị bỏ dở, đọc manh mối và lựa chọn cách viết tiếp mỗi hành trình.",
    meta: "6 chương · đọc hiểu & kể chuyện",
    image: "adventure-season-05-map.webp",
  },
  {
    number: "06",
    title: "The Lantern Market Challenge",
    vi: "Thử thách chợ đèn lồng",
    desc: "Cùng Maple tổ chức khu chợ: sắp xếp gian hàng, xử lý dị ứng, ngân sách và lịch giao hàng.",
    meta: "6 chương · giao tiếp & lập kế hoạch",
    image: "adventure-season-06-map.webp",
  },
  {
    number: "07",
    title: "The Junior Newsroom",
    vi: "Tòa soạn nhí: Sự thật hay tin đồn?",
    desc: "Kiểm tra ảnh, phỏng vấn nhân chứng và đối chiếu nguồn trước khi xuất bản một bản tin đáng tin cậy.",
    meta: "6 chương · kiểm chứng & tư duy phản biện",
    image: "adventure-season-07-map.webp",
  },
  {
    number: "08",
    title: "Mission Moonbase",
    vi: "Nhiệm vụ căn cứ Mặt Trăng",
    desc: "Tham gia phi hành đoàn, cân nhắc hàng hóa, tuyến rover và dữ liệu để xây căn cứ đầu tiên.",
    meta: "6 chương · quy trình & ra quyết định",
    image: "adventure-season-08-map.webp",
  },
] as const;

const JOURNEY = [
  ["01", "Chọn một mùa", "Mỗi mùa là một câu chuyện độc lập, con có thể bắt đầu ở thế giới mình thích."],
  ["02", "Đi qua từng chương", "Đọc, nghe, quan sát tranh và đưa ra lựa chọn để mở điểm tiếp theo trên bản đồ."],
  ["03", "Mang kỷ vật về Clubhouse", "Đạo cụ từng chương ở lại trong câu chuyện; hoàn thành cả mùa mới nhận một kỷ vật Adventure trong My Journal."],
] as const;

export function Adventure() {
  return (
    <section className="section adventure-showcase" id="phieu-luu" aria-labelledby="adventure-title">
      <div className="container">
        <header className="adventure-heading">
          <div>
            <span className="eyebrow gold">Adventure · 8+ mùa phiêu lưu</span>
            <h2 className="section-title" id="adventure-title">Tiếng Anh trở thành một phần của câu chuyện</h2>
          </div>
          <p className="section-lead">
            Adventure gồm những câu chuyện tương tác độc lập. Con cùng Maple quan sát, đọc, nghe,
            tìm bằng chứng và đưa ra quyết định để mở từng chương trên bản đồ.
          </p>
        </header>

        <div className="adventure-feature">
          <div className="adventure-visual">
            <Image
              className="adventure-map"
              src={`${IMG}/product/adventure-season-08-map.webp`}
              alt="Bản đồ nhiệm vụ xây căn cứ Mặt Trăng của Maple"
              width={1600}
              height={900}
              sizes="(max-width: 960px) 100vw, 58vw"
            />
            <figure className="adventure-scene">
              <Image
                src={`${IMG}/product/adventure-season-08-scene.webp`}
                alt="Maple cùng phi hành đoàn lựa chọn nơi xây căn cứ Mặt Trăng"
                width={1200}
                height={900}
                sizes="(max-width: 760px) 72vw, 330px"
              />
              <figcaption>Season 8 · Mission Moonbase</figcaption>
            </figure>
            <span className="map-note">Đi qua từng chương và mở khóa điểm đến mới</span>
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
              <span><b>8+</b> mùa</span>
              <span><b>50+</b> chương</span>
              <span><b>8</b> kỷ vật mùa</span>
            </div>
            <a className="btn btn-primary" href={site.appUrl}>Bắt đầu phiêu lưu</a>
          </div>
        </div>

        <div className="season-heading">
          <div><span>Thế giới đang mở</span><h3>Chọn cuộc phiêu lưu của con</h3></div>
          <p>8 mùa hiện có · những mùa mới sẽ tiếp tục được bổ sung</p>
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
