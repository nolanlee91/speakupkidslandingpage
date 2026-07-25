import Image from "next/image";
import { IMG } from "@/lib/site";

const GAMES: { img: string; title: string; desc: string; skill: string; cls: "t" | "g" | "c" | "b" }[] = [
  { img: "game-picdet", title: "Picture Detective", desc: "Quan sát một bức tranh, suy luận, chọn mô tả đúng rồi xây câu và nói theo Maple.", skill: "Luyện: quan sát · suy luận · mô tả tranh", cls: "t" },
  { img: "game-puzzle", title: "Sentence Puzzle", desc: "Sắp xếp các từ thành câu tiếng Anh đúng theo từng chủ đề và cấp độ.", skill: "Luyện: trật tự từ · cấu trúc câu", cls: "g" },
  { img: "game-riddle", title: "English Riddles", desc: "Đọc hoặc nghe các manh mối tiếng Anh rồi chọn lời giải hợp lý.", skill: "Luyện: đọc/nghe hiểu · suy luận từ manh mối", cls: "c" },
  { img: "game-listen", title: "Listen & Choose", desc: "Nghe Maple đọc câu tiếng Anh rồi chọn đúng ý nghĩa trong các đáp án.", skill: "Luyện: nghe hiểu · nhận biết ý nghĩa", cls: "b" },
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
