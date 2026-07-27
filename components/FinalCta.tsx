import Image from "next/image";
import { site, IMG } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="hills" aria-hidden="true" style={{ bottom: -160 }}>
        <span className="hill hill-1" />
        <span className="hill hill-2" style={{ right: "-20%", left: "40%" }} />
      </div>

      <div className="container">
        <div className="final-grid">
          <div>
            <h2 id="final-title">Sẵn sàng cho chuyến phiêu lưu tiếng Anh đầu tiên của con?</h2>
            <p>Maple đang chờ để bắt đầu cùng con. Miễn phí, không cần thẻ.</p>
            <a className="btn btn-primary btn-lg" href={site.appUrl}>Cho con học thử miễn phí</a>
          </div>
          <Image className="final-fig" src={`${IMG}/gen/mascot-wave.webp`} alt="Maple vẫy tay chào mời con vào học" width={260} height={260} />
        </div>
      </div>
    </section>
  );
}
