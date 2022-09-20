type Props = {
  number: Number;
  title: string;
};

const SectionTitle = ({ number, title }: Props) => {
  return (
    <h2
      data-aos="fade-up"
      className="active sticky -top-1 z-20 mb-[6vh] bg-stone-800 px-[4vmin] pt-[6vh] font-flex text-[12vmin] text-white"
    >
      <span className="text-xl">{number.toString()}/</span>
      {title}
    </h2>
  );
};

export default SectionTitle;
