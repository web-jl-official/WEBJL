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
              MIMIT COLLEGE
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              BCA 3rd. Sem. Notes
            </h2>
            <p className="mt-1">$Free</p>
            <div className=" flex justify-center  mt-2">
              <Link
                to={"/Mimit"}
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezobbmbTc7Zzw9iSJdk-qiVKJh05Nrmu-cCOZeP1g9Mxqyp_IW7_G3l8Nd_m-dw7HgFw&usqp=CAU"
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="   text-white text-xs tracking-widest title-font mb-1">
              Flow Chart
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              How To Creat Flow Chart In PC
            </h2>
            <p className="mt-1">$Free</p>
            <div className=" flex justify-center  mt-2">
              <Link
                to="/FlowChart"
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
