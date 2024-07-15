import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard2 = () => {
    return (
      <div className="text-white w-full flex flex-wrap justify-center text-center items-center">
        <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
          <div
            className="flex relative h-48 rounded overflow-hidden"
            style={{ backgroundColor: "#10325c", justifyContent: "center" }}
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              style={{ backgroundColor: "#181818", width: "fit-content" }}
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="   text-white text-xs tracking-widest title-font mb-1">
              Web Developing
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              HTML, CSS &amp; JS
            </h2>
            <p className="mt-1">$Free</p>
            <div className=" flex justify-center  mt-2">
              <Link
                to="/HTML"
                className="focus:outline-none m-2 text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 sm:w-1/2 p-4 w-full ">
          <div
            className="flex relative h-48 rounded overflow-hidden"
            style={{ backgroundColor: "white", justifyContent: "center" }}
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              style={{ backgroundColor: "white", width: "fit-content" }}
              src="data:image/png;base64,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"
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="   text-white text-xs tracking-widest title-font mb-1">
              React JS
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              New Ecommerce Project
            </h2>
            <p className="mt-1">$Free</p>
            <div className=" flex justify-center  mt-2">
              <Link
                to="/React"
                className="focus:outline-none m-2 text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 sm:w-1/2 p-4 w-full ">
          <div
            className="flex relative h-48 rounded overflow-hidden"
            style={{ backgroundColor: "#9ea0a3", justifyContent: "center" }}
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              style={{ backgroundColor: "#181818", width: "fit-content" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa--9xZ9Tn_I9_9xyKvHVzeD7b9I3AxJoGOw&s"
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="   text-white text-xs tracking-widest title-font mb-1">
              JS Developing
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              Java Script (JS)
            </h2>
            <p className="mt-1">$Free</p>
            <div className=" flex justify-center  mt-2">
              <Link
                to="/Js_cource"
                className="focus:outline-none m-2 text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 sm:w-1/2 p-4 w-full">
          <div
            className="flex relative h-48 rounded overflow-hidden"
            style={{
              backgroundColor: "rgb(248, 243, 243)",
              justifyContent: "center",
            }}
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              style={{ backgroundColor: "#181818", width: "fit-content" }}
              src="https://img-c.udemycdn.com/course/750x422/4898996_e73f_24.jpg"
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="   text-white text-xs tracking-widest title-font mb-1">
              Python
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              Python Programs & Notes
            </h2>
            <p className="mt-1">$Free</p>
            <div className=" flex justify-center  mt-2">
              <Link
                to="/Python"
                className="focus:outline-none m-2 text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductCard2;
