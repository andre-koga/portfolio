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
    <nav
      id="navbar"
      className="sticky top-0 w-full border-b-2 border-black bg-white"
    >
      <ol className="flex">
        <NavbarButton tag={"/#about"} route={route} />
        <NavbarButton tag={"/#work"} route={route} />
        <NavbarButton tag={"/#contact"} route={route} />
      </ol>
    </nav>
  );
};

export default Navbar;
