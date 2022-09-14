import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const router = useRouter();
  const [route, setRoute] = useState(router.asPath);

  useEffect(() => {
    setRoute(router.asPath);
  }, [router.asPath]);

  return (
    <nav id="navbar">
      <ol>
        <NavbarButton tag={"/#about"} route={route} />
        <NavbarButton tag={"/#work"} route={route} />
        <NavbarButton tag={"/#contact"} route={route} />
      </ol>
    </nav>
  );
};

export default Navbar;
