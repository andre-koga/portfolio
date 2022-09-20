const LoadingScreen = () => {
  return (
    <div
      id="loading-screen"
      className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-stone-800 text-stone-100"
    >
      <p className="flex font-jet text-8xl">⋆</p>
      <p className="text-center font-flex text-2xl lowercase leading-[1em]">
        André
      </p>
      <p className="text-center font-flex text-2xl lowercase leading-[1em]">
        Koga
      </p>
    </div>
  );
};

export default LoadingScreen;
