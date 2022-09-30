import { ProjectsItem, SectionTitle } from "./";

const Projects = () => {
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
        <ProjectsItem
          link="/"
          image="/images/light.png"
          title="koga.one"
          text="Personal blog made with NextJS, Tailwind, Vercel, HygraphCMS"
        />
        <ProjectsItem
          link="/"
          image="/images/light.png"
          title="Numerus"
          text="Unique calculator made with NextJS and a multithread package"
        />
        <ProjectsItem
          link="/"
          image="/images/light.png"
          title="Good Luck Collective"
          text="Participates in a indie-game team. Competes in game jams from time to time"
        />
        <ProjectsItem
          link="/"
          image="/images/light.png"
          title="Indie Games"
          text="Publishes games on kogaone.itch.io made with Unity and C#"
        />
        <ProjectsItem
          link="/"
          image="/images/light.png"
          title="Digital Art"
          text="Posts digital art on Instagram (@color.koga)"
        />
      </div>
    </section>
  );
};

export default Projects;
