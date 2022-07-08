import Card from '../../shared/components/card';
import { v4 } from 'uuid';
import { cardData } from '../../shared/mockData';

const CompletedPool = () => {
  return (
    <div>
      <div className="px-[10vw] py-[20px] grid grid-cols-3 gap-x-4 gap-y-10">
        {cardData.map((i) => (
          <Card
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
      <div className="flex w-full pb-[10vw] pt-[2vw] justify-center">
        <button className="border border-[#42445F] rounded-full w-[186px] h-[50px] ">
          View More
        </button>
      </div>
    </div>
  );
};

export default CompletedPool;
