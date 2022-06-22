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
      <BrandAndPartner />
      <TierSystem />
    </div>
  );
};

export default Home;
