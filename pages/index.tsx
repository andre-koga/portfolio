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
  projs: any[];
};

const Home: NextPage<Props> = ({ exps, projs }) => {
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
        <Projects projs={projs} />
        <Skills />
        <Awards />
      </ParallaxProvider>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const exps = await client.fetch(`*[_type == "experience"]`);
  const projs = await client.fetch(`*[_type == "project"]`);

  return {
    props: {
      exps,
      projs,
    },
  };
}

export default Home;
