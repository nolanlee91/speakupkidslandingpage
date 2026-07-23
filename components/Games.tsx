import Image from "next/image";
import { IMG } from "@/lib/site";

const GAMES: { img: string; title: string; desc: string; skill: string; cls: "t" | "g" | "c" | "b" }[] = [
  { img: "game-picdet", title: "Picture Detective", desc: "Quan sát cảnh, đọc câu hỏi và suy luận để tìm câu trả lời.", skill: "Luyện: quan sát, đọc hiểu & suy luận", cls: "t" },
  { img: "game-puzzle", title: "Sentence Puzzle", desc: "Sắp xếp từ thành câu đúng — trật tự từ và cấu trúc câu.", skill: "Luyện: trật tự từ & cấu trúc", cls: "g" },
  { img: "game-riddle", title: "English Riddles", desc: "Giải câu đố từ manh mối tiếng Anh — luyện đọc hiểu.", skill: "Luyện: đọc hiểu manh mối", cls: "c" },
  { img: "game-talk", title: "Describe the Picture", desc: "Điền từ, chọn cấu trúc và xây câu tiếng Anh để mô tả bức tranh.", skill: "Luyện: điền từ & xây câu", cls: "b" },
];

export function Games() {
  return (
    <section className="section games" aria-labelledby="games-title">
      <div className="container">
        <div style={{ maxWidth: 640, margin: "0 0 8px" }}>
          <span className="eyebrow">Luyện tập</span>
          <h2 className="section-title" id="games-title">Trò chơi nào cũng luyện một kỹ năng</h2>
          <p className="section-lead">
            Mỗi hoạt động được thiết kế quanh một mục tiêu học tập — chơi có chủ đích, không phải cổng game.
          </p>
        </div>

        <ul className="games-grid" style={{ padding: 0, margin: "40px 0 0", listStyle: "none" }}>
          {GAMES.map((g) => (
            <li className="game-card" key={g.title}>
              <Image src={`${IMG}/gen/${g.img}.webp`} alt={`${g.title} — trò chơi luyện tập`} width={800} height={600} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 14, marginBottom: 14 }} sizes="(max-width: 720px) 100vw, 280px" />
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              <span className={`skill-tag ${g.cls}`}>{g.skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
