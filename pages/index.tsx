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
import client from "../client";

type Props = {
  exps: any[];
};

const Home: NextPage<Props> = ({ exps }) => {
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
        <Experience exps={exps} />
        <Projects />
        <Skills />
        <Awards />
      </ParallaxProvider>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const exps = await client.fetch(`*[_type == "experience"]`);

  return {
    props: {
      exps,
    },
  };
}

export default Home;
