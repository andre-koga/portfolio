const Panel1 = () => {
  return (
    <div
      id="home"
      className="panel-1 grid h-screen w-screen select-none items-center justify-center gap-4"
    >
      <h1 className="font-cairo flex flex-col text-center text-[5rem] leading-[0.8] md:block md:flex-row lg:text-[10rem]">
        <span className="font-roxborough">andré</span>{" "}
        <span className="font-space tracking-[-0.04em]">
          <span className="tracking-[-0.12em]">k</span>oga
        </span>
      </h1>
      <h2 className="middle text-center font-jet text-sm font-medium uppercase md:text-base">
        software developer. loves to make new stuff. fast learner. always up to
        new challenges.
      </h2>
      <h2 className="left text-center font-jet text-sm font-medium uppercase md:text-base">
        From Brazil. Shaped by
        <br />
        the Japanese culture.
      </h2>
      <h2 className="right text-center font-jet text-sm font-medium uppercase md:text-base">
        Lives in Atlanta, US.
        <br />
        Wants to travel the world.
      </h2>
      <div className="cube mx-auto grid gap-2">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Panel1;
