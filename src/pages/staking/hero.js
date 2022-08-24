import { useState } from 'react';
import Modal from '../../shared/components/modal';

const HeroStake = () => {
  const [modal, setModal] = useState(false);
  const [duration, setDuration] = useState('');

  const [connect, setConnect] = useState(true);
  return (
    <div className="mb-[9rem]">
      {modal ? (
        <Modal>
          <>
            <div className="bg-[#16182C] flex-col gap-4  w-[95vw] h-[77vh] sm:[150vh]   sm:w-[80vw]  md:h-[80%] max-w-xl 2xl:w-[50vw] 2xl:h-[50vh] text-white rounded-md flex p-[1rem] relative  justify-evenly sm:justify-around mt-[20px] m-[10px]">
              <h1 className="font-bold text-md sm:text-xl text-center">
                Stake
              </h1>
              <button
                onClick={() => setModal(false)}
                className="absolute -top-4 -right-3 bg-[#16182C] rounded-full border w-[34px] h-[34px] flex items-center justify-center border-slate-400"
              >
                &#128473;
              </button>

              <div className="h-[100px] sm:h-[15vh]  p-[10px] lg:p-[15px] w-full border-[#3F4269] border-[1px] bg-[#22243E] rounded-lg flex flex-row">
                <div className="w-fit sm:w-full flex flex-col gap-4 relative">
                  <p className="text-sm opacity-60 text-left">Amount</p>
                  <p className="text-md lg:text-xl font-semibold absolute left-0 bottom-0 ">
                    0
                  </p>
                </div>
                <div className="w-full flex flex-col gap-4 relative ">
                  <p className="text-sm opacity-60 text-right">
                    Available : 1,000 $KLS
                  </p>
                  <span className="bg-[#6B6D84] absolute right-0 bottom-0 w-fit px-[10px] py-[2px] lg:px-[25px] lg:py-[5px]  rounded-[4px] ">
                    Max
                  </span>
                </div>
              </div>

              <p className="font-sm opacity-60">Lock Duration</p>
              <div className="grid grid-cols-3 gap-4 w-full">
                <span
                  onClick={() => {
                    setDuration('7');
                  }}
                  className={`${
                    duration === '7' ? `bg-[#B36EF9]` : `bg-[#22243E]`
                  } text-center py-[3px] sm:py-[6px] cursor-pointer text-sm rounded-md`}
                >
                  7 Days
                </span>
                <span
                  onClick={() => {
                    setDuration('14');
                  }}
                  className={`${
                    duration === '14' ? `bg-[#B36EF9]` : `bg-[#22243E]`
                  } text-center py-[6px] cursor-pointer text-sm rounded-md`}
                >
                  14 Days
                </span>
                <span
                  onClick={() => {
                    setDuration('30');
                  }}
                  className={`${
                    duration === '30' ? `bg-[#B36EF9]` : `bg-[#22243E]`
                  } text-center py-[6px] cursor-pointer text-sm rounded-md`}
                >
                  30 Days
                </span>
                <span
                  onClick={() => {
                    setDuration('60');
                  }}
                  className={`${
                    duration === '60' ? `bg-[#B36EF9]` : `bg-[#22243E]`
                  } text-center py-[6px] cursor-pointer text-sm rounded-md`}
                >
                  60 Days
                </span>
                <span
                  onClick={() => {
                    setDuration('90');
                  }}
                  className={`${
                    duration === '90' ? `bg-[#B36EF9]` : `bg-[#22243E]`
                  } text-center py-[6px] cursor-pointer text-sm rounded-md`}
                >
                  90 Days
                </span>
                <span
                  onClick={() => {
                    setDuration('180');
                  }}
                  className={`${
                    duration === '180' ? `bg-[#B36EF9]` : `bg-[#22243E]`
                  } text-center py-[6px] cursor-pointer text-sm rounded-md`}
                >
                  180 Days
                </span>
              </div>
              <span className="flex flex-row mt-[20px] justify-around">
                <p className="font-semibold  w-full">APY Rate:</p>
                <p className="font-semibold w-full text-right">90%</p>
              </span>
              <button
                type="button"
                className="bg-gradient-to-r from-purple to-pink rounded-3xl px-7 py-2"
              >
                Stake
              </button>
            </div>
          </>
        </Modal>
      ) : null}
      <div className="w-full">
        <img
          className=" left-0 z-0 w-full h-[50vh] md:h-[522px] object-cover  opacity-40"
          src="./images/stakingHeader.png"
          alt="background"
          draggable={false}
        />
      </div>

      <div className="md:absolute top-[10rem] w-full flex flex-col justify-center ">
        <div className="absolute top-52 md:static h-[40vh] flex flex-col items-center w-full  gap-8">
          <h1 className="text-2xl sm:text-5xl font-bold text-white text-center">
            Staking Dashboard
          </h1>
          <h3 className="text-lg text-white text-center ">
            Stake or farm your $KLS to join upcoming IDOs.
          </h3>
        </div>
        <div className="flex   justify-center z-1 mx-[15vw] mt-[20px]  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 text-white ">
            <div className="bg-[#16182D]  w-full p-[20px] rounded-md flex flex-col justify-evenly ">
              <p className="text-lg">My $KLS Staking</p>
              <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mt-[5vh] justify-around sm:justify-evenly">
                <div className="flex flex-col gap-2">
                  <p className="text-sm opacity-60">Total Staked</p>
                  {connect == true ? (
                    <div>
                      <div className="flex gap-2 items-baseline">
                        <p className="text-3xl font-semibold ">0</p>
                        <p className="text-sm opacity-60">$KLS</p>
                      </div>
                      <p className="text-[#BCB7C3] mt-[5px]">$0.00</p>
                    </div>
                  ) : (
                    <p className=" text-3xl font-bold">- -</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm opacity-60">Available in Wallet</p>
                  {connect == true ? (
                    <div>
                      <div className="flex gap-2 items-baseline">
                        <p className="text-3xl font-semibold ">1000</p>
                        <p className="text-sm opacity-60">$KLS</p>
                      </div>
                      <p className="text-[#BCB7C3] mt-[5px]">$20,950.00</p>
                    </div>
                  ) : (
                    <p className=" text-3xl font-bold">- -</p>
                  )}
                </div>
              </div>
              {connect ? (
                <div className="flex  flex-col sm:flex-row pt-[20px] gap-4">
                  <button
                    onClick={() => setModal(!modal)}
                    type="button"
                    className="bg-gradient-to-r w-full from-purple to-pink rounded-3xl px-7 py-2"
                  >
                    Stake
                  </button>
                  <button
                    type="button"
                    className="border-2 px-7 py-2 w-full rounded-3xl border-[#6B6D84]"
                  >
                    Unstake
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="border-2 px-7 py-2 w-full rounded-3xl border-purple sm:text-md text-sm mt-[20px]"
                >
                  Connect Your Wallet
                </button>
              )}
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-4">
              <div className="bg-[#16182D] p-[20px] flex flex-col justify-evenly">
                <p className="text-lg pb-[5px] font-bold">Total Staked</p>
                <div className="flex gap-2 items-baseline">
                  <p className="text-2xl lg:text-xl xl:text-3xl font-bold">
                    21,846,076
                  </p>
                  <p className="text-sm opacity-80">$KLS</p>
                </div>
                <p className="text-[#BCB7C3] text-sm">$457,675,292.2</p>
              </div>

              <div className="bg-[#16182D] p-[20px] flex flex-col justify-evenly">
                <p className="text-lg pb-[5px] font-bold">Estimated Returns</p>
                <div className="flex gap-2 items-baseline">
                  <p className="text-2xl lg:text-xl xl:text-3xl font-bold">
                    21,846,076
                  </p>
                  <p className="text-sm opacity-80">$KLS</p>
                </div>
                <p className="text-[#BCB7C3] text-sm">$457,675,292.2</p>
              </div>
              <div className="col-span-2 bg-[#16182D] p-[20px]">
                <p className=" text-xl mb-[30px]">$KLS Stats</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-between">
                  <div className="w-full">
                    <p className="text-sm opacity-50">$KLS Price</p>
                    <p className="text-xl sm:2xl lg:text-md xl:text-md font-bold">
                      $20.95
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm opacity-50">Daily Rewards</p>
                    <p className="text-xl sm:2xl lg:text-md xl:text-md font-bold ">
                      50,516.13 $KLS
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-sm opacity-50">Supply</p>
                    <p className="text-xl sm:2xl lg:text-md xl:text-md font-bold">
                      78,425,908 $KLS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroStake;
