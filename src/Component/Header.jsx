const Header = () => {
  return (
    <div className="flex justify-center border-b-2  bg-base-200 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>

      {/* Navbar */}
      <div className="collapse-title flex navbar w-full">
        
        {/* Left */}
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <button className="btn btn-ghost text-blue-700 text-3xl">Softsasi</button>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button className="text-amber-300 text-xl">Home</button>
            </li>
            <li>
              <button className="text-amber-300 text-xl">Contact</button>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-64 lg:w-auto"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="collapse-content flex lg:hidden z-10">
        <ul className="menu">
          <li>
            <button>Home</button>
          </li>
          <li>
            <details>
              <summary>Tile</summary>
              <ul>
                <li>
                  <button>Contact</button>
                </li>
                <li>
                  <button>Dashboard</button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button>Item 3</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;