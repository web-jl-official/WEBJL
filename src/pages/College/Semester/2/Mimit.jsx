import React from "react";
import Layout from "../../../../components/layout/Layout";

function Mimit() {
  return (
    <Layout>
      <section className="bg-gray-900 text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                className="flex relative h-48 rounded overflow-hidden"
                href="/mimit/CppAllProgram"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  style={{ backgroundColor: "#181818", width: "fit-content" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4kRvuYn0wIk6LvGNAHdeZ1uO37jDOE24NQ&s"
                />
              </a>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  C++
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  All Program with Index
                </h2>
                <p className="mt-1">$Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Mimit;
