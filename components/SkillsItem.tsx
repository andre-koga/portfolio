import Link from "next/link";

let tiers = ["novice", "proficient", "expert"];
let colors = [
  "bg-yellow-400 text-stone-800",
  "bg-orange-400 text-stone-800",
  "bg-red-600",
];
type Props = { skill: any };

const SkillsItem = ({ skill }: Props) => {
  return (
    <Link href={"/skill/" + skill.slug.current} className="p-8">
      <a
        data-aos="fade-up"
        className="hover-pepper flex border-b-2 border-stone-800"
      >
        <div className="flex-grow border-r-2 border-stone-800 p-[3vmin]">
          <h3 className="active mb-[2vmin] font-flex text-[5vmin]">
            {skill.title}
          </h3>
          <div className="mb-[2vmin] flex flex-wrap gap-2">
            {skill.items.map((item: any, j: number) => {
              return (
                <p
                  key={j}
                  className={
                    "m-0 flex items-center whitespace-nowrap rounded-lg bg-stone-800 px-2 py-0.5 font-jet text-[3vmin] text-stone-100 transition-all " +
                    "order-" +
                    (4 - item.level)
                  }
                >
                  {item.title}
                  <span
                    className={
                      "ml-2 rounded px-1 text-[2vmin] font-bold uppercase " +
                      colors[item.level - 1]
                    }
                  >
                    {tiers[item.level - 1]}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <p className="arrow ml-auto self-center px-[3vmin] text-[12vmin] leading-[0em] text-stone-800 transition-all">
          ⤷
        </p>
      </a>
    </Link>
  );
};

export default SkillsItem;
