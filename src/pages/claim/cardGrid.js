import ClaimCard from './claimCard';
import { v4 } from 'uuid';
import { cardData } from '../../shared/mockData';

const CardGrid = () => {
  return (
    <div className="flex flex-col gap-4 py-[20px]">
      {cardData.map((i) => {
        return (
          <ClaimCard
            logo={i.logo}
            projectName={i.ProjectName}
            PlaceHolder={i.PlaceHolder}
            allocationPrize={i.allocationPrize}
            ClaimDate={i.ClaimDate}
            key={v4()}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
