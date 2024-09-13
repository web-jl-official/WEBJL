import React from "react";
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
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gUxm1H3dLt2Rde_okiPbGA.jpeg"
            />
          </div>
          <div className="mt-4 text-left">
            <h3 className="   text-white text-xs tracking-widest title-font mb-1">
              WEB JL DSA
            </h3>
            <h2 className="text-white title-font text-lg font-medium">
              DSA COURSE (By WEB JL)
            </h2>

            <p className="mt-1">$Free</p>
            <div className=" flex justify-center  mt-2">
              <Link
                to={"https://webjldsa.web.app/"} // "https://webjldsa.web.app/"
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
