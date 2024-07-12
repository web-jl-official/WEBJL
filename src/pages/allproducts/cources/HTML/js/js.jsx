import React from "react";
import Layout from "../../../../../components/layout/Layout";

const Js_cource = () => {
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
              JS Programing Code
            </h1>
            {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Code Copy From Chai aur Code
            </p> */}
          </div>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="flex flex-wrap -m-4">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://youtu.be/sscX432bMZo?si=KzqXKhiyb06BzpQm">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      JS Video Leacture in Hindi - Part 1
                    </h2>
                    <p className="leading-relaxed text-base">
                      This Leacture Created By "Chai_or_Code"
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://youtu.be/_TjtAyMkiTI?si=p9Xf_-FxYFKdRlwR">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      JS Video Leacture in Hindi - Part 2
                    </h2>
                    <p className="leading-relaxed text-base">
                      This Leacture Created By "Chai_or_Code"
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      JS Backend Video Leacture in Hindi - Palylist
                    </h2>
                    <p className="leading-relaxed text-base">
                      This Leacture Created By "Chai_or_Code"
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Js_cource;
