import Link from "next/link";

let levels = ["gold", "slvr", "brnz", "1st", "2nd", "3rd"];
let levelsColors = [
  "bg-amber-400 text-stone-800",
  "bg-slate-300 text-stone-800",
  "bg-yellow-600 text-stone-800",
  "bg-amber-400 text-stone-800",
  "bg-slate-300 text-stone-800",
  "bg-yellow-600 text-stone-800",
];
let subjects = ["Math", "Phys", "prog"];
let subjectsColors = [
  "bg-red-600 text-stone-100",
  "bg-indigo-500 text-stone-100",
  "bg-cyan-600 text-stone-100",
];
let regions = ["intl", "natl", "rgnl"];
let regionsColors = [
  "bg-black text-cyan-400",
  "bg-black text-green-400",
  "bg-black text-orange-400",
];
let orders = ["order-1", "order-2", "order-3"];
type Props = { award: any };

const SkillsItem = ({ award }: Props) => {
  return (
    <Link href={"/award/" + award.slug.current} className="p-8">
      <a
        data-aos="fade-up"
        className="hover-pepper flex border-b-2 border-stone-800"
      >
        <div className="flex-grow border-r-2 border-stone-800 p-[3vmin]">
          <h3 className="active mb-[2vmin] font-flex text-[5vmin]">
            {award.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {award.items.map((item: any, j: number) => {
              return (
                <p
                  key={j}
                  className={
                    "m-0 flex items-center gap-2 whitespace-nowrap rounded-lg bg-stone-800 px-2 py-0.5 font-jet text-[2vmin] text-stone-100 transition-all " +
                    orders[item.region - 1]
                  }
                >
                  <span
                    className={
                      "rounded px-1 text-[1.5vmin] font-bold uppercase " +
                      regionsColors[item.region - 1]
                    }
                  >
                    {regions[item.region - 1]}
                  </span>
                  <span
                    className={
                      "rounded px-1 text-[1.5vmin] font-bold uppercase " +
                      levelsColors[item.level - 1]
                    }
                  >
                    {levels[item.level - 1]}
                  </span>
                  <span
                    className={
                      "rounded px-1 text-[1.5vmin] font-bold uppercase " +
                      subjectsColors[item.subject - 1]
                    }
                  >
                    {subjects[item.subject - 1]}
                  </span>
                  {item.title}
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
