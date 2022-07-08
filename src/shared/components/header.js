import { React, useState } from 'react';
import { Router, NavLink } from 'react-router-dom';

const Header = () => {
  const [select, setSelect] = useState('home');
  const [nav, setNav] = useState(false);
  return (
    <nav className="flex flex-row bg-bgColor h-[10vh] w-full fixed z-10">
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
              className="border-2 px-7 py-2 rounded-3xl border-purple"
            >
              Connect
            </button>
          </div>
        </div>
        <div className="flex-col  md:hidden  h-full justify-between">
          <img
            src="./images/svgs/menu.svg"
            className="float-right"
            onClick={() => {
              setNav(!nav);
            }}
          />
          {nav && (
            <div className="flex flex-col text-left px-3 ">
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/pool'}>Pool</NavLink>
              <NavLink to={'/staking'}>Staking</NavLink>
              <NavLink to={'/claim'}>Claim</NavLink>
              <NavLink to={'/apply'}>Apply</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
