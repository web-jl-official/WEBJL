import React from 'react';
import Layout from '../../../../../../components/layout/Layout';

const JsCodes = () => {
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
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Code Copy From Chai aur Code</p>
          </div>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="flex flex-wrap -m-4">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/Js_01_basic">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      01. Basics
                    </h2>
                    <p className="leading-relaxed text-base">Variables, Datatypes, Conversion & Operations, Comparison, String, Number & Math, Dates</p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/Js_02_basic">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      02.Basics
                    </h2>
                    <p className="leading-relaxed text-base">
                      
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      03.Basics
                    </h2>
                    <p className="leading-relaxed text-base">
                     
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/HTML_shorting">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Coming soon
                    </h2>
                    <p className="leading-relaxed text-base">
                     
                    </p>
                  </div>
                </a>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      JS Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                   Coming soon
                    </h2>
                    <p className="leading-relaxed text-base">
                    
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
}

export default JsCodes;
