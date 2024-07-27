import React  from "react";
import Layout from "../../../components/layout/Layout";
import { Link } from "react-router-dom";

const LinuxTool = () => {
    return (
      <Layout>
        <section className="bg-gray-900 text-white body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="mt-4 border-4 p-2 rounded-xl">
                  <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                    Github Project
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium mb-1">
                    IP-Tracer
                  </h2>

                  <Link
                    className="flex justify-center text-center items-center m-4"
                    to="https://github.com/rajkumardusad/IP-Tracer"
                  >
                    <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                      Link of GitHub
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="mt-4 border-4 p-2 rounded-xl">
                  <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                    Github Project
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium mb-1">
                    Subscan
                  </h2>

                  <Link
                    className="flex justify-center text-center items-center m-4"
                    to="https://github.com/zidansec/subscan"
                  >
                    <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                      Link of GitHub
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="mt-4 border-4 p-2 rounded-xl">
                  <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                    Github Project
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium mb-1">
                    CyberPhish (Dont For All)
                  </h2>

                  <Link
                    className="flex justify-center text-center items-center m-4"
                    to="https://github.com/Cyber-Dioxide/CyberPhish"
                  >
                    <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                      Link of GitHub
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="mt-4 border-4 p-2 rounded-xl">
                  <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                    Github Project
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium mb-1">
                    Bug Hunting
                  </h2>

                  <Link
                    className="flex justify-center text-center items-center m-4"
                    to="https://github.com/yogithesymbian/bug-hunting-penetration-rgb-hat"
                  >
                    <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                      Link of GitHub
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default LinuxTool;
