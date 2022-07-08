const TierSystem = () => {
  return (
    <div className="bg-[#161726] mt-[20px]">
      <p className="text-white text-3xl pt-[20px] font-bold flex justify-center">
        Tier System
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center p-[30px] lg:p-[90px] gap-10">
        <div className="bg-[#090A19] w-[250px] text-white rounded-md h-[220px] py-3 ">
          <div>
            <div className="flex flex-col justify-center w-fit m-auto gap-2">
              <p className="text-center text-xs">Tier 1</p>
              <p className="text-center text-lg">Bronze</p>
            </div>

            <div
              className={`bg-gradient-to-r from-orange to-red h-[3px] mt-[20px] w-[100%]`}
            />
            <div className="p-2 flex  justify-center gap-3">
              <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
                <p className="text-sm opacity-70">Requirement</p>
                <p className="text-xl">5,000</p>
              </div>
              <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
                <p className="text-sm opacity-70">Pool Weight</p>
                <p className="text-xl">2</p>
              </div>
            </div>
            <div className="flex justify-center text-sm opacity-80 py-[10px]">
              Guaranted IDO Allocation
            </div>
          </div>
        </div>
        <div className="bg-[#090A19] w-[250px] text-white rounded-md h-[220px] py-3 ">
          <div>
            <div className="flex flex-col justify-center w-fit m-auto gap-2">
              <p className="text-center text-xs">Tier 2</p>
              <p className="text-center text-lg">Silver</p>
            </div>

            <div
              className={`bg-gradient-to-r from-[#A582FA] to-[#70CEFF] h-[3px] mt-[20px] w-[100%]`}
            />
            <div className="p-2 flex  justify-center gap-3">
              <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
                <p className="text-sm opacity-70">Requirement</p>
                <p className="text-xl">1,5000</p>
              </div>
              <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
                <p className="text-sm opacity-70">Pool Weight</p>
                <p className="text-xl">10</p>
              </div>
            </div>
            <div className="flex justify-center text-sm opacity-80 py-[10px]">
              Guaranted IDO Allocation
            </div>
          </div>
        </div>

        <div className="bg-[#090A19] w-[250px] text-white rounded-md h-[220px] py-3 ">
          <div>
            <div className="flex flex-col justify-center w-fit m-auto gap-2">
              <p className="text-center text-xs">Tier 3</p>
              <p className="text-center text-lg">Gold</p>
            </div>

            <div
              className={`bg-gradient-to-r from-[#FC8F32] to-[#FDC800] h-[3px] mt-[20px] w-[100%]`}
            />
          </div>

          <div className="p-2 flex  justify-center gap-3">
            <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
              <p className="text-sm opacity-70">Requirement</p>
              <p className="text-xl">25,000</p>
            </div>
            <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
              <p className="text-sm opacity-70">Pool Weight</p>
              <p className="text-xl">20</p>
            </div>
          </div>
          <div className="flex justify-center text-sm opacity-80 py-[10px]">
            Guaranted IDO Allocation
          </div>
        </div>

        <div className="bg-[#090A19] w-[250px] text-white rounded-md h-[220px] py-3 ">
          <div>
            <div className="flex flex-col justify-center w-fit m-auto gap-2">
              <p className="text-center text-xs">Tier 4</p>
              <p className="text-center text-lg">Platinum</p>
            </div>

            <div
              className={`bg-gradient-to-r from-[#FB13F2] to-[#C359F7] h-[3px] mt-[20px] w-[100%]`}
            />
            <div className="p-2 flex  justify-center gap-3">
              <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
                <p className="text-sm opacity-70">Requirement</p>
                <p className="text-xl">50,000</p>
              </div>
              <div className="border border-[#34364B] rounded-md p-[5px] flex flex-col gap-2 w-full">
                <p className="text-sm opacity-70">Pool Weight</p>
                <p className="text-xl">50</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-sm opacity-80 py-[10px]">
            Guaranted IDO Allocation
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierSystem;
