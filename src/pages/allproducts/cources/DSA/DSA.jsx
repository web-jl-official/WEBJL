import React from "react";
import Layout from "../../../../components/layout/Layout";
import { Link } from "react-router-dom";

const DSA = () => {
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
              DSA Program
            </h1>
          </div>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="flex flex-wrap -m-4">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://drive.google.com/drive/folders/1BDxnKBZhrxIf0d8mOgQ_nAi1PDGGnftt?usp=sharing">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      DSA Program
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      DSA Notes
                    </h2>
                    <p className="leading-relaxed text-base">
                      This Notes By CU (Chandigarh University)
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

export default DSA;
