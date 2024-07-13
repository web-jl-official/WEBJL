import React, { Fragment, useContext, use, useState, useEffect } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productCard/ProductCard";
import { Link } from "react-router-dom";

const Profile = () => {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  const [UserName, setUserName] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      setUserName(user.user.email);
    } else {
      setUserName(null);
    }
  }, []);
  return (
    <Layout>
      <div className="block w-full h-full text-center items-center  ">
        {user ? (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <a href="">
              <button className="mt-8 mb-8 bg-gray-900 border-4 border-white rounded-full  px-8  py-2  text-cyan-400 font-extrabold font-serif">
                User Email : {UserName}
              </button>
            </a>
            <div className=" w-full flex justify-center text-center items-center">
              {order.length >= 1 ? (
                <>
                  <div className="block w-full m-4">
                    <div className="w-full ">
                      <h1 className="text-2xl font-medium title-font mb-2 ml-5 text-white text-left">
                        {" "}
                        Your Order Collection
                      </h1>
                    </div>
                    {order
                      .filter((obj) => obj.userid == userid)

                      .map((order) => {
                        // order.cartItems.map()
                        return (
                          <div className="flex overflow-x-auto  scroll-smooth justify-evenly m-4 sm:flex sm:flex-wrap ">
                            {order.cartItems.slice(0, 4).map((item) => {
                              return (
                                <div className="m-5">
                                  <div className="flex w-64 flex-wrap justify-evenly  ">
                                    <div className="text-left" key={item.index}>
                                      <img
                                        alt="ecommerce"
                                        className="object-center h-48 bg-black object-fill w-full border-4 border-cyan-400 rounded-xl"
                                        src={item.imageUrl}
                                      />
                                      <div className="mt-4">
                                        <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                                          WEB JL
                                        </h3>
                                        <h2 className="text-white title-font text-lg font-medium">
                                          {item.title}
                                        </h2>
                                        <p className="mt-1 text-white">
                                          ₹{item.price}
                                        </p>
                                        <div className=" flex justify-center  mt-2">
                                          <button
                                            type="button"
                                            onClick={() =>
                                              (window.location.href =
                                                item.location)
                                            }
                                            className="focus:outline-none text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                                          >
                                            Enroll Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className=" w-full flex justify-center text-center items-center text-2xl">
              <Link
                to={"/order"}
                className="text-2xl font-medium    text-white ml-1  hover:text-cyan-400 bg-cyan-400 hover:bg-gray-900 p-4 m-4 border-4 border-white rounded-full transform-gpu action:animate-ping"
              >
                Explore More Order
              </Link>
            </div>
          </div>
        ) : (
          <a href="/signup">
            <button className="bg-gray-900  px-8  py-2 rounded-full text-cyan-400 font-extrabold font-serif">
              Join For Free
            </button>
          </a>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
