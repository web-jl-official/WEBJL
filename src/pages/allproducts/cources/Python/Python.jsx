import React from 'react'
import Layout from '../../../../components/layout/Layout'

export default function Python() {
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
              Python Program
            </h1>
          </div>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="flex flex-wrap -m-4">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/Py_Calendar">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Python Language
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Month Calendar
                    </h2>
                    <p className="leading-relaxed text-base">
                      Using Calendar Library
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://1drv.ms/f/s!Al4ms1EwsO8BgZYiUWURuwYvaVP1Ow?e=ohDtX2">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Python Language
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Python Notes
                    </h2>
                    <p className="leading-relaxed text-base">
                      All Notes OF Python with chepter wise from code_with_herry
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/Py_Loop">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Python Language
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Python Loop Message
                    </h2>
                    <p className="leading-relaxed text-base">
                      Python Loop Message in any website and app
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/Py_QrCode">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Python Language
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Python Qr Code Generate
                    </h2>
                    <p className="leading-relaxed text-base">
                      Qr Code Generater Upi, Data, link, upi Amount Software etc
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
