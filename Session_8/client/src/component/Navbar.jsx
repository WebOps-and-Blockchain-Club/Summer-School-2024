import { Link, useNavigate } from "react-router-dom";

import Alert from "./Alert";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);

  const checkLoggedIn = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/verify`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    if (data.status === 401) {
      localStorage.clear();
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/signup"
      ) {
        props.showAlert("Please login");
        navigate("/login");
      }
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="sticky top-0 z-10">
      <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-2 dark:text-white dark:bg-black dark:border-black">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            to="/"
            className="mr-4 flex cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased items-center"
          >
            {/* {props.mode==="Dark Mode"?<img  name='mode' src='logo_light.jpg' className='w-10' alt=''/>:<img  name='mode' src='logo_dark.jpeg' className='w-10' alt=''/>} */}
            <img name="mode" src="logoo.png" className="w-10" alt="" />
            InstiOlx
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  <Link to="/" className="flex items-center">
                    Home
                  </Link>
                </li>
                {loggedIn && (
                  <>
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      <Link to="/upload" className="flex items-center">
                        Upload
                      </Link>
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      <Link to="/userproduct" className="flex items-center">
                        Your Products
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <button onClick={props.toggleMode}>
              {props.mode !== "Dark Mode" ? (
                <img
                  size="2xs"
                  name="mode"
                  src="sun.jpg"
                  className="w-7"
                  alt=""
                />
              ) : (
                <img
                  size="2xs"
                  name="mode"
                  src="moon.png"
                  className="w-7"
                  alt=""
                />
              )}
            </button>
            {loggedIn ? (
              <div className="flex items-center gap-x-1">
                <button
                  className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                  onClick={() => {
                    localStorage.clear();
                    setLoggedIn(false);
                    navigate("/login");
                  }}
                >
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-x-1">
                <Link to={"/login"}>
                  <button
                    className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 dark:text-gray-300 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                  >
                    <span>Log In</span>
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button
                    className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                  >
                    <span>Sign Up</span>
                  </button>
                </Link>
              </div>
            )}

            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
      <Alert alert={props.alert} />
    </div>
  );
};

export default Navbar;
