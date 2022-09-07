import { NavLink } from 'react-router-dom';
import discord from "../../images/svgs/discord.svg"
import twitter from "../../images/svgs/twitter.svg"
import telegram from "../../images/svgs/telegram.svg"
import facebook from "../../images/svgs/facebook.svg"
import Layer_2 from "../../images/svgs/Layer_2.svg"

const Card = (props) => {
  const percentage = 'w-[' + props.percentage + '%]';

  return (
    <NavLink to={`/pool/${props.id}`}>
      <div
        className={`h-[500px] rounded-md w-[270px] sm:w-[350px] bg-cardColor`}
      >
        <div className="justify-items-center ">
          <img alt="no" src={props.headerImage} className="z-0 object-fill  " />
        </div>
        <div className=" relative m-auto w-full">
          <div className="absolute flex -top-8 justify-center m-auto w-full ">
            <img
              alt="no"
              src={props.logo}
              className="object-contain w-[80px]  justify-around"
            />
          </div>

          <div className="relative text-center justify-center ">
            <p className="text-2xl pt-[70px] px-[10px]">{props.ProjectName}</p>
            <p className="text-xl opacity-50 pt-[10px] px-[10px]">
              {props.PlaceHolder}
            </p>
            <div className="flex gap-2 justify-center pt-[10px]">
              <img alt="no" src={discord} />
              <img alt="no" src={twitter} />
              <img alt="no" src={telegram} />
              <img alt="no" src={facebook} />
              <img alt="no" src={Layer_2} />
            </div>
            <p className="opacity-40 text-[0.8rem] px-[20px] text-center pt-[20px]">
              {props.description}
            </p>
          </div>
          <div className="grid grid-cols-2 text-xs opacity-75 mt-[20px] px-[10px]">
            <p>Total Raise</p>
            <p className="text-right">{props.totalRaise} BUSD</p>
            <p>Starts</p>
            <p className="text-right">{props.start}</p>
            <p>Prize</p>
            <p className="text-right">{props.prize}</p>
          </div>

          <div className="px-[10px] ">
            <div className=" w-full mt-[20px]  bg-[#22243E] rounded-full h-2.5 ">
              <div
                className={`bg-gradient-to-r from-orange to-red h-2.5 rounded-full  ${percentage}`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 mt-[5px] opacity-50 text-xs px-[10px] ">
            <p>250 BUSD ({props.percentage}%)</p>
            <p className="text-right">30000 BUSD</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
