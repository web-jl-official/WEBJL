import React from 'react';
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';

const MImit = () => {
    return (
      <Layout>
        <section className="text-gray-600 body-font inset-0">
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
                MIMIT College
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                All Notes with Topics of MIMIT College in this Part with
                Chapter-wise
              </p>
            </div>
            <section className="text-gray-400 body-font bg-gray-900">
              <div className="flex flex-wrap -m-4">
                {/* anker tag using link for page */}
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <Link to="/Mimit/DSA">
                    <div
                      style={{ height: "180px", width: "280px" }}
                      className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                    >
                      <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                        Mimit College 3rd Sem.
                      </h3>
                      <h2 className="text-lg text-white font-medium title-font mb-4">
                        DSA (Data Structures & Algorithms)
                      </h2>
                      <p className="leading-relaxed text-base">College Work</p>
                    </div>
                  </Link>
                </div>
                {/* anker tag using link for page */}
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <Link to="/Mimit/CN">
                    <div
                      style={{ height: "180px", width: "280px" }}
                      className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                    >
                      <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                        Mimit College 3rd Sem.
                      </h3>
                      <h2 className="text-lg text-white font-medium title-font mb-4">
                        CN (Computer Network)
                      </h2>
                      <p className="leading-relaxed text-base"> College Work</p>
                    </div>
                  </Link>
                </div>
                {/* anker tag using link for page */}
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <Link to="/Mimit/Python">
                    <div
                      style={{ height: "180px", width: "280px" }}
                      className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                    >
                      <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                        Mimit College 3rd Sem.
                      </h3>
                      <h2 className="text-lg text-white font-medium title-font mb-4">
                        Python
                      </h2>
                      <p className="leading-relaxed text-base">College Work</p>
                    </div>
                  </Link>
                </div>
                {/* anker tag using link for page */}
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <Link to="/Mimit/PCAT">
                    <div
                      style={{ height: "180px", width: "280px" }}
                      className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                    >
                      <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                        Mimit College 3rd Sem.
                      </h3>
                      <h2 className="text-lg text-white font-medium title-font mb-4">
                        PCAT (Personal Computer - Assemble & Troubleshooting)
                      </h2>
                      <p className="leading-relaxed text-base">College Work</p>
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

export default MImit;
