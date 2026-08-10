import AboutLeague from "../components/AboutLeague/AboutLeague";
import CurrentSeason from "../components/CurrentSeason/CurrentSeason";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import JoinToday from "../components/JoinToday/JoinToday";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutLeague />
      <HowItWorks />
      <CurrentSeason />
      <JoinToday />
    </>
  );
}
