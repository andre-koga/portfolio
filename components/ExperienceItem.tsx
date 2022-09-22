import Link from "next/link";

type Props = {
  link: string;
  image: string;
  title: string;
  text: string;
};

const ExperienceItem = ({ link, image, title, text }: Props) => {
  return (
    <Link href={link}>
      <a
        data-aos="fade-up"
        className="experience-item flex flex-row border-stone-800"
      >
        <img
          src={image}
          alt={text}
          className="w-[30vmin] rounded-r-2xl object-cover"
        />
        <div className="relative flex flex-grow overflow-hidden border-r-2 border-stone-800">
          <h3 className="active pl-[3vmin] pt-[6vmin] font-flex text-[3vmin]">
            {title}
          </h3>
          <p className="text-scroll absolute self-center whitespace-nowrap pt-[7vmin] pl-[6vmin] font-jet text-[8vmin]">
            {text}
          </p>
          <p className="text-late-scroll absolute self-center whitespace-nowrap pt-[7vmin] pl-[6vmin] font-jet text-[8vmin]">
            {text}
          </p>
        </div>
        <p className="ml-auto self-center px-[3vmin] text-[12vmin] leading-[0em]">
          ⤷
        </p>
      </a>
    </Link>
  );
};

export default ExperienceItem;
