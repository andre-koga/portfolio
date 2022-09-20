const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex min-h-[90vh] flex-col items-center justify-center bg-stone-300 px-[4vmin] py-[8vmin]"
    >
      <p className="text-center font-rox text-[12vmin] lowercase">
        <img
          className="mx-[4vmin] mb-[2vmin] -mt-[2vmin] inline-block h-[12vmin]"
          src="/images/me.jpg"
          alt=""
        />
        <span>Web-designer ― full-stack developer ― digital artist.</span>
        <img
          className="mx-[4vmin] mb-[2vmin] -mt-[2vmin] inline-block h-[12vmin]"
          src="/images/light.png"
          alt=""
        />
        <span>Strives to do his best in any task.</span>
        <img
          className="mx-[4vmin] mb-[2vmin] -mt-[2vmin] inline-block h-[12vmin]"
          src="/images/atlanta.jpg"
          alt=""
        />
        Based in Atlanta ― São Paulo.
        <img
          className="mx-[4vmin] mb-[2vmin] -mt-[2vmin] inline-block h-[12vmin]"
          src="/images/paulista.jpg"
          alt=""
        />
      </p>
    </section>
  );
};

export default Introduction;
