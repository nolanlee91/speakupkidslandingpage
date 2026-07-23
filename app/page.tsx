import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { Curriculum } from "@/components/Curriculum";
import { Units } from "@/components/Units";
import { Games } from "@/components/Games";
import { Rewards } from "@/components/Rewards";
import { Parents } from "@/components/Parents";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Curriculum />
        <Units />
        <Games />
        <Rewards />
        <Parents />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
