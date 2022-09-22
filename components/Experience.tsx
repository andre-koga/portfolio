import { SectionTitle, ExperienceItem } from "./index";

const Experience = () => {
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
        <ExperienceItem
          link="/"
          image="/images/bdbi.jpg"
          title="Dev at Big Data Big Impact"
          text="Helps by developing an app that predicts Alzheimer using data analysis. ―"
        />
        <ExperienceItem
          link="/"
          image="/images/dupla.png"
          title="CMO at DUPLA"
          text="DUPLA Tech. Brazilian recruiter company. Helps companies hire qualified women in tech. ―"
        />
        <ExperienceItem
          link="/"
          image="/images/hackmed.webp"
          title="Co-Founder of Nery"
          text="Nery. Medical Startup. Devised an app that uses AI to interact with the elderly. ―"
        />
        <ExperienceItem
          link="/"
          image="/images/noic.png"
          title="Vice-President of NOIC"
          text="NOIC. Largest Brazilian education NGO made by students. It has courses for scientific olympiads. ―"
        />
        <ExperienceItem
          link="/"
          image="/images/math.jpg"
          title="Math Tutoring at Farias Brito"
          text="Taught math to over 40 high-school students. Organized meetings prior to exams. ―"
        />
      </div>
    </section>
  );
};

export default Experience;
