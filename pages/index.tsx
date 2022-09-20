import type { NextPage } from "next";
import Link from "next/link";
import { LoadingScreen, Navbar, Introduction } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <LoadingScreen />
      <Introduction />
    </div>
  );
};

export default Home;
