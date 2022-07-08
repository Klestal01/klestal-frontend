const Footer = () => {
  return (
    <div>
      <div className="text-white grid grid-cols-4 border-y-[1px] py-[10vh] border-[#4B4D6A]">
        <div className="px-[10vw] w-full col-span-2">
          <img src="./images/logo.png" />
          <p className="text-[#6B6D84] pt-[40px] w-[30vw] text-sm">
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
        <p className="text-[#6B6D84] text-sm py-[50px]">
          Copyright 2022. Klestal. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
