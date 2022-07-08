import Card from '../../shared/components/card';
import { v4 } from 'uuid';
import { cardData } from '../../shared/mockData';

const CompletedPool = () => {
  return (
    <div className="z-1 relative pt-[20px] scrollbar-hide text-white">
      <div className="flex flex-row justify-around items-center">
        <p className="text-lg lg:text-2xl  font-bold">Completed Pool</p>
        <div className="flex flex-row gap-4">
          <button className="bg-red lg:h-[50px] w-[30px] h-[30px] lg:w-[50px] rounded-md lg:rounded-lg">
            <img src="./images/svgs/arrowRight.svg" className="w-[50px]" />
          </button>
          <button className="bg-red lg:h-[50px] w-[30px] h-[30px] lg:w-[50px] rounded-md lg:rounded-lg">
            <img src="./images/svgs/arrowLeft.svg" className="w-[50px]" />
          </button>
        </div>
      </div>
      <div className="py-10 px-10 grid grid-flow-col auto-cols-max overflow-auto scrollbar-hide gap-6">
        {cardData.map((i) => (
          <Card
            id={i.id}
            key={v4()}
            headerImage={i.headerImage}
            logo={i.logo}
            ProjectName={i.ProjectName}
            PlaceHolder={i.PlaceHolder}
            description={i.description}
            totalRaise={i.totalRaise}
            start={i.start}
            prize={i.prize}
            percentage={i.percentage}
          />
        ))}
      </div>
      <div className="flex w-full justify-center">
        <button className="border border-[#42445F] rounded-full w-[186px] h-[50px] ">
          View More
        </button>
      </div>
    </div>
  );
};

export default CompletedPool;
