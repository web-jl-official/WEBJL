import React, { Fragment, useContext, use, useState, useEffect } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import OrderCustomer from "../order/OrderCustomer";
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
      <div className="block text-white m-4 items-center  text-center ">
        <div>
          <button className="mt-8 mb-8 bg-gray-900 border-4 border-white rounded-full  px-8  py-2  text-cyan-400 font-extrabold font-serif">
            User Email : {UserName}
          </button>
        </div>

        <div className="m-4 bg-black p-2 border-white border-4 rounded-xl text-center items-center ">
          <b>
            <h1 className="text-cyan-400 text-2xl">User Menu</h1>
          </b>
          <div className="sm:flex block justify-evenly text-left items-center mt-4">
            <div>
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
            </div>
            <div>
              <Link
                to={user ? "/OnlineTest" : "/login"}
                className="text-sm font-medium    text-white  hover:text-cyan-400 "
              >
                Online Test
              </Link>
            </div>
            <div>
              <Link
                to={"/order"}
                className="text-sm font-medium    text-white  hover:text-cyan-400 "
              >
                Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
