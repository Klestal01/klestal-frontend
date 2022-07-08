import Card from '../../shared/components/card';
import { v4 } from 'uuid';
import { cardData } from '../../shared/mockData';

const UpcomingPool = () => {
  const cardData = [
    {
      headerImage: './card1Head.png',
      logo: './fara.png',
      ProjectName: 'Project Name',
      PlaceHolder: 'Place Holder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas blandit libero.',
      totalRaise: '100',
      start: 'April 7, 11:00 UTC',
      prize: '1 $PLACEHOLDER = 0.01 BUSD',
      percentage: '80',
    },
    {
      headerImage: './header2.png',
      logo: './images.png',
      ProjectName: 'Project Name',
      PlaceHolder: 'Place Holder',
      description: 'lorem ispum',
      totalRaise: '100',
      start: '100',
      prize: '100',
      percentage: '90',
    },
    {
      headerImage: './header3.png',
      logo: './logo1.png',
      ProjectName: 'Project Name',
      PlaceHolder: 'Place Holder',
      description: 'lorem ispum',
      totalRaise: '100',
      start: '100',
      prize: '100',
      percentage: '70',
    },
    {
      headerImage: './header2.png',
      logo: './images.png',
      ProjectName: 'Project Name',
      PlaceHolder: 'Place Holder',
      description: 'lorem ispum',
      totalRaise: '100',
      start: '100',
      prize: '100',
      percentage: '90',
    },
    {
      headerImage: './card1Head.png',
      logo: './fara.png',
      ProjectName: 'Project Name',
      PlaceHolder: 'Place Holder',
      description: 'lorem ispum',
      totalRaise: '100',
      start: '100',
      prize: '100',
      percentage: '80',
    },
  ];
  return (
    <div className="z-1 relative pt-[20px] scrollbar-hide text-white">
      <div className="flex flex-row justify-around">
        <p className="text-2xl  font-bold">Upcoming Pool</p>
        <div className="flex flex-row gap-4">
          <button className="bg-red h-[50px] w-[50px] rounded-lg">
            <img src="./images/svgs/arrowRight.svg" className="w-[50px]" />
          </button>
          <button className="bg-red h-[50px] w-[50px] rounded-lg">
            <img src="./images/svgs/arrowLeft.svg" className="w-[50px]" />
          </button>
        </div>
      </div>
      <div className="py-10 ml-[9vw] px-10 grid grid-flow-col auto-cols-max overflow-auto scrollbar-hide gap-6">
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

export default UpcomingPool;
