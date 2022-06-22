import React from 'react';
const Card = (props) => {
  const percentage = 'w-[' + props.percentage + '%]';

  return (
    <div className=" h-[500px] rounded-md w-[25vw] bg-cardColor ">
      <div className="justify-items-center  ">
        <img src={props.headerImage} className="z-0 object-cover " />
      </div>
      <div className="px-[20px] relative ">
        <div className="absolute -top-8 right-[10vw]">
          <img
            src={props.logo}
            className="object-contain w-[80px]  justify-around"
          />
        </div>

        <div className="relative text-center justify-center ">
          <p className="text-2xl pt-[70px]">{props.ProjectName}</p>
          <p className="text-xl opacity-50 pt-[10px]">{props.PlaceHolder}</p>
          <div className="flex gap-2 justify-center pt-[10px]">
            <img src="./discord.svg" />
            <img src="./twitter.svg" />
            <img src="./telegram.svg" />
            <img src="./facebook.svg" />
            <img src="./Layer_2.svg" />
          </div>
          <p className="opacity-40 text-[0.8rem] px-[20px] text-center pt-[20px]">
            {props.description}
          </p>
        </div>
        <div className="grid grid-cols-2 text-xs opacity-75 mt-[20px]">
          <p>Total Raise</p>
          <p className="text-right">{props.totalRaise} BUSD</p>
          <p>Starts</p>
          <p className="text-right">{props.start}</p>
          <p>Prize</p>
          <p className="text-right">{props.prize}</p>
        </div>

        <div className="w-full mt-[20px]  bg-[#22243E] rounded-full h-2.5 ">
        <div
            className={`bg-gradient-to-r from-orange to-red h-2.5 rounded-full ${percentage}`}
          />
        </div>
        <div className="grid grid-cols-2 mt-[5px] opacity-50 text-xs">
          <p>250 BUSD ({props.percentage}%)</p>
          <p className="text-right">30000 BUSD</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
