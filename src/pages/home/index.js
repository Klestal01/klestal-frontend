import BrandAndPartner from './brandPartner';
import CompletedPool from './completedPool';
import Hero from './hero';
import TierSystem from './tierSystem';
import UpcomingPool from './upcomingPool';
const Home = () => {
  return (
    <div className="w-full ">
      <Hero />
      <UpcomingPool />
      <CompletedPool />
      <TierSystem />
      <BrandAndPartner />
    </div>
  );
};

export default Home;
