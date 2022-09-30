const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex min-h-[90vh] items-center justify-center bg-stone-300 px-[6vmin]"
    >
      {/* <h1 className="active text-scroll absolute mb-[12vmin] whitespace-nowrap px-8 text-center font-flex text-[16vmin] lowercase leading-[15vmin]">
        a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k
      </h1>
      <h1 className="active text-late-scroll absolute mb-[12vmin] whitespace-nowrap px-8 text-center font-flex text-[16vmin] lowercase leading-[15vmin]">
        a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k a⋆k
      </h1> */}
      {/* <h1 className="font-flex text-[30vmin] leading-[40vmin] text-pepper">
        ⋆
      </h1> */}
      <p className="mt-[16vmin] text-center font-rox text-[11vmin] lowercase">
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
