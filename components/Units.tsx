import Image from "next/image";
import { IMG } from "@/lib/site";

const LEVELS = [
  {
    level: "Level 1",
    title: "Everyday English",
    vi: "Tiếng Anh trong đời sống",
    image: "learn-level-1.webp",
    alt: "Các bạn nhỏ học tiếng Anh tại trung tâm thể thao cộng đồng",
    focus: ["Từ vựng theo cảnh", "Mẫu câu thiết yếu", "Nghe và Mini Check"],
    example: "At the Park · In the Kitchen · Sports Centre",
    tone: "teal",
  },
  {
    level: "Level 2",
    title: "Stories & Situations",
    vi: "Câu chuyện và tình huống",
    image: "learn-level-2.webp",
    alt: "Nhóm học sinh điều tra nguyên nhân mất điện tại trung tâm cộng đồng",
    focus: ["Theo dõi chuỗi sự kiện", "Nguyên nhân và kết quả", "Suy luận từ manh mối"],
    example: "Missing Backpack · Time Capsule · Power Outage",
    tone: "gold",
  },
  {
    level: "Level 3",
    title: "Opinions & Conversations",
    vi: "Ý kiến và hội thoại",
    image: "learn-level-3.webp",
    alt: "Học sinh cùng kiểm tra và cải thiện các giải pháp giúp trường học dễ tiếp cận hơn",
    focus: ["Nêu và bảo vệ ý kiến", "So sánh lựa chọn", "Giải quyết vấn đề cùng nhau"],
    example: "Making Choices · Giving Reasons · Solving Problems",
    tone: "coral",
  },
] as const;

export function Units() {
  return (
    <section className="section learning-path" id="lo-trinh" aria-labelledby="path-title">
      <div className="container">
        <div className="path-heading">
          <div>
            <span className="eyebrow">Lộ trình Learn</span>
            <h2 className="section-title" id="path-title">Ba Level lớn dần cùng cách con dùng tiếng Anh</h2>
          </div>
          <p className="section-lead">
            Mỗi Level đã có hơn 15 bài và sẽ tiếp tục được mở rộng. Con đi từ gọi tên và mô tả, sang đọc tình huống,
            rồi biết giải thích lựa chọn và cùng người khác tìm giải pháp.
          </p>
        </div>

        <ol className="level-grid">
          {LEVELS.map((item, index) => (
            <li className={`level-card ${item.tone}`} key={item.level}>
              <div className="level-media">
                <Image
                  src={`${IMG}/product/${item.image}`}
                  alt={item.alt}
                  width={1448}
                  height={1086}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span className="level-count">15+ bài</span>
                <div className="mobile-level-heading">
                  <span>{item.level}</span>
                  <strong>{item.title}</strong>
                  <small>{item.vi}</small>
                </div>
              </div>
              <div className="level-body">
                <div className="level-topline">
                  <span>{item.level}</span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="level-vi">{item.vi}</p>
                <ul>
                  {item.focus.map((focus) => <li key={focus}>{focus}</li>)}
                </ul>
                <p className="level-example">{item.example}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
