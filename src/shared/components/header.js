import { React, useState } from 'react';
import { Router, NavLink } from 'react-router-dom';
import Modal from '../../shared/components/modal';

const Header = () => {
  const [select, setSelect] = useState('home');
  const [connect, setConnect] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <>
      {connect ? (
        <Modal>
          <>
            <div className="w-[80vw] md:w-[600px] h-[60vh] md:h-[400px] bg-[#23243E] text-white relative p-[30px] flex flex-col justify-evenly ">
              <h1 className="font-bold text-md sm:text-3xl  text-center">
                Connect Wallet
              </h1>
              <button
                onClick={() => setConnect(false)}
                className="absolute -top-4 -right-3 bg-[#16182C] rounded-full border w-[34px] h-[34px] flex items-center justify-center border-slate-400"
              >
                &#128473;
              </button>
              <div className="flex flex-col gap-6 mt-[40px] items-center">
                <button className="bg-[#1F2134] w-[70%] rounded-md flex justify-center items-center text-sm md:text-lg font-semibold gap-5 py-[20px]">
                  <img
                    src="./images/metamask.png"
                    className="w-[30px] md:w-fit"
                  />
                  Metamask
                </button>
                <button className="bg-[#1F2134] w-[70%] rounded-md flex justify-center items-center text-sm md:text-lg font-semibold gap-5 py-[20px]">
                  <img
                    src="./images/trust-wallet.png"
                    className="w-[30px] md:w-fit"
                  />
                  Trust Wallet
                </button>
              </div>
            </div>
          </>
        </Modal>
      ) : null}
      <nav className="flex items-center bg-bgColor h-[10vh] w-full fixed z-10 ">
        <div className=" text-white px-6 py-3 flex lg:justify-around justify-between w-full items-center">
          <div className="">
            <NavLink to={'/'}>
              <img
                onClick={() => {
                  setSelect('home');
                }}
                src="./images/logo.png"
                className="h-6 md:h-10 cursor-pointer "
              />
            </NavLink>
          </div>
          <div className="hidden md:flex md:items-center md:justify-left xl:gap-10 gap-4 lg:gap-6  ">
            <NavLink to={'/'}>
              <div
                onClick={() => {
                  setSelect('home');
                }}
                className={`${
                  select === 'home'
                    ? `underline underline-offset-8`
                    : `hover:underline  hover:underline-offset-8`
                } transition duration-500 ease-in-out  decoration-pink cursor-pointer`}
              >
                Home
              </div>
            </NavLink>
            <NavLink to={'/pool'}>
              <div
                onClick={() => {
                  setSelect('pool');
                  Router.push('/pool');
                }}
                className={`${
                  select === 'pool'
                    ? `underline underline-offset-8`
                    : `hover:underline  hover:underline-offset-8`
                } transition duration-500 ease-in-out  decoration-pink cursor-pointer`}
              >
                Pool
              </div>
            </NavLink>
            <NavLink to={'/staking'}>
              <div
                onClick={() => {
                  setSelect('staking');
                }}
                className={`${
                  select === 'staking'
                    ? `underline underline-offset-8`
                    : `hover:underline  hover:underline-offset-8`
                } transition duration-500 ease-in-out  decoration-pink cursor-pointer`}
              >
                Staking
              </div>
            </NavLink>
            <NavLink to={'/claim'}>
              <div
                onClick={() => {
                  setSelect('claim');
                }}
                className={`${
                  select === 'claim'
                    ? `underline underline-offset-8`
                    : `hover:underline  hover:underline-offset-8`
                } transition duration-500 ease-in-out  decoration-pink cursor-pointer`}
              >
                Claim
              </div>
            </NavLink>
            <NavLink to={'/apply'}>
              <div
                onClick={() => {
                  setSelect('apply');
                }}
                className={`${
                  select === 'apply'
                    ? `underline underline-offset-8`
                    : `hover:underline  hover:underline-offset-8`
                } transition duration-500 ease-in-out  decoration-pink cursor-pointer`}
              >
                Apply
              </div>
            </NavLink>
            <div>
              <button
                type="button"
                className="bg-gradient-to-r from-purple to-pink rounded-3xl px-7 py-2"
              >
                Buy Token
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setConnect(!connect)}
                className="border-2 px-7 py-2 rounded-3xl border-purple"
              >
                Connect
              </button>
            </div>
          </div>
          <div className="flex-col   md:hidden  h-full justify-between">
            <img
              src="./images/svgs/menu.svg"
              className="float-right"
              onClick={() => {
                setNav(!nav);
              }}
            />
            {nav && (
              <div
                className="flex flex-col text-left px-3"
                onClick={() => {
                  setNav(false);
                }}
              >
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/pool'}>Pool</NavLink>
                <NavLink to={'/staking'}>Staking</NavLink>
                <NavLink to={'/claim'}>Claim</NavLink>
                <NavLink to={'/apply'}>Apply</NavLink>
                <p
                  onClick={() => {
                    setConnect(!connect);
                  }}
                >
                  Connect
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
