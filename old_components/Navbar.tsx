import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const router = useRouter();
  const [route, setRoute] = useState("");

  useEffect(() => {
    setRoute(router.asPath);
  }, [router.asPath]);

  return (
    <nav
      id="navbar"
      className="fixed left-4 top-4 z-40 flex items-center gap-4 mix-blend-exclusion md:text-xl"
    >
      <Link href={"/"}>
        <a className="active">
          <p className="font-flex text-xl text-white md:text-4xl">a⋆k</p>
        </a>
      </Link>
      <NavbarButton tag={"/#experience"} text="experience" route={route} />
      <NavbarButton tag={"/#projects"} text="projects" route={route} />
      <NavbarButton tag={"/#skills"} text="skills" route={route} />
      <NavbarButton tag={"/#awards"} text="awards" route={route} />
    </nav>
  );
};

export default Navbar;
