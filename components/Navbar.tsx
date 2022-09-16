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
      className="fixed right-1/2 top-8 translate-x-1/2 overflow-hidden"
    >
      <ol className="flex flex-row">
        <NavbarButton tag={"/#home"} route={route} />
        <NavbarButton tag={"/#work"} route={route} />
        <NavbarButton tag={"/#fails"} route={route} />
        <NavbarButton tag={"/#contact"} route={route} />
      </ol>
    </nav>
  );
};

export default Navbar;
