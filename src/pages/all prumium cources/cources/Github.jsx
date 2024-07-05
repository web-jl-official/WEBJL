import React from "react";
import Layout from "../../../components/layout/Layout";

const Github = () => {
  return (
    <Layout>
      <section className="bg-gray-900 text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="flex relative h-48 rounded-xl overflow-hidden bg-transparent justify-center">
                <img
                  alt="ecommerce"
                  className="object-center w-full h-full block object-fill rounded-xl "
                  style={{ backgroundColor: "#181818", width: "fit-content" }}
                  src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/download.jpeg?alt=media&token=eabe7e0d-46b3-4dae-8bfa-a00b885852c1"
                />
              </a>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  Github Project
                </h3>
                <h2 className="text-white title-font text-lg font-medium mb-1">
                  Web JL Websiet
                </h2>
                <p className="h-40 overflow-y-scroll text-gray-400 border-4 border-white rounded-xl p-2 ">
                  Certainly! The web-jl-official repository on GitHub is an
                  educational website that offers language notes and short and
                  long projects for revision. They provide various types of
                  code, projects, and source code programs. You can explore it
                  further on their{" "}
                  <span className="text-violet-600">GitHub page 🚀.</span> If
                  you’re interested in learning or revising programming
                  concepts, it’s definitely worth checking out! 😊
                  <br />{" "}
                </p>

                <a
                  className="flex justify-center text-center items-center m-4"
                  href="https://github.com/web-jl-official/WEBJL"
                >
                  <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                    Go to Link
                  </button>
                </a>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="flex relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  style={{ backgroundColor: "#181818", width: "fit-content" }}
                  src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/download.jpeg?alt=media&token=eabe7e0d-46b3-4dae-8bfa-a00b885852c1"
                />
              </a>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  Github Project
                </h3>
                <h2 className="text-white title-font text-lg font-medium mb-1">
                  50 Projects in 50 Days
                </h2>
                <p className="h-40 overflow-y-scroll text-gray-400 border-4 border-white rounded-xl p-2 ">
                  Explore over 50 mini web projects created using HTML, CSS, and
                  JavaScript. This repository by Brad Traversy showcases a
                  diverse range of topics, from expanding cards to animated
                  navigation, sound boards, and more. Dive into the code and
                  enhance your skills! 🚀
                  <br />{" "}
                  <span className="text-violet-600">
                    Check it out on GitHub
                  </span>
                </p>

                <a
                  className="flex justify-center text-center items-center m-4"
                  href="https://github.com/bradtraversy/50projects50days?tab=readme-ov-file"
                >
                  <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                    Go to Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Github;
