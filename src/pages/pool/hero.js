import { useState } from 'react';
import CompletedPool from './completedPool';
import UpcomingPool from './upcomingPool';

const HeroPool = () => {
  const [active, setActive] = useState('upcoming');

  return (
    <div className="text-white">
      <img
        className="sm:h-[50vh] h-[40vh] left-0 z-0 w-full object-cover  opacity-50"
        src="./images/poolHeader.png"
        alt="background"
        draggable={false}
      />
      <div className="absolute top-[20vh] flex flex-col justify-center w-full ">
        <p className="text-5xl text-center font-bold">Pool</p>
        <p className="text-center mt-[20px] text-sm">
          Invest Early on Potential Projects
        </p>
      </div>
      <div className="bg-[#16182D] flex w-full lg:w-[40%] gap-4 m-auto justify-center  lg:rounded-md lg:relative  lg:-top-[45px]  lg:px-[50px] py-[20px]">
        <div>
          <button
            type="button"
            onClick={() => {
              setActive('upcoming');
            }}
            className={`rounded-3xl px-[7vw] md:px-[5vw] py-2  border-[2px] border-red  ${
              active === 'upcoming' && `bg-gradient-to-r from-orange to-red`
            }`}
          >
            Upcoming
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setActive('completed');
            }}
            className={`px-[7vw] md:px-[5vw] py-2 rounded-3xl border-[2px]  border-red   ${
              active === 'completed' && `bg-gradient-to-r from-orange to-red`
            }`}
          >
            Completed
          </button>
        </div>
      </div>
      {active === 'upcoming' && <UpcomingPool />}
      {active === 'completed' && <CompletedPool />}
    </div>
  );
};
export default HeroPool;
