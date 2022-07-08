import { useState } from 'react';

const ClaimHero = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div>
      <div className="bg-[#150015] text-white p-[4rem]">
        <h1 className="w-full text-center text-4xl font-bold">
          Claim Your Tokens
        </h1>
        <h3 className="text-center pt-[2rem]">
          The allocation is here connect your wallet to claim your tokens.
        </h3>
      </div>

      <div className="relative flex flex-row w-[30%] p-[10px] rounded-lg m-auto justify-center bg-[#16182D]">
        <div
          className="cursor-pointer flex flex-row w-full m-auto items-center  p-3"
          onClick={() => toggleDropdown()}
        >
          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <p className="text-sm opacity-60">Select Netword</p>
              <p>Binance</p>
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

          <div
            className={`z-10 top-15 left-5 absolute text-white divide-y divide-gray-100 rounded shadow w-44 ${
              dropdown ? 'block' : 'hidden'
            }`}
          >
            hello
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center w-full items-center m-auto">
          <button
            type="button"
            className="bg-gradient-to-r from-orange to-red rounded-3xl "
          >
            Explore
          </button>
          <button type="button" className="border-2 rounded-3xl border-red">
            Apply IDO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimHero;
