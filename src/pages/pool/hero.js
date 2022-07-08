import { useState } from 'react';
import CompletedPool from './completedPool';
import UpcomingPool from './upcomingPool';

const HeroPool = () => {
  const [active, setActive] = useState('upcoming');

  return (
    <div className="text-white">
      <img
        className="h-[347px] left-0 z-0 w-full object-contain opacity-50"
        src="./images/poolHeader.png"
        alt="background"
        draggable={false}
      />
      <div className="absolute top-[20vh] left-[42vw]  ">
        <p className="text-5xl text-center font-bold">Pool</p>
        <p className="text-center mt-[20px] text-sm">
          Invest Early on Potential Projects
        </p>
      </div>
      <div className="bg-[#16182D] rounded-md relative -top-[50px] left-[28vw] flex w-fit px-[100px] py-[20px] gap-4 justify-center ">
        <div>
          <button
            type="button"
            onClick={() => {
              setActive('upcoming');
            }}
            className={`rounded-3xl px-[5vw] py-2   ${
              active === 'upcoming'
                ? `bg-gradient-to-r from-orange to-red`
                : `border-[2px]  border-red`
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
            className={`px-[5vw] py-2 rounded-3xl   ${
              active === 'completed'
                ? `bg-gradient-to-r from-orange to-red`
                : `border-[2px]  border-red`
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
