import AboutLeague from "../components/AboutLeague/AboutLeague";
import ChampionsGallery from "../components/ChampionsGallery/ChampionsGallery";
import CurrentSeason from "../components/CurrentSeason/CurrentSeason";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import JoinToday from "../components/JoinToday/JoinToday";
import LeagueCentre from "../components/LeagueCentre/LeagueCentre";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutLeague />
      <HowItWorks />
      <CurrentSeason />
      <LeagueCentre />
      <ChampionsGallery />
      <JoinToday />
    </>
  );
}
