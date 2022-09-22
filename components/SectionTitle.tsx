type Props = {
  number: Number;
  title: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
};

const SectionTitle = ({
  number,
  title,
  bgColor,
  textColor,
  borderColor,
}: Props) => {
  return (
    <h2
      data-aos="fade-up"
      className={
        "active sticky -top-1 z-20 border-b-2 px-[4vmin] pt-[6vh] font-flex text-[12vmin] " +
        bgColor +
        " " +
        textColor +
        " " +
        borderColor
      }
    >
      <span className="text-xl">{number.toString()}/</span>
      {title}
    </h2>
  );
};

export default SectionTitle;
