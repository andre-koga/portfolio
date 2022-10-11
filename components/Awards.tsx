import { AwardItem } from ".";
import SectionTitle from "./SectionTitle";

type Props = {
  awards: any[];
};

const Awards = ({ awards }: Props) => {
  return (
    <section id="awards" className="relative bg-stone-300">
      <SectionTitle
        number={4}
        title="Awards"
        bgColor="bg-stone-800"
        textColor="text-pepper"
        borderColor="border-stone-300"
      />
      <div className="grid grid-cols-1">
        {awards.map((award, i) => {
          return <AwardItem key={i} award={award} i={i} />;
        })}
      </div>
    </section>
  );
};

export default Awards;
