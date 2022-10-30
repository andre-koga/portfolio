const Footer = () => {
  return (
    <footer>
      <div className="bg-stone-200 pt-8 pb-14">
        <p className="active text-center font-flex text-[12vmin]">Links</p>
        <ul className="flex place-content-center gap-4">
          <li className="rounded-lg bg-pepper px-2 py-0.5">
            <a target="blank" href="https://koga.one">
              <p className="active text-center font-flex text-2xl text-white underline">
                homepage
              </p>
            </a>
          </li>
          <li className="rounded-lg bg-[#0A66C2] px-2 py-0.5">
            <a target="blank" href="https://www.linkedin.com/in/andrehkoga/">
              <p className="active text-center font-flex text-2xl text-white underline">
                linkedin
              </p>
            </a>
          </li>
          <li className="rounded-lg bg-[#22272E] px-2 py-0.5">
            <a target="blank" href="https://github.com/koga-one">
              <p className="active text-center font-flex text-2xl text-white underline">
                github
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-black py-2">
        <p className="text-center font-jet text-xs uppercase text-white">
          <span className="opacity-20">103029102022</span> - created with ❤️ by
          Koga - <span className="opacity-20">103029102022</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
