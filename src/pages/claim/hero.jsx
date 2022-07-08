import { useState } from 'react';
const ClaimHero = () => {
  const [dropdown, setDropdown] = useState(false);
  const [network, setNetwork] = useState('Binance');
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="relative">
      <img
        className="h-[30vh] sm:h-[40vh] left-0 z-0 w-full object-cover sm:object-fill opacity-50 md:hidden block"
        src="./images/claimHeader.png"
        alt="background"
        draggable={false}
      />
      <div className="md:bg-[#150015] text-white md:p-[4rem] md:static absolute top-4 px-[10px] flex flex-col justify-items-center w-full">
        <h1 className="w-full text-center text-xl sm:text-3xl md:text-4xl font-bold">
          Claim Your Tokens
        </h1>
        <h3 className="text-center w-full pt-[2rem] mb-[1rem]">
          The allocation is here connect your wallet to claim your tokens.
        </h3>
      </div>

      <div className=" md:absolute md:top-[200px] md:left-[30vw] flex flex-row w-full md:w-[40%] p-[10px] md:rounded-lg m-auto justify-center bg-[#16182D]">
        <div
          className="relative cursor-pointer flex flex-row w-full m-auto items-center  p-3"
          onClick={() => toggleDropdown()}
        >
          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <p className="text-sm opacity-60">Select Network</p>
              <p>{network}</p>
            </div>
            <div className="">
              <svg
                className="w-4 h-4 ml-2"
                fill="#6B6D84"
                stroke={'#6B6D84'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <ul
            className={`z-10 top-[4.75rem] left-0 absolute text-whit divide-y divide-slate-600 shadow w-full p-3 bg-[#16182D] rounded-lg ${
              dropdown ? 'block' : 'hidden'
            }`}
          >
            <li
              className="py-2 mx-2.5 e opacity-60 w-full"
              onClick={() => setNetwork('Binance')}
            >
              Binance
            </li>
            <li
              className="py-2 mx-2.5 e opacity-60 w-full"
              onClick={() => setNetwork('Etheruem')}
            >
              Etheruem
            </li>
            <li
              className="py-2  mx-2.5  opacity-60 w-full"
              onClick={() => setNetwork('Bitcoin')}
            >
              Bitcoin
            </li>
            <li
              className="py-2  mx-2.5 opacity-60 w-full"
              onClick={() => setNetwork('pan di shiki')}
            >
              Pan di shiki
            </li>
            <li
              className="py-2  mx-2.5  opacity-60 w-full"
              onClick={() => setNetwork('Polygon')}
            >
              Polygon
            </li>
          </ul>
        </div>
        <div className="md:flex  gap-4 justify-center w-full items-center m-auto hidden ">
          <button
            type="button"
            className="bg-gradient-to-r from-orange to-red rounded-3xl w-[130px] h-[47px]  "
          >
            Explore
          </button>
          <button
            type="button"
            className="border-2 rounded-3xl border-red w-[130px] h-[47px]"
          >
            Apply IDO
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-4 pt-[20px] justify-center w-full items-center  m-auto md:hidden ">
        <button
          type="button"
          className="bg-gradient-to-r from-orange to-red rounded-3xl w-[30vw] h-[5vh] mx-[4px] "
        >
          Monthly
        </button>
        <button
          type="button"
          className="border-2 rounded-3xl border-red w-[30vw] h-[5vh]"
        >
          Linear
        </button>
      </div>
    </div>
  );
};

export default ClaimHero;
