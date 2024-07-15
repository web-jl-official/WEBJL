import React, { Fragment, useContext, use, useState, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../fireabase/FirebaseConfig";
import { useParams } from "react-router";

function Navbar() {
  const context = useContext(myContext);
  const { mode } = context;

  const [UserName, setUserName] = useState("");

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  

  // console.log(user.user.email)
  
  useEffect(() => {
    if (user) {
      setUserName(user.user.email);
    } else {
      setUserName(null);
    }
    
  }, []);

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="sticky top-0 z-50">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden " onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-gray-700 pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28 ">
                  <button
                    type="button"
                    className="hover:text-cyan-400 -m-2 inline-flex items-center justify-center rounded-md p-2    text-white bg-black mb-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className=" text-white ml-1 hover:text-cyan-400 ">
                      X Close Menu
                    </span>
                  </button>
                </div>
                <div className=" block center space-y-6 border-t border-gray-200 px-4 py-6 ">
                  <div>
                    <Link
                      to={user ? "/profile" : "/login"}
                      className="text-sm font-medium    text-white ml-1  hover:text-cyan-400 "
                    >
                      Account
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={user ? "/NewUpdate" : "/login"}
                      className="text-sm font-medium    text-white ml-1  hover:text-cyan-400 "
                    >
                      Intership
                    </Link>
                  </div>

                  {user ? (
                    <div>
                      <Link
                        to={"/order"}
                        className="text-sm font-medium    text-white ml-1  hover:text-cyan-400 "
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  <div>
                    <Link
                      to={"/allproducts"}
                      className="text-sm font-medium    text-white   hover:text-cyan-400 "
                    >
                      Free Courses
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={"/prumium_cources"}
                      className="text-sm font-medium    text-white   hover:text-cyan-400 "
                    >
                      Premium Courses
                    </Link>
                  </div>

                  <div>
                    {user?.user?.email === "lgteamworkofficial@gmail.com" ? (
                      <Link
                        to={"/dashboard"}
                        className="text-sm font-medium text-white   hover:text-cyan-400 "
                      >
                        Admin
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>

                  <div>
                    <Link
                      to={"/About"}
                      className="text-sm font-medium    text-white   hover:text-cyan-400 "
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={"/ContactUs"}
                      className="text-sm font-medium    text-white  hover:text-cyan-400 "
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={"/Privacy"}
                      className="text-sm font-medium    text-white  hover:text-cyan-400 "
                    >
                      Privacy
                    </Link>
                  </div>
                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium    text-white   hover:text-cyan-400 cursor-pointer"
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/signup"}
                        className="-m-2 block p-2 font-medium    text-white   hover:text-cyan-400 cursor-pointer"
                      >
                        Signup
                      </Link>
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <span className="ml-2 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                      href="https://www.facebook.com/profile.php?id=61559331197014"
                      className="  text-white ml-1  hover:text-cyan-400"
                    >
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/web_jl_official/"
                      className="ml-3   text-white hover:text-cyan-400"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>

                    <a
                      href="https://github.com/web-jl-official"
                      className="ml-3 text-white hover:text-cyan-400"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        className="w-6 h-6"
                        viewBox="0 0 64 64"
                      >
                        <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://t.me/web_jl"
                      className="ml-3 text-white hover:text-cyan-400"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        className="w-6 h-6"
                        viewBox="0 0 50 50"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://whatsapp.com/channel/0029VaeXVLD4SpkEzB372n2B"
                      className="ml-3 text-white hover:text-cyan-400"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        className="w-6 h-6"
                        viewBox="0 0 50 50"
                      >
                        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-gray-700">
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-gray-500 p-2    text-white lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1 className=" text-2xl font-bold text-white  px-2 py-1 rounded">
                      WEB JL
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center lg:space-x-6">
                <Link
                  to={"/"}
                  className="text-sm font-medium text-white  hover:text-cyan-400"
                >
                  Home
                </Link>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={user ? "/profile" : "/login"}
                    className="text-sm font-medium text-white  hover:text-cyan-400 "
                  >
                    Account
                  </Link>
                  <Link
                    to={user ? "/NewUpdate" : "/login"}
                    className="text-sm font-medium text-white  hover:text-cyan-400 "
                  >
                    Intership
                  </Link>

                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium    text-white  hover:text-cyan-400"
                  >
                    Free Courses
                  </Link>

                  <Link
                    to={"/prumium_cources"}
                    className="text-sm font-medium    text-white  hover:text-cyan-400"
                  >
                    Premium Courses
                  </Link>

                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium    text-white  hover:text-cyan-400 "
                    >
                      Order
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <Link
                      to={"/OnlineTest"}
                      className="text-sm font-medium    text-white  hover:text-cyan-400 "
                    >
                      Online Test
                    </Link>
                  ) : (
                    ""
                  )}

                  {user?.user?.email === "lgteamworkofficial@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-white  hover:text-cyan-400 "
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium    text-white  hover:text-cyan-400 cursor-pointer"
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/signup"}
                        className="-m-2 block p-2 font-medium    text-white  hover:text-cyan-400 cursor-pointer"
                      >
                        Signup
                      </Link>
                    </div>
                  )}
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={user ? "/cart" : "/login"}
                    className="group -m-2 flex items-center p-2 text-cyan-400"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-cyan-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-cyan-400 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
