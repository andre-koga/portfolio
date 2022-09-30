const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex min-h-[90vh] flex-col items-center justify-center bg-stone-300 px-[6vmin]"
    >
      <h1 className="chars mt-[16vh] mb-[16vh] font-flex text-[12vw]">
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span>r</span>
        <span>é</span>
        <span className="text-pepper">⋆</span>
        <span>k</span>
        <span>o</span>
        <span>g</span>
        <span>a</span>
      </h1>
      <p className="text-center font-rox text-[11vmin] lowercase">
        <img
          className="mx-[4vmin] mb-[2vmin] -mt-[2vmin] inline-block h-[16vmin] rotate-6 rounded-xl"
          src="/images/me.jpg"
          alt=""
        />
        <span>Web-designer, full-stack developer, digital artist</span>
        <img
          className="mx-[4vmin] mb-[2vmin] -mt-[2vmin] inline-block h-[16vmin] -rotate-2 rounded-xl"
          src="/images/light.png"
          alt=""
        />
        <span>Strives to do his best in any task ― Based in Atlanta</span>
        <img
          className="mx-[4vmin] mb-[2vmin] -mt-[2vmin] inline-block h-[16vmin] rotate-3 rounded-xl"
          src="/images/atlanta.jpg"
          alt=""
        />
      </p>
    </section>
  );
};

export default Introduction;
