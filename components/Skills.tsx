import Link from "next/link";
import { SectionTitle, SkillsItem } from "./index";

type Props = {
  skills: any[];
};

const Skills = ({ skills }: Props) => {
  //console.log(skills);

  return (
    <section id="skills" className="relative bg-stone-300">
      <SectionTitle
        number={3}
        title="Skills"
        bgColor="bg-stone-300"
        textColor="text-stone-800"
        borderColor="border-stone-800"
      />
      <div className="grid grid-cols-1 text-stone-800">
        {skills.map((skill, i) => {
          return <SkillsItem skill={skill} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
