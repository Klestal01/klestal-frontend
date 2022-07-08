const Hero = () => {
  return (
    <div className="">
      <img
        className="h-[673px] left-0 z-0 w-full object-contain"
        src="./images/hero-bg,png"
        alt="background"
        draggable={false}
      />
      <div className="z-1  absolute top-[20vh]  pl-[12vw] w-[55vw] text-white">
        <h1 className="text-6xl font-sans font-bold ">
          The Foremost interactive Metaverse Launchpad
        </h1>
        <p className="opacity-50 mt-10">
          Klestal is an IDO compatible, fully decentralized and interactive
          platform for cherry-picked projects in the metaverse.
        </p>
        <div className="flex gap-5 mt-7 text-xl">
          <button
            type="button"
            className="bg-gradient-to-r from-orange to-red rounded-3xl px-10 py-2"
          >
            Explore
          </button>
          <button
            type="button"
            className="border-2 px-7 py-2 rounded-3xl border-red"
          >
            Apply IDO
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
