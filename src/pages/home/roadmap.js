import { useState } from 'react';

const Roadmap = () => {
  const [year, setYear] = useState('2022');
  return (
    <div className="mt-[40px] w-[80%] m-auto">
      <div className="flex flex-row justify-between items-center">
        <p className="text-2xl font-semibold">Our Roadmap</p>
        <div className="flex flex-row gap-4">
          <button
            className={`w-[100px] rounded-full py-[10px]  border-[2px] border-[#FC5965] cursor-pointer ${
              year === '2022' ? `bg-[#FC5965]` : ``
            }`}
            onClick={() => setYear('2022')}
          >
            2022
          </button>
          <button
            className={`w-[100px] rounded-full py-[10px]  border-[2px] border-[#FC5965] cursor-pointer ${
              year === '2023' ? `bg-[#FC5965]` : ``
            }`}
            onClick={() => setYear('2023')}
          >
            2023
          </button>
          <button
            className={`w-[100px] rounded-full py-[10px]  border-[2px] border-[#FC5965] cursor-pointer ${
              year === '2024' ? `bg-[#FC5965]` : ``
            }`}
            onClick={() => setYear('2024')}
          >
            2024
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
