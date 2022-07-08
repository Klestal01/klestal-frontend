import { useState } from 'react';
import Modal from '../../shared/components/modal';

const HeroStake = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connect, setConnect] = useState(true);
  return (
    <div className="mb-[9rem]">
      <div className="w-full">
        <img
          className=" left-0 z-0 w-full h-[522px] object-cover  opacity-40"
          src="./stakingHeader.png"
          alt="background"
          draggable={false}
        />
      </div>

      <div className="absolute top-[10rem] w-full flex flex-col justify-around">
        <div className="h-[40vh] flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl font-bold text-white text-center">
            Staking Dashboard
          </h1>
          <h3 className="text-lg text-white ">
            Stake or farm your $KLS to join upcoming IDOs.
          </h3>
        </div>
        <div className="flex justify-center z-1 mx-[15vw]  ">
          <div className="grid grid-cols-2 w-full gap-4 text-white">
            <div className="bg-[#16182D]  w-full p-[20px] rounded-md flex flex-col justify-evenly ">
              <p className="text-lg">My $KLS Staking</p>
              <div className="grid grid-cols-2 gap-4 mt-[5vh] justify-evenly">
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
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setIsModalOpen(!isModalOpen);
                    }}
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
                  className="border-2 px-7 py-2 w-full rounded-3xl border-purple"
                >
                  Connect Your Wallet
                </button>
              )}
            </div>
            {isModalOpen ? (
              <Modal>
                <div className="border boder-1 border-gray-400 bg-white rounded-md w-fit  p-3 px-4 flex flex-col items-center justify-around h-44">
                  <h1 className="text-2xl text-gray-700">This is a Modal</h1>
                  <p className="text-lg text-center text-slate-500">
                    This is made with createPortal {'&'} useRef
                  </p>
                  <button
                    onClick={setIsModalOpen(!isModalOpen)}
                    className="px-4 py-1.5  border rounded  bg-slate-100 border-gray-400  hover:shadow duration-150"
                  >
                    Great
                  </button>
                </div>
              </Modal>
            ) : null}

            <div className="grid grid-cols-2 w-full gap-4">
              <div className="bg-[#16182D] p-[20px] flex flex-col justify-evenly">
                <p className="text-lg pb-[5px] font-bold">Total Staked</p>
                <div className="flex gap-2 items-baseline">
                  <p className="text-3xl font-bold">21,846,076</p>
                  <p className="text-sm opacity-80">$KLS</p>
                </div>
                <p className="text-[#BCB7C3] text-sm">$457,675,292.2</p>
              </div>

              <div className="bg-[#16182D] p-[20px] flex flex-col justify-evenly">
                <p className="text-lg pb-[5px] font-bold">Total Staked</p>
                <div className="flex gap-2 items-baseline">
                  <p className="text-3xl font-bold">21,846,076</p>
                  <p className="text-sm opacity-80">$KLS</p>
                </div>
                <p className="text-[#BCB7C3] text-sm">$457,675,292.2</p>
              </div>
              <div className="col-span-2 bg-[#16182D] p-[20px]">
                <p className=" text-xl mb-[30px]">$KLS Stats</p>
                <div className="grid grid-cols-3 gap-2">
                  <p className="text-sm opacity-50">$KLS Price</p>
                  <p className="text-sm opacity-50">Daily Rewards</p>
                  <p className="text-sm opacity-50">Supply</p>
                  <p className="text-lg font-bold">$20.95</p>
                  <p className="text-lg font-bold">50,516.13 $KLS</p>
                  <p className="text-lg font-bold">78,425,908 $KLS</p>
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
