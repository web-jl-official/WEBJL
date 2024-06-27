import React from "react";
import Layout from "../../../../components/layout/Layout";

export default function c_Lan() {
  return (
    <Layout>
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
            C Program
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" />
        </div>
        <section className="text-gray-400 body-font bg-gray-900">
          <div className="flex flex-wrap -m-4">
            {/* anker tag using link for page */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <a href="https://1drv.ms/u/s!Al4ms1EwsO8BgZYaxjouebkphmQ5sw?e=I2Kqbw">
                <div
                  style={{ height: "180px", width: "280px" }}
                  className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                >
                  <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                    C Language
                  </h3>
                  <h2 className="text-lg text-white font-medium title-font mb-4">
                    {" "}
                    C Language Nots
                  </h2>
                  <p className="leading-relaxed text-base">
                    C Language Nots with all chapter and problem solution.
                  </p>
                </div>
              </a>
            </div>
            {/* anker tag using link for page */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <a href="/C_Game">
                <div
                  style={{ height: "180px", width: "280px" }}
                  className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                >
                  <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                    C Language
                  </h3>
                  <h2 className="text-lg text-white font-medium title-font mb-4">
                    Guss the number
                  </h2>
                  <p className="leading-relaxed text-base">
                    This is a game with using c language. The game is guss the
                    number{" "}
                  </p>
                </div>
              </a>
            </div>
            {/* anker tag using link for page */}
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <a href="/C_Multifunction">
                <div
                  style={{ height: "180px", width: "280px" }}
                  className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                >
                  <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                    C Language
                  </h3>
                  <h2 className="text-lg text-white font-medium title-font mb-4">
                    Multy Function
                  </h2>
                  <p className="leading-relaxed text-base">
                    This is code for mack multy-function in c language with loop
                    &amp; without loop
                  </p>
                </div>
              </a>
            </div>
            {/* anker tag using link for page */}
            {/* <div className="xl:w-1/4 md:w-1/2 p-4">
            <a href="">
              <div style="height: 180px;width: 280px;" className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">C Language</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4"> </h2>
                <p className="leading-relaxed text-base"></p>
              </div>
            </a>
          </div> */}
            {/* anker tag using link for page */}
            {/* <div className="xl:w-1/4 md:w-1/2 p-4">
            <a href="">
              <div style="height: 180px;width: 280px;" className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">C Language</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
                <p className="leading-relaxed text-base"></p>
              </div>
            </a>
          </div> */}
          </div>
        </section>
      </div>
    </Layout>
  );
}
