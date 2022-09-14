import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar, Panel1, Panel2 } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Panel1 />
      <Panel2 />
    </div>
  );
};

export default Home;
