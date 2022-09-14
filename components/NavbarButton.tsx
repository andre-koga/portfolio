import Link from "next/link";

type Props = {
  tag: string;
  route: string;
};

const NavbarButton = ({ tag, route }: Props) => {
  return (
    <li>
      <Link href={tag}>
        <a className={route === tag ? "active" : "non-active"}>
          <p className="capitalize">{tag.slice(2)}</p>
        </a>
      </Link>
    </li>
  );
};

export default NavbarButton;
