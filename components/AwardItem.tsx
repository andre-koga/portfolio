let levels = ["gold", "slvr", "brnz", "honr", "1st", "2nd", "3rd"];
let levelsColors = [
  "bg-amber-400 text-stone-800",
  "bg-slate-300 text-stone-800",
  "bg-yellow-600 text-stone-800",
  "bg-indigo-300 text-stone-800",
  "bg-amber-400 text-stone-800",
  "bg-slate-300 text-stone-800",
  "bg-yellow-600 text-stone-800",
];
let subjects = ["Math", "Phys", "Comp", "Astr", "Robo", "Chem"];
let subjectsColors = [
  "bg-red-600 text-stone-100",
  "bg-indigo-500 text-stone-100",
  "bg-cyan-600 text-stone-100",
  "bg-blue-700 text-stone-100",
  "bg-slate-600 text-stone-100",
  "bg-emerald-600 text-stone-100",
];
let regions = ["intl", "natl", "rgnl"];
let regionsColors = [
  "bg-black text-cyan-400",
  "bg-black text-green-400",
  "bg-black text-orange-400",
];
let orders = ["order-1", "order-2", "order-3"];
type Props = { award: any; i: number };

const SkillsItem = ({ award, i }: Props) => {
  return (
    <div
      data-aos="fade-up"
      className="flex-grow border-r-2 border-b-2 border-stone-100 p-[3vmin]"
    >
      <h3 className="active mb-[2vmin] font-flex text-[5vmin] text-stone-100">
        {award.title}
      </h3>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {award.items.map((item: any, j: number) => {
          return (
            <div key={j} className={"md:flex" + orders[item.region - 1]}>
              <p className="m-0 flex items-center gap-2 whitespace-nowrap rounded-lg bg-stone-800 px-2 py-0.5 font-jet text-[2.5vmin] text-stone-100 transition-all">
                <span
                  className={
                    "rounded px-1 text-sm font-bold uppercase " +
                    regionsColors[item.region - 1]
                  }
                >
                  {regions[item.region - 1]}
                </span>
                <span
                  className={
                    "rounded px-1 text-sm font-bold uppercase " +
                    levelsColors[item.level - 1]
                  }
                >
                  {levels[item.level - 1]}
                </span>
                <span
                  className={
                    "rounded px-1 text-sm font-bold uppercase " +
                    subjectsColors[item.subject - 1]
                  }
                >
                  {subjects[item.subject - 1]}
                </span>
              </p>
              <p className="mt-1 mb-2 items-center gap-2 whitespace-nowrap rounded-lg bg-stone-800 px-2 py-0.5 font-jet text-[3.5vmin] text-stone-100 transition-all">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsItem;
