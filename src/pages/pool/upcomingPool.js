import Card from '../../shared/components/card';
import { v4 } from 'uuid';
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
    <div>
      <div className="px-[10vw] md:py-[20px] grid grid-cols-2 md:grid-cols-3 md:gap-x-4 gap-y-10">
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

export default UpcomingPool;
