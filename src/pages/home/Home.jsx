import React, { Fragment, useContext, use, useState, useEffect } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productCard/ProductCard";

function Home() {
  const context = useContext(myContext);
  const { mode } = context;

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
      <div className="w-full h-full bg-center bg-fixed bg-no-repeat bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/pexels-quang-nguyen-vinh-222549-2132180.jpg?alt=media&token=59eb256f-9037-4202-b2a5-994f6dc875eb')]">
        <div className="bg-black/60 w-full h-screen flex justify-center text-center items-center">
          <div className="block text-center items-center">
            <h1 className=" text-cyan-400 font-extrabold text-6xl text-center items-center">
              Hello & Welcome
            </h1>
            <div className="flex text-center items-center justify-center ">
              <p className=" w-80  text-sm mt-5 mb-5 text-white">
                Join WEB JL for advanced features and free or discounted
                courses. With our support, you’ll gain access to expert
                guidance, sports assistance, and production-level project source
                code. Whether you’re planning for college, searching for
                internships, or launching your career, WEB JL has you covered.
                Get started today!
              </p>
            </div>

            {user ? (
              <a href="/prumium_cources">
                <button className="bg-gray-900  px-8  py-2 rounded-full text-cyan-400 font-extrabold font-serif">
                  Hello, Welcome To Web JL
                </button>
              </a>
            ) : (
              <a href="/signup">
                <button className="bg-gray-900  px-8  py-2 rounded-full text-cyan-400 font-extrabold font-serif">
                  Join For Free
                </button>
              </a>
            )}
          </div>
        </div>
        <div className="bg-black/60 w-full flex justify-center text-center items-center">
          <ProductCard />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
