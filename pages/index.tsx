import type { NextPage } from "next";
import { Navbar, Panel1, Panel2 } from "../components";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Panel1 />
      <Panel2 />
      <Panel2 />
      <Panel2 />
      <Panel2 />
    </div>
  );
};

export default Home;
