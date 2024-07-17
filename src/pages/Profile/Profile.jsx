import React, { Fragment, useContext, use, useState, useEffect } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import OrderCustomer from "../order/OrderCustomer";

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
              <OrderCustomer />
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
