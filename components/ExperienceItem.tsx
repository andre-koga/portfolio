import Link from "next/link";

type Props = {
  link: string;
  image: string;
  text: string;
};

const ExperienceItem = ({ link, image, text }: Props) => {
  return (
    <Link href={link}>
      <a
        data-aos="fade-up"
        className="experience-item flex flex-row border-stone-100"
      >
        <img src={image} alt="" />
        <div className="relative flex flex-grow overflow-hidden border-r-2 border-stone-100">
          <p className="text-scroll absolute self-center whitespace-nowrap pl-12 font-flex text-[8vmin]">
            {text}
          </p>
          <p className="text-late-scroll absolute self-center whitespace-nowrap pl-12 font-flex text-[8vmin]">
            {text}
          </p>
        </div>
        <p className="ml-auto self-center px-[3vmin] text-[12vmin] leading-[0em]">
          🡢
        </p>
      </a>
    </Link>
  );
};

export default ExperienceItem;
