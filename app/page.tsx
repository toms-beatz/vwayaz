import Features from "./components/Features";
import Footer from "./components/Footer";
import GetApp from "./components/GetApp";
import Guide from "./components/Guide";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <Features />
      <GetApp />
      <Footer />
    </>
  );
}
