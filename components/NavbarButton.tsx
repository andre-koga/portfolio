import Link from "next/link";

type Props = {
  tag: string;
  text: string;
  route: string;
};

const NavbarButton = ({ tag, text, route }: Props) => {
  return (
    <Link href={tag}>
      <a className={route === tag ? "active" : "non-active"}>
        <p className="font-flex text-stone-100">{text}</p>
      </a>
    </Link>
  );
};

export default NavbarButton;
