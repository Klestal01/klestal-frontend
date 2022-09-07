import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="text-white grid grid-cols-1 lg:grid-cols-4 border-y-[1px] gap-4 lg:gap-0 py-[10vh] border-[#4B4D6A] p-[10px] pl-[30px] lg:pl-[10px] ">
        <div className="lg:px-[10vw] w-full lg:col-span-2">
          <img alt="no" src={logo} className="w-[50px] lg:w-[100px]" />
          <p className="text-[#6B6D84] pt-[40px] w-full lg:w-[30vw] text-sm">
            Klestal is an IDO compatible, fully decentralized and interactive
            platform for cherry-picked projects in the metaverse.
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <p className=" text-xl">COMPANY</p>
          <p className="text-[#6B6D84] text-sm">FAQ</p>
          <p className="text-[#6B6D84] text-sm">Apply for IDOs</p>
          <p className="text-[#6B6D84] text-sm">Apply as Project</p>
          <p className="text-[#6B6D84] text-sm">About Us</p>
        </div>
        <div className="flex flex-col gap-y-6">
          <p className=" text-xl">GENERAL</p>
          <p className="text-[#6B6D84] text-sm">FAQ</p>
          <p className="text-[#6B6D84] text-sm">Apply for IDOs</p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-[#6B6D84] text-sm py-[2.5vh]">
          Copyright 2022. Klestal. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
