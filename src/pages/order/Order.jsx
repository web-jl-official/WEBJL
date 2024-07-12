import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import { BsTypeH1 } from "react-icons/bs";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  return (
    <Layout>
      <center>
        <h1
          className="text-2xl justify-center  md:flex "
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          WEB JL
        </h1>
      </center>
      {loading && <Loader />}
      {order.length >= 1 ? (
        <>
          <div className="block w-full h-full pt-10">
            {order
              .filter((obj) => obj.userid == userid)
              .map((order) => {
                // order.cartItems.map()
                return (
                  <div className="flex flex-wrap justify-center">
                    {order.cartItems.map((item) => {
                      return (
                        <div className="rounded-lg md:w-2/3">
                          <div
                            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            style={{
                              backgroundColor: mode === "dark" ? "#282c34" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <img
                              src={item.imageUrl}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                <h2
                                  className=" text-xl font-bold text-gray-900"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.title}
                                </h2>
                                <p
                                  className="mt-1 text-base text-gray-700 h-12 overflow-hidden"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {item.description}
                                </p>
                                <a href={item.location}>
                                  <button className="flex mx-4 my-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Enroll Now
                                  </button>
                                </a>
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
        <h2
          className="text-center text-2xl w-full h-screen"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Not Order
        </h2>
      )}
    </Layout>
  );
}

export default Order;
