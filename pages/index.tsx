import type { NextPage } from "next";
import {
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
  skills: any[];
};

const Home: NextPage<Props> = ({ exps, projs, skills }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <ParallaxProvider>
        <Introduction />
        <Experience exps={exps} />
        <Projects projs={projs} />
        <Skills skills={skills} />
        <Awards />
        <div className="h-[100vh]"></div>
      </ParallaxProvider>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const exps = await client.fetch(`*[_type == "experience"]`);
  const projs = await client.fetch(`*[_type == "project"]`);
  const skills = await client.fetch(`*[_type == "skill"]`);

  return {
    props: {
      exps,
      projs,
      skills,
    },
  };
}

export default Home;
