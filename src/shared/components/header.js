import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../../shared/components/modal';
import logo from '../../images/logo.png';
import Metamask from '../../images/metamask.png';
import TrustWallet from '../../images/trust-wallet.png';
import menu from '../../images/svgs/menu.svg';
import useEagerConnect from '../../hooks/useEagerConnect';
import useInactiveListener from '../../hooks/useInactiveListener';
import { useWeb3React } from '@web3-react/core';
import connectorList from '../../lib/connectors';

const Header = () => {
  const [select, setSelect] = useState('home');
  const [connect, setConnect] = useState(false);
  const [nav, setNav] = useState(false);

  const { activate, deactivate, active } = useWeb3React();

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager);

  const handleClick = (connectorName) => () => {
    activate(connectorList[connectorName]);
  };

  const handleDisconnect = (connectorName) => {
    deactivate(connectorList[connectorName]);
    setConnect(false);
  };

  return (
    <>
      {!active && connect ? (
        <Modal>
          <>
            <div className="w-[80vw] md:w-[600px] max-w-xl h-[60vh] md:h-[400px] bg-[#23243E] text-white relative p-[30px] flex flex-col justify-evenly ">
              <h1 className="font-bold text-md sm:text-3xl  text-center">
                Connect
              </h1>
              <button
                onClick={() => setConnect(false)}
                className="absolute -top-4 -right-3 bg-[#16182C] rounded-full border w-[34px] h-[34px] flex items-center justify-center border-slate-400"
              >
                &#128473;
              </button>
              <div className="flex flex-col gap-6 mt-[40px] items-center">
                <button
                  onClick={handleClick('MetaMask')}
                  className="bg-[#1F2134] w-[70%] rounded-md flex justify-center items-center text-sm md:text-lg font-semibold gap-5 py-[20px]"
                >
                  <img alt="no" src={Metamask} className="w-[30px] md:w-fit" />
                  Metamask
                </button>
                <button
                  onClick={handleClick('WalletConnect')}
                  className="bg-[#1F2134] w-[70%] rounded-md flex justify-center items-center text-sm md:text-lg font-semibold gap-5 py-[20px]"
                >
                  <img
                    alt="no"
                    src={TrustWallet}
                    className="w-[30px] md:w-fit"
                  />
                  Trust Wallet
                </button>
              </div>
            </div>
          </>
        </Modal>
      ) : (
        <></>
      )}
      <nav className="flex items-center bg-bgColor h-[10vh] w-full fixed z-10 ">
        <div className=" text-white px-6 py-3 flex lg:justify-around justify-between w-full items-center">
          <div className="">
            <NavLink to={'/'}>
              <img
                alt="no"
                onClick={() => {
                  setSelect('home');
                }}
                src={logo}
                className="h-10 md:h-10 cursor-pointer "
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
                className="border-2 px-7 py-2 rounded-3xl border-purple"
                onClick={active ? handleDisconnect : () => setConnect(true)}
              >
                {active ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
          <div className="flex-col relative  md:hidden  h-full justify-between">
            <img
              alt="no"
              src={menu}
              className="float-right"
              onClick={() => {
                setNav(!nav);
              }}
            />
            {nav && (
              <div
                className="flex flex-col bg-opacity-25 bg-[#EC22F3] rounded-md absolute  right-0 top-10 text-xl cusrsor-pointer text-left px-3"
                onClick={() => {
                  setNav(false);
                }}
              >
                <NavLink to={'/'}>
                  <p className="border-b-1 ">Home</p>
                </NavLink>
                <NavLink to={'/pool'}>
                  <p className="border-b-1 ">Pool</p>
                </NavLink>
                <NavLink to={'/staking'}>
                  <p className="border-b-1 ">Staking</p>
                </NavLink>
                <NavLink to={'/claim'}>
                  <p className="border-b-1 ">Claim</p>
                </NavLink>
                <NavLink to={'/apply'}>
                  <p>Apply</p>
                </NavLink>
                <p onClick={active ? handleDisconnect('MetaMask') : () => setConnect(true)}>
                  {active ? 'Disconnect' : 'Connect'}
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
