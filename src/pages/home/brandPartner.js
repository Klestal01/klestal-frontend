import partner1 from '../../images/partners/1.png';
import partner2 from '../../images/partners/2.png';
import partner3 from '../../images/partners/3.png';
import partner4 from '../../images/partners/4.png';
import partner5 from '../../images/partners/5.png';

const BrandAndPartner = () => {
  return (
    <div className="bg-[#161726] mt-[20px] py-[50px]">
      <p className="text-white flex justify-center text-xl md:text-4xl  font-bold">
        Backers {'&'} Partners
      </p>
      <div className="flex sm:flex-row flex-col gap-12 my-[45px] justify-center items-center ">
        <div className="flex gap-12 w-full justify-center sm:w-[60%] sm:justify-end">
          <img
            alt="no"
            src={partner1}
            className="w-[20vw] sm:w-[10vw] h-[6vh]"
          />
          <img
            alt="no"
            src={partner2}
            className="w-[20vw] sm:w-[10vw] h-[6vh]"
          />
          <img
            alt="no"
            src={partner3}
            className="w-[20vw] sm:w-[10vw] h-[6vh]"
          />
        </div>
        <div className="flex gap-12 justify-center w-full sm:w-[40%] sm:justify-start">
          <img
            alt="no"
            src={partner4}
            className="w-[20vw] sm:w-[10vw] h-[6vh]"
          />
          <img
            alt="no"
            src={partner5}
            className="w-[20vw] sm:w-[10vw] h-[6vh]"
          />
        </div>
      </div>
    </div>
  );
};
export default BrandAndPartner;
