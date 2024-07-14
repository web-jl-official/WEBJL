import React, { Fragment, useContext, use, useState, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { Link } from "react-router-dom";


const HomeEntery = () => {
  const context = useContext(myContext);
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
    <div className=" block text-center items-center bg-gray-700 p-4 border-4 border-white rounded-xl">
      <h1 className=" text-cyan-400 font-extrabold text-6xl text-center items-center">
        Hello & Welcome
      </h1>
      {!user ? (
        <div className="flex text-center items-center justify-center ">
          <p className=" w-80  text-sm mt-5 mb-5 text-white">
            Join WEB JL for advanced features and free or discounted courses.
            With our support, you’ll gain access to expert guidance, sports
            assistance, and production-level project source code. Whether you’re
            planning for college, searching for internships, or launching your
            career, WEB JL has you covered. Get started today!
          </p>
        </div>
      ) : (
        <div className="flex text-center items-center justify-center ">
          <p className=" w-80  text-sm mt-5 mb-5 text-white">
            web-jl-official” is an educational platform created by Livesh Kumar
            Garg. It offers language notes, short and long projects for
            revision, and various types of code. Whether you’re a beginner or an
            experienced developer, you can explore this resource-rich website at
            webjl.web.app. 🌐📚👨‍💻
          </p>
        </div>
      )}

      {user ? (
        <Link to={"/prumium_cources"}>
          <button className="bg-gray-900  px-8  py-2 rounded-full text-cyan-400 font-extrabold font-serif">
            Hello, Welcome To Web JL
          </button>
        </Link>
      ) : (
        <Link to={"/signup"}>
          <button className="bg-gray-900  px-8  py-2 rounded-full text-cyan-400 font-extrabold font-serif">
            Click to Join For Free
          </button>
        </Link>
      )}
    </div>
  );
};

export default HomeEntery;
