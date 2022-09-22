import Link from "next/link";

type Props = {
  link: string;
  image: string;
  title: string;
  text: string;
};

const ProjectsItem = ({ link, image, title, text }: Props) => {
  return (
    <Link href={link}>
      <a
        data-aos="fade-up"
        className="projects-item flex min-h-[20vmin] border-b-2 border-stone-100"
      >
        {/* <img src={image} alt="" className="rounded-2xl" /> */}
        <div className="flex flex-grow flex-col border-r-2 border-stone-100">
          <h3 className="active whitespace-nowrap pl-[3vmin] pt-[3vmin] font-flex text-[5vmin] text-stone-100">
            {title}
          </h3>
          <p className="flex-grow px-[3vmin] pb-[3vmin] font-jet text-[4vmin] text-stone-100">
            {text}
          </p>
        </div>
        <p className="ml-auto self-center px-[3vmin] text-[12vmin] leading-[0em] text-stone-100">
          ⤷
        </p>
      </a>
    </Link>
  );
};

export default ProjectsItem;
