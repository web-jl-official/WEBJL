import React from 'react'
import Layout from '../../../../components/layout/Layout'
import { Link } from "react-router-dom";

export default function Cpp() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1
              style={{
                fontSize: "xx-large",
                color: "aliceblue",
                fontFamily:
                  '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
              }}
            >
              C++ Program
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Can you look at our C++ programming code here and see if there is
              any error? You can see it here and solve it. Here you will get
              code for classes and without classes. You will also get the
              output. Thank you.
            </p>
          </div>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="flex flex-wrap -m-4">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      C++ Language
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      C++ Video Leacture in Hindi
                    </h2>
                    <p className="leading-relaxed text-base">
                      This Leacture Created By "Code_with_Herry"
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to={"/Cpp_Factorial"}>
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      C++ Language
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Factorial{" "}
                    </h2>
                    <p className="leading-relaxed text-base">
                      Factorial without Recursion &amp; With Recursion Program
                    </p>
                  </div>
                </Link>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to={"/Cpp_Bank_Acoount"}>
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      C++ Language
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Bank Account Class in C++{" "}
                    </h2>
                    <p className="leading-relaxed text-base">
                      Mack ATM Software with class{" "}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
