import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [2, 17, 17, 22, 10, 12, 4, 16],
      backgroundColor: [
        '#FC3A0B',
        '#FC13F2',
        '#BC63F8',
        '#70CEFF',
        '#ED2398',
        '#FDC800',
        '#FD9929',
        '#FC6954',
      ],
      borderColor: [
        '#FC3A0B',
        '#FC13F2',
        '#BC63F8',
        '#70CEFF',
        '#ED2398',
        '#FDC800',
        '#FD9929',
        '#FC6954',
      ],
      borderWidth: 1,
      cutout: '85%',
      'animation.animateRotate': false,
    },
  ],
};
const TokenMatrics = () => {
  return (
    <>
      <div className=" flex flex-col justify-center">
        <h1 className="text-3xl font-semibold flex justify-center p-[20px] pt-[5vh]">
          Token Metrics
        </h1>

        <div className="flex  flex-col md:flex-row m-auto justify-center">
          <div className="w-full  justify-center flex md:justify-end ">
            <div className="w-[50%] md:w-[420px] md:pr-[30px] flex justify-center ">
              <Doughnut data={data} />
            </div>
          </div>
          <div className="flex flex-col w-full  md:w-[45vw] px-[10px] pt-[5vh]">
            <h1 className="text-xl  font-bold ">Allocation of Funds</h1>
            <p className="text-sm opacity-60">
              Total Token Supply: 1,000,000,000 $KLESTEL
            </p>
            <div className="flex flex-col gap-3  overflow-auto">
              <div className="flex flex-row gap-2 pt-[30px] items-center">
                <span className="bg-[#FC3A0B] w-[13vw] md:w-[70px] h-[10px] " />
                <p className="text-xs opacity-50">2% Private Sale</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-[#FC13F2] w-[58vw] md:w-[316px] h-[10px] " />
                <p className="text-xs opacity-50 w-fit">17% Private Sale</p>
              </div>{' '}
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-[#BC63F8] w-[58vw] md:w-[316px] h-[10px] " />
                <p className="text-xs opacity-50 w-fit">17% Private Sale</p>
              </div>{' '}
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-[#70CEFF] w-[70vw] md:w-[416px] h-[10px] " />
                <p className="text-xs opacity-50 w-fit">22% Private Sale</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-[#ED2398] w-[29vw] md:w-[165px] h-[10px] " />
                <p className="text-xs opacity-50 w-fit">10% Private Sale</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-[#FDC800] w-[35vw] md:w-[188px] h-[10px] " />
                <p className="text-xs opacity-50 w-fit">12% Private Sale</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-[#FD9929] w-[20vw] md:w-[97px] h-[10px] " />
                <p className="text-xs opacity-50 w-fit">4% Private Sale</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-[#FC6954] w-[45vw] md:w-[299px] h-[10px] " />
                <p className="text-xs opacity-50">16% Private Sale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenMatrics;
