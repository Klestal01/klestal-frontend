const ClaimCard = (props) => {
  return (
    <div className="flex flex-row gap-4 p-[20px] border-[2px] border-[#292B41] rounded-lg text-white justify-evenly w-[80vw] m-auto">
      <div className="text-left min-w-fit">
        <img src={props.logo} className="rounded-full w-[70px] h-[70px]" />
      </div>
      <div className="flex w-full md:flex-row justify-start flex-col gap-4">
        <div className="w-full flex flex-row">
          <div className="md:ml-[20px] flex flex-col justify-center ">
            <h1 className="text-xl font-bold">{props.projectName}</h1>
            <p className="opacity-60">{props.PlaceHolder}</p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center">
          <p className="opacity-50 text-sm">Your Allocation</p>
          <p>{props.allocationPrize}</p>
        </div>
        <div className="flex flex-col w-full justify-center">
          <p className="opacity-50 text-sm">Claim Start Date</p>
          <p>{props.ClaimDate}</p>
        </div>
        <div className="w-full flex items-center md:justify-center ">
          <button
            type="button"
            className="bg-gradient-to-r from-purple to-pink rounded-3xl h-min py-3 w-[80%] "
          >
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimCard;
