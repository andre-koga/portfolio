import type { NextPage } from "next";
import {
  LoadingScreen,
  Navbar,
  Introduction,
  Experience,
  Projects,
  Skills,
  Awards,
} from "../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <ParallaxProvider>
        <LoadingScreen />
        <Introduction />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
      </ParallaxProvider>
    </div>
  );
};

export default Home;
