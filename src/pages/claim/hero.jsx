const ClaimHero = () => {
  return (
    <div>
      <div className="bg-[#150015] text-white p-[4rem]">
        <h1 className="w-full text-center text-4xl font-bold">
          Claim Your Tokens
        </h1>
        <h3 className="text-center pt-[2rem]">
          The allocation is here connect your wallet to claim your tokens.
        </h3>
      </div>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        Dropdown button{' '}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 "
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Earnings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClaimHero;
