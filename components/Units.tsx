import Image from "next/image";
import { IMG } from "@/lib/site";

type UnitState = "done" | "doing" | "next" | "lock";
type Unit = {
  n: number; title: string; vi: string; img: string; alt: string;
  state: UnitState; stars?: string; progress?: number; note?: string;
};

const STATUS_LABEL: Record<UnitState, string> = {
  done: "✓ Hoàn thành", doing: "● Đang học", next: "Chưa bắt đầu", lock: "🔒 Chưa mở khóa",
};

const UNITS: Unit[] = [
  { n: 1, title: "At the Park", vi: "Ở công viên · hoạt động", img: "scene-park", alt: "At the Park — cảnh công viên", state: "done", stars: "★★★" },
  { n: 2, title: "In the Kitchen", vi: "Trong nhà bếp · đồ vật", img: "scene-kitchen", alt: "In the Kitchen — cảnh nhà bếp", state: "done", stars: "★★☆" },
  { n: 3, title: "In the Classroom", vi: "So sánh & mô tả", img: "scene-classroom", alt: "In the Classroom — cảnh lớp học", state: "doing", progress: 64 },
  { n: 4, title: "At the Supermarket", vi: "Ở siêu thị · số lượng & giá", img: "scene-supermarket", alt: "At the Supermarket — cảnh siêu thị", state: "next" },
  { n: 5, title: "At the Bus Stop", vi: "Ở trạm xe buýt · hỏi đường & giờ", img: "scene-bus-stop-rain", alt: "At the Bus Stop — cảnh trạm xe buýt", state: "lock" },
  { n: 6, title: "At the Library", vi: "Ở thư viện · đọc hiểu chuyện ngắn", img: "scene-library", alt: "At the Library — cảnh thư viện", state: "lock" },
];

export function Units() {
  return (
    <section className="section units" aria-labelledby="units-title">
      <div className="container">
        <div className="center" style={{ maxWidth: 640, margin: "0 auto 8px" }}>
          <span className="eyebrow">Lộ trình</span>
          <h2 className="section-title" id="units-title">Mỗi Unit là một nơi chốn thật</h2>
          <p className="section-lead">
            Con đi qua từng cảnh trong đời sống — hoàn thành Unit này để mở Unit sau. Cả sáu Unit đã sẵn sàng trong app;
            dưới đây là ví dụ tiến độ của một bé:
          </p>
        </div>

        <ol className="units-grid" style={{ padding: 0, margin: "52px 0 0", listStyle: "none" }}>
          {UNITS.map((u) => (
            <li className={`unit-card ${u.state === "doing" ? "active" : ""}`} key={u.n}>
              <div className="unit-media">
                <Image src={`${IMG}/gen/${u.img}.webp`} alt={u.alt} width={800} height={600} style={{ width: "100%", height: 156, objectFit: "cover" }} sizes="(max-width: 720px) 100vw, 380px" />
                <span className={`unit-status ${u.state}`}>{STATUS_LABEL[u.state]}</span>
              </div>
              <div className="unit-body">
                <div className="unit-kicker">Unit {u.n}</div>
                <h3>{u.title}</h3>
                {u.state === "doing" ? (
                  <>
                    <div className="unit-bar"><i style={{ width: `${u.progress}%` }} /></div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--muted)" }}>{u.progress}% · {u.vi}</div>
                  </>
                ) : (
                  <div className="unit-foot">
                    <span>{u.vi}</span>
                    {u.stars && <span className="star">{u.stars}</span>}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
