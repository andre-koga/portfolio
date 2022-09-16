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
          <p className="py-1 px-2 text-center font-flex text-lg uppercase text-black transition-all md:px-8">
            {tag.slice(2)}
          </p>
        </a>
      </Link>
    </li>
  );
};

export default NavbarButton;
