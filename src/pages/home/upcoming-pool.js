import Card from '../../shared/components/card';
import { v4 } from 'uuid';

const UpcomingPool = () => {
  const cardData = [
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
    <div className="z-1 relative text-white">
      <div className="flex flex-row justify-around">
        <p className="text-xl font-bold">Upcoming Pool</p>
        <div className="flex flex-row gap-2">
          <button className="bg-red h-[40px] w-[40px] rounded-lg"></button>
          <button className="bg-red h-[40px] w-[40px] rounded-lg"> </button>
        </div>
      </div>
      <div className="py-10 px-10 grid grid-flow-col auto-cols-max overflow-auto gap-6">
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
        {/* <Card
          headerImage={cardData.headerImage}
          logo={cardData.logo}
          ProjectName={cardData.ProjectName}
          PlaceHolder={cardData.PlaceHolder}
          description={cardData.description}
          totalRaise={cardData.totalRaise}
          start={cardData.start}
          prize={cardData.prize}
          percentage={cardData.percentage}
        /> */}
      </div>
    </div>
  );
};
export default UpcomingPool;
