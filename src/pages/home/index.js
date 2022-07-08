import BrandAndPartner from './brandPartner';
import CompletedPool from './completedPool';
import Hero from './hero';
import TierSystem from './tierSystem';
import TokenMetrics from './tokenMetrics';
import UpcomingPool from './upcomingPool';
const Home = () => {
  return (
    <div className="w-full ">
      <Hero />
      <UpcomingPool />
      <CompletedPool />
      <TierSystem />
      <TokenMetrics />
      <BrandAndPartner />
    </div>
  );
};

export default Home;
