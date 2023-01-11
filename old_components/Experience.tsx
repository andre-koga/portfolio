import { SectionTitle, ExperienceItem } from "./index";
import client from "../client";

type Props = {
  exps: any[];
};

const Experience = ({ exps }: Props) => {
  return (
    <section id="experience" className="relative bg-stone-300">
      <SectionTitle
        number={1}
        title="Experience"
        bgColor="bg-stone-300"
        textColor="text-stone-800"
        borderColor="border-stone-800"
      />
      <div className="grid grid-cols-1 text-stone-800">
        {exps.map((exp, i) => {
          return (
            <ExperienceItem
              key={i}
              link={exp.slug.current}
              image={exp.image}
              title={exp.title}
              text={exp.short}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
