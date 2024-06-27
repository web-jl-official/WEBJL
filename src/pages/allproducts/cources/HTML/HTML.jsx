import React from "react";
import Layout from "../../../../components/layout/Layout";

export default function HTML() {
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
              HTML Programing
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" />
          </div>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="flex flex-wrap -m-4">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://1drv.ms/u/s!Al4ms1EwsO8BgZYZyB4UQu_2nbgVuA?e=yx3erX">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Web Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Nots{" "}
                    </h2>
                    <p className="leading-relaxed text-base">HTML, CSS</p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/HTML_Calculater">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Web Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Calculater
                    </h2>
                    <p className="leading-relaxed text-base">
                      The calculater make with html, css &amp; js
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/HTML_Number_System">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Web Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Number System
                    </h2>
                    <p className="leading-relaxed text-base">
                      The Number system make with html, css &amp; js
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
                      Web Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Sorting Visualiser
                    </h2>
                    <p className="leading-relaxed text-base">
                      Using HTML, CSS &amp; JS
                    </p>
                  </div>
                </a>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/texttospeech">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Web Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      TEXT TO SPEECH
                    </h2>
                    <p className="leading-relaxed text-base">
                      Using HTML, CSS and JS
                    </p>
                  </div>
                </a>
              </div>
              {/* anker tag using link for page */}
              {/* <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="/texttospeech">
                  <div
                    style="height: 180px;width: 280px;"
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      Web Developing
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      TEXT TO SPEECH
                    </h2>
                    <p className="leading-relaxed text-base">
                      Using HTML, CSS and JS
                    </p>
                  </div>
                </a>
              </div> */}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
