import herobg from "../../images/hero-bg.png"

const Hero = () => {
  return (
    <div className="">
      <img
        id="home-hero-img"
        className="z-0 w-full object-cover md:object-contain h-[400px] md:h-fit"
        src={herobg}
        alt="background"
        draggable={false}
      />
      <div className="z-1 relative md:absolute md:top-[20vh] px-[8vw] lg:pl-[12vw] w-full text-center lg:text-left lg:w-[55vw] text-white">
        <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-2xl xl:text-6xl  sm:px-0 font-sans font-bold -top-60 left-0 sm:top-20 sm:static absolute">
          The Foremost interactive Metaverse Launchpad
        </h1>
        <p className="text-lg opacity-50 sm:mt-10 md:mt-5 pt-8 sm:pt-0">
          Klestal is an IDO compatible, fully decentralized and interactive
          platform for cherry-picked projects in the metaverse.
        </p>
        <div className="flex md:flex-row flex-col lg:gap-5 gap-2 my-8 sm:mt-3 text-xl justify-center items-center lg:justify-start ">
          <button
            type="button"
            className="bg-gradient-to-r from-orange to-red rounded-3xl px-10 py-2 w-fit"
          >
            Explore
          </button>
          <button
            type="button"
            className="border-2 px-7 py-2 rounded-3xl border-red w-fit"
          >
            Apply IDO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
