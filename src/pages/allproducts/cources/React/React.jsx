import React from 'react'
import Layout from '../../../../components/layout/Layout'
import { Link } from 'react-router-dom';


export default function Reactpro() {
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
              React Program
            </h1>
          </div>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="flex flex-wrap -m-4">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to="https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      React JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      React JS Video Leacture in Hindi - Palylist
                    </h2>
                    <p className="leading-relaxed text-base">
                      This Leacture Created By "Chai_or_Code"
                    </p>
                  </div>
                </Link>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to="/Project_React">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      REACT JS
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Ecommers Website
                    </h2>
                    <p className="leading-relaxed text-base">
                      Our Ecommers Website Copy And Make Own Websiyte
                    </p>
                  </div>
                </Link>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <Link to="/Learn_React">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      REACT JS
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Learn React
                    </h2>
                    <p className="leading-relaxed text-base">
                      in Few Steps How To Mack React Websitte
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
