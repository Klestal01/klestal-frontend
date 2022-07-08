import { useState } from 'react';

const Roadmap = () => {
  const [year, setYear] = useState('2022');
  return (
    <>
      <div className="mt-[40px] w-[80%] m-auto">
        <div className="flex flex-col lg:flex-row  lg:justify-between items-center">
          <p className="text-2xl font-semibold">Our Roadmap</p>
          <div className="flex flex-row gap-8 mt-[20px]">
            <button
              className={`w-[20vw] lg:w-[100px] rounded-full py-[10px]  border-[2px] border-[#FC5965] cursor-pointer ${
                year === '2022' ? `bg-[#FC5965]` : ``
              }`}
              onClick={() => setYear('2022')}
            >
              2022
            </button>
            <button
              className={`w-[20vw] lg:w-[100px] rounded-full py-[10px]  border-[2px] border-[#FC5965] cursor-pointer ${
                year === '2023' ? `bg-[#FC5965]` : ``
              }`}
              onClick={() => setYear('2023')}
            >
              2023
            </button>
            <button
              className={`w-[20vw] lg:w-[100px] rounded-full py-[10px]  border-[2px] border-[#FC5965] cursor-pointer ${
                year === '2024' ? `bg-[#FC5965]` : ``
              }`}
              onClick={() => setYear('2024')}
            >
              2024
            </button>
          </div>
        </div>
      </div>
      <section className="w-[80%] lg:w-[90%] m-auto lg:ml-[10vw]">
        <div className="flex flex-col lg:flex-row w-full  justify-start mt-[10vh] ">
          <div className="border-l border-slate-800 px-[10px] py-[20px] flex flex-col w-full gap-3 text-sm relative mb-[80px]">
            <p className="absolute text-sm -top-16 -left-4 lg:border-b-[1px] lg:border-dashed w-full lg:pb-[20px]">
              {' '}
              Q1 2022
            </p>
            <p className="flex gap-3">
              <p className="text-[#DA3AF5]">&#10003;</p> Website {'&'} Socials
            </p>
            <p className="flex gap-3">
              <p className="text-[#DA3AF5]">&#10003;</p> Independent Audits
            </p>
            <p className="flex gap-3">
              <p className="text-[#DA3AF5]">&#10003;</p> Business Conception
            </p>
            <p className="flex gap-3">
              <p className="text-[#DA3AF5]">&#10003;</p> Smart Contract Creation
            </p>
            <p className="flex gap-3">
              <p className="text-[#DA3AF5]">&#10003;</p> Dashboard Development
            </p>
            <span className="bg-[#DA3AF5] absolute rounded-full w-[30px] h-[30px] -top-9 -left-4">
              <p className="flex justify-center text-xl">&#10003;</p>
            </span>
          </div>

          <div className="border-l border-slate-800 px-[10px] py-[20px] flex flex-col w-full gap-3 text-sm relative mb-[80px]">
            <p className="absolute text-sm -top-16 -left-4 lg:border-b-[1px] lg:border-dashed w-full lg:pb-[20px]">
              Q2 2022
            </p>
            <p className="flex gap-3">
              <p className="text-[#DA3AF5]">&#10003;</p> ICO {'&'} Token Design
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Demo
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Presale {'&'} Token Sale
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Smart Contract Creation
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Dashboard Development
            </p>
            <span className="bg-slate-300 absolute rounded-full w-[30px] h-[30px] -top-9 -left-4" />
          </div>

          <div className="border-l border-slate-800 px-[10px] py-[20px] flex flex-col w-full gap-3 text-sm relative mb-[80px]">
            <p className="absolute text-sm -top-16 -left-4 lg:border-b-[1px] lg:border-dashed w-full lg:pb-[20px]">
              Q3 2022
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> App Beta Test
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Concept Generation
            </p>

            <p className="flex gap-3">
              <p className="">&#10003;</p> Research New Method
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Lorem Ipsum Dolor
            </p>
            <span className="bg-slate-300 absolute rounded-full w-[30px] h-[30px] -top-9 -left-4" />
          </div>

          <div className="border-l border-slate-800 px-[10px] py-[20px] flex flex-col w-full gap-3 text-sm relative mb-[80px]">
            <p className="absolute text-sm -top-16 -left-4  w-full lg:pb-[20px]">
              Q4 2022
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Integer Eleifend Mollis
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Luctus Leo Suscipit
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Donec Facilisis
            </p>
            <p className="flex gap-3">
              <p className="">&#10003;</p> Maecenas Suscipit
            </p>
            <span className="bg-slate-300 absolute rounded-full w-[30px] h-[30px] -top-9 -left-4" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
