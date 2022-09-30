import { ProjectsItem, SectionTitle } from "./";

type Props = {
  projs: any[];
};

const Projects = ({ projs }: Props) => {
  return (
    <section id="projects" className="relative bg-stone-900 pb-60">
      <SectionTitle
        number={2}
        title="Projects"
        bgColor="bg-stone-900"
        textColor="text-stone-200"
        borderColor="border-stone-200"
      />
      <div className="projects-wrapper">
        {projs.map((proj, i) => {
          return (
            <ProjectsItem
              key={i}
              link={proj.slug.current}
              title={proj.title}
              text={proj.short}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
