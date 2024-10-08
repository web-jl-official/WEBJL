import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";



function Allproducts() {
  return (
    <Layout>
      <section className="bg-gray-900 text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
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
                  src="data:image/png;base64,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"
                />
              </div>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  DSA Program
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  DSA (Data Structures & Algorithms)
                </h2>
                <p className="mt-1">$Free</p>
                <div className=" flex justify-center  mt-2">
                  <Link
                    to="/DSA"
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
                style={{ backgroundColor: "#10325c", justifyContent: "center" }}
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  style={{ backgroundColor: "#181818", width: "fit-content" }}
                  src="data:image/jpeg;base64,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"
                />
              </div>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  C++ Language
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  C++ Programs
                </h2>
                <p className="mt-1">$Free</p>
                <div className=" flex justify-center  mt-2">
                  <Link
                    to="/Cpp"
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
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  C Language
                </h3>
                <h2 className=" title-font text-lg font-medium">
                  C Language Notes
                </h2>
                <p className="mt-1">$Free</p>
                <div className=" flex justify-center  mt-2">
                  <Link
                    to="/C_Lan"
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
                style={{ backgroundColor: "#10325c", justifyContent: "center" }}
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  style={{ backgroundColor: "#181818", width: "fit-content" }}
                  src="data:image/jpeg;base64,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"
                />
              </div>
              <div className="mt-4">
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
              <div className="mt-4">
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
              <div className="mt-4">
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
              <div className="mt-4">
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
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUTExMVFRUVGR8XGBcXGBgZFxUZGBYbFxkYHRgYHikgGh4lHhgWITEhJykrLi4uFyAzODMsNygtMCsBCgoKDg0OGhAPFy0dHR8tKy0rLS0rLS0rLS0tLS0tLS0rKy0tLSstLS0tKy0tLS0tLSstNy0tLS0tNy03Ny0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcEBgECAwj/xABLEAACAQMCAwQGBQcKBAYDAAABAgMABBESIQUiMQYHE0EUIzJRYXEIQoGRoSQzNXJzsbMVNDZSYnSywcPwJYOi0SZDU4KS8RfC4f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAdEQEBAQACAwEBAAAAAAAAAAAAARECMRIhQSJC/9oADAMBAAIRAxEAPwC8aUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKViX3E4IBmaaKIYzmR1Tb38xFY/Ce0NrdMy29xFMyAFhG4fSDsN128jQSdKrvi3fLwyBnTM0jISpCR43U4Iy5XzFbnw3jEc1rHd/m4niE3PgaEK6+Y9BgdaCRpVD9q+/SUuUsIkCA48WUEs/xVAQFHzyfgK1iDvk4srBjNG4/qNEmk/DlAb7jWvGpr6fpWudge1ScUs0uFXQ2SkiZzodcZGfcQVYfBhWx1lSlKUClKUClKUClKUClKUClKUClKUClKjeP8dt7GEzXMgjQbZO5Y+Sqo3Y/AUElSqdv+/22VsQ2ksg97usefjgBq2LsR3r2nEpRBoeCZvZVyCrkblVcdT8CB8M1cosClal3kdtU4TbeJpDyyHTEhOASBks3npXbOPeBtnI+ceNdveI3TFpbuUA9EjYxoPhpTAOPecn41ZxtH13WLxHiMVuhknkSKMYBd2CqCdgMmvk7s/26v7OVZI7mVgDzRyOzxuPMFWJG/TI3Hkau3ve4it1wD0hPZm8GQA9QGZTg/EZxS8cE1fd6vCYtjeKx90aSP8AiqkfjUn2Q7ZW3FFka2LkRMFbWunOoZBAznGx646V8g1b30b7/Td3MH/qRCT7Ynxj7pT9xq3hkTW6d5XeqeF3Ito7ZZWMYkLNIVCliwC6QpzsoPXzqvb3vz4i+dEdtGPgjMfvZ8fhUB3vX3jcXuj1CMIx/wAtFUj/AOQatOYY2PUVrjxmGvpbtzx+5Ts/HdJKyTvHAzSJhTmTRrxjpnJ6VVXdlx+7uOL2gmuZ5QXbIeR2U+qfyJxVh9v/AOi8H7K1/wBOqr7ov0xZ/rt/CeszqjYvpFD/AIlF/dl/iSVjdwPEvC4oIycCeJ0x72XEg/BG++sr6RX6Si/u6/xJK0TsdxH0a+tZs4EcyFj/AGdQD/8ASWFak/J9Y/aL+d3P7aT+I1Xf2yv2i7K2wU48WG3jJH9UorMPtCkfImqQ7R/zu5/bSfxGq4+8L+i9h+rb/wAE1L8FV9geDJe8Qt7aXPhyOdWDglVRnIz5Z04+2to72+xMdpexxWFvKUeEOUQSS4bWy5ycncKNs1E9z36Zs/1n/gvW5dpe+y9inmhiht1EUjx6mDsSEYrn2gB0pd8vQ2f6P/DLi2trhLiGWHVIroJEZNWUwSAw+Aq1arruZ7W3XE4riS5ZSUkVVCqFABXJ6dftqxaxe1KUrjNQc0pmlApSlApSlApSlApSlApSlAr5l79uNvccTeHJ8O2UIq+WplDu2PeSQP8A2CvpqvknvS/S17+1P+EVrh2lZHCu72e44ZLxISIEj1ERnOp1j9ts9BjfA89PlWucBnMdzA6nDLKjA/EODV/91/DDddnDbhgpmWeMMRkLrd1zjz61G8J7ho43V5b13KsGASNUGxz1ZmrXl3piC+kjMTd2qZ5VhLAfFpCD/hX7q7/R24TBPJePLEkhRY1XWoYASeJr2O2+hf8AZrw+kf8Az63/AGH+o9Sn0Z+t/wD8j/WqfyfVOcXhCTzIowqyOoHuAcgD7qurtQf/AAlb/qw/xBVMcf8A51cftZP4hq5+0/8ARK3/AFYf4gq8vgp7s1w/0mfwsZLRykfrJBI6/iorYe5riPgcWtyThX1Rt8mQ4/6gtefdAoPGLQHoS4PyMEgrW72J7W5kRSVeGRkBGxBRiv8AlWr7tgk+EE3vFYiR/OLtWI+Ek2ps/IE1E8WPr5v2j/4jW3dytl4vF7f3R65D/wC2NgP+orWocU/PS/tG/wARpOxffb/+i8H7K1/06qvui/TFn+u38J6tPt9/ReD9la/ujqqe6aQLxezJOBrP4xuB0+JFY49UbN9Ir9JRf3df4klV6vDfyQ3IJ5ZhCR5c0ZdT8+Vvureu/wCuA/ElAzyRBCSGwTrc8pIGRzY2yAQR5VEdlbB5+F8SAiBCCOYSZGQYmy6lc5IKEnIG2PjWpc4jTHYkkkkk7knqSfOrs7f3Sns3ZRc2pY7Vzytpw0TgYfGknKnYHI299UkauLtdwWV+CQzCeVkjtLRjCB6sblde5O4DfVC7DLFtsOXcI0juqn8Pi1o+AcM3VgowYnBJLbADOfsqQ75uFw23EWWFVGoeI+JTIzO7FmLgj1Z39kE7YPngadwq8EM0cpTWEYEpkrrHmuobjIyPtrP7WcbF9ctOsCwBv/LVmYAkl2Yk+ZZmJwAPhVz9ai1O4DiccEDq76TNdLGg0ltbeCzacj2emdR22+NW7ZcT8TwyqXBDtINTR6Amgkc4bBAOMKQN9iffVO9wvG7e3gnWW4SImXXpYrlkSE6jg7hRscj+r86tZe0UWRpW6kxlzphk2Vy+k+yAwJXCgZboSOprly7aSlrJIwQmIplDkO4LI2Vwh06g2d8tk4x55r2XVjfQp09BkhW+e2VHyH2VEjijqATbMugKh8SWMFTI0Y06ixDABiWOc8mAGJo3HUXKtLaxkSrBjxQcSMoOnG3P1xHsSBnIzgQTePj/AL/3+6uahYePwsyKLhWLzvAAiMQXjV2ZMjOlgACWO3LtjNZVlfiTwyFmIcvu0ZTTobHMGAIzjl23G/xoJGlYtvI7KhMZXKZIdgWRtsI2ksCeuWBPTzzXqM/2Rt88H8Mj7qD1pXFc0ClKUClKUClKUCvknvS/S17+1P7hX1ozAdSB5ffXyZ3qKRxa9z/6ufvVSK3w7Sri7seJNa9nDcKoZoVnkCnoSju2Dj5Voz99/EZXVVS3iVmA5UYsATjq7EfhXPZ/t9awcAmsWLekMJI1UKcMJiTr1dABqOQTnl+NVtwmEvPEq4yXXqcAb7knyAG5PkBSTvRZ/wBI7+fW/wDd/wDUepT6M/W//wCR/rV4fSMsCXtrld1CmF/7DH1iA/rDX/8AGqx7N9qLrh5kNrKYzKuh9gcjyPMDgjJwfiasm8T6xOPH8pn/AGr/AOM1dHakY7JW/wCpD+MgNU3wHg019OsMKs7MeYgFtCk8ztjyH+96v3vWsGj4J6LFC+I3hiQAA6wrAKVCkk5wB0zk05fIRUXc7+mbP9Z/4MleXevZiLit1gYV3Eo2xnxVDk4/WZqk+6jg1xFxK1uJInjhDSZkcaVGFaJhlsbh2Cke/atk71uzDcQvo5rZ4grBYHLMfVyFnZS+kMQpBADdMkL12pv6PjF+jlZar24mx+bhCfIyOD/+hqruKfnpf2jf4jV7d0HBJ+HRTloZXknGMBWQI8RIWNi6hlLa2bWAVA674FRydz0TS6pRdkPNpODBFgMC7SAZcsozgAbnDdMDLy9iR7doB2YjOnGY7U5wNzoiXPx2GKq7ul/S9n+u3nj/AMp/MVdN3wt7qzisJI4Qno7KsZuMyardgkLqyLzHYFhjGevTFSXA+7yC3kEqpBGysHXw4hqUhNGlXkLMF+sR1JHXBK1mXJiqk7+wJOJRmMai0Ck4B1HDuMkdfIfZip3uYtmS0u4J4ZFW5kWA6l0/nIX2w252I+8ZIq0b3ssZA35Zd5aF4vziru7ai+VTOrIwD9UEgAA1qk7Qm6lh8ASSekwJouLt3L4gQhjGuvZRzZIOSN/g31gpBOxN3jLrHGNLsC8icwjbQ2lVJZjq2CgZbGwNXVaXjRWlvZTZkT1NtII7aWRNPgYPOdpULadWACpYjfFWHwzgsFuB4cMatuSwUBiSSTzdTuT51nI4O4II+G9S8tHytd9jlZRJEl0iGGeZhJGMJ6O4UnUcHRg7nSSCQMHc1YnZjuymgwws7R9ajU13IZWXAYkIkSaUYtow+o4A6E1Ld50qWNzaXBj1RkXBb1rqFfTG+QoOGU+GT4fssxJIJO9l2f5tP1R+6m0VFwHsXcWty1hHdwW3jWepzAjGVz4hQuPFJIwCRqVh1G2wrZ+O9jH8C4kkvr+V2iQaY2QEtDgqUjUDLlhnGRktUhfmSPjFuwc+HcW7xsmkEFoGMinUd02lPQ74G22RK9roddlcpzc0Tjkxr3Ujl1EDV7skDNQaVxLsTasbrxUnlBmtt5bhVVgoQFQ2c4AkcsGwWzhd8GpeOzsIpJDpslY36tzSBmMzJkbYGibLSaU39/mcVhJJYyszTMHF0/ivmWR1xZIQSHGGaMKs2SyguXUKABrEjadorT2ljJeSF75ikClhMDo9IUSatEufG0jLIoIJ1E4FFqWXGYCUVZkJa5liAjjbDOodmjY74I6l9gSPjisyyvQ4jIWchjJu6eHp0sRzqwUgHou24wfjVYv2wmeOUR2k7s1glzpEpRX1nnKaMHl8ZizphmKKOXpU5c3l+5utNtCuEtpImkywkLElzsNLOpAVEOCCqnB1AmDdba5yqEoEOnSVeRS8bsFIibSWBJyN8ny65rJWT5D6uwY4YZz7uXbrt+IrX/ygvMPHjUJcxAaFBPhlUJhYliVchlJYgbEYzkYkYLZs5MsjflDMNgo06SBGwCDkXcL1yVQ6jnFBJhs+/wB3ltj/AL1zq/7/AHVi21sF07Nys5BZmYjUzE7ljtvsPIYAAxge0aKukAAYBwBgYG2w+HT8KD1U5GaUU5ApQK66/j5Z23+0V2xXXX8fLO3n03H+/Og6mXqQGPLnGMZ+Azjf4Gutwz4YKgbYY1NpVsncZAJGB8N81xK3K2znkzgcpPXoTjDfaMbdK8L1/wA5yK2Ahw74UjUeoAOnGDvjc/Kg87guC5DQJ62PBIJLA6AQwyuJD7K7nqnXpVZd5fdi/EJWureeIzlijIQVVsDkXUucSKuxJABAXpjeyLq4YGTSY1xNEM+GzkhvDBDdMuQcBgSFGknpisCaact+dmwt0CNMcah4fDU6c8xeIFjltmZhgY2zZcFCW3c/xV2VTEiAsV1s40rgHLHGW07YBAOcjG29WZ2A7rY7LEk8fjzOjqfEKrHFkFNIQFtWtS3NvgeQORUvDCS8WWncrcXJAa5BYoVlGwGlS2QgER/Nqwzgk1Fx8Pt8WylbV8ZiCtcyS+Kr+yiaiSVVJDI5I2U6BykmreVonbz0FUxMnDo9Vu6HWyyEGJvWR5KqZERyc7g6s7Z6aLJ2Y7Pu7FJBIdMQ02wnkCvI27gB3yMA8nVRnqcVm8M4BARE0bgnwLqJXhtGIZtQUNrA0kYGIgfLTuxOTI+iRxKuqS+CmG2hGt4rcYiLsITnSyMQWwzebgBx1EHe3vbG1hkjt7W+WN45XIjj9GGm1xrbxD4bjORzZJ3xt0rAv+1NuHLNZx6zLaSZurlNXiS9HAy4UonuA0gk+eKw7ri3DRu8UUmlLhWN1cSTtEQ6hUkUB8KdI0EZ1YXTnJIxT21tYQQixQsIrZykNizMjRnxGyZGTUq75OAQCMEkZoJde1MmhzAlmGK3TAW8E0+t0kOGBVEBO5Bz/W1nY4O3dkJ7q4llknY+EPCMY8Aw68xBiRrJcxhiSA2+rPyqqOJd5crBhF6UAY5nJ9TFp8Rhokj5WJQsWyramGRhsqSbG7nu0fptvLrPrUZNS+IZNmgjwwyeUEh+T6pyPKmDdL7isEDIs00cbSnTGHYKXI8lydzuPvHvrJmiVwVYBlOxBGQfmDWq94PZBuIRxtFIsc8JLRs6K6HIwVYEEgHbmG4IB3IGKe7Y9t+N2kzQ3EssLa+TRHEiyR5PMrBWyfZ6E43zvSTRv3dPCGuLlWSNWsmkt18OJUGHnZidWSWb1Yz0ADL1ya2XvK7WnhVn46oru0gjQMSFyVZyTjf2Ub7cVo/0e53kbiLyai7SIWLe1k+JnV8c1JfSFTVw+3XKrqu0GWOFGYZhknyA99M9jf8As3xM3Vpb3BXSZokkKjcKXUMQD7t6rq4wO1aKABrgDsfMlYnUDPu2Bx71U+QreOwCaeGWQOMi3jGxBGyDoRsR8RWm30ajtVbsGJY27ArpI0gRtghuhzk7eWn4ioN47aTtHw+8dCVZLeVlYdVIiYgj5GtF+jxn+T5hnb0hiuM4AMUZwM+45HzBrd+3OP5NvdWSPRps4ODjwm6E9K1DuCuRJw5sIqlJNB0tkMViTmx9U4xkeZBPnVGB9Iq3drSB0B9VIXY5xpUgJnPv1MowPfVq2vsJ+qP3VWH0grySOyjVCMSFkcFQwK8p2z7LAgYbr1Gd97PtfYT9UfuqDD4lY+JNbSecMjH7HhkQ/iV+6vbisKPDIkhwjKQxzjC/W38ts7+VeXBb/wAZZPfHNJEfhokIH/TpP21i9tbjwrC6kxnRC7YPQ6VJwfnigpbs8nDoDYtJIp0m9dvakChQ4Uj+tBpjYhdizPnG5rM4Lxq0ijtVRJmMXDJz6tBrVpJFDSoWB5m0yHflQHAzk1pa8Rjt90zqtHynskK059YpwctbqFZcfWMo3XVg58HEVgIVInC2twkCnLM8KTYMki8uNUvhSEKNl1nAJOao3M9qnMDRxWTEtwuJkTxCiuBjX4KqQcIHcnTu3hgHGKnJ+LXcxujHFbASR2zws2XWUqzCUh1GDKrAKq5BDKhxvWo8GF7rhj9HSNP5Ra2kjjjIQIqE4iB2KD8pZ26nlyWGw2Ts3w+/kezeafP5Rd+MQVHijEiJMrKCRpLsFTyAGMYoNtD3DyPiYANPG6BY9zCoQtCwdsq51AliowPwzbdSRr8V2BkM6nKhWQpgRtoUAouoBd2J0oct5QHZvg7hbPxJtR9HuEdcuPE1SqytglSsoyNR07HPTANSnD+Hp4URZvEzZeGW0DTKuF3YkOR8F1kHUchsZEErF4aZGSTHmTmcswErOd9bE4JBAzgADAwBgZaAKMBQAuAABgAHGw2xjp0rEZkGsZJxCuQXxsdeMjUNJODzYGfecbZbAZY6R9UE4677eW+M+89fKg6TXaqSCyjHvZQenxYGlcXF2FYjUox5Ernp8XH7qUGUPL7fKumTtseh9w92x+P/AGNdwa6e7Y+yep+Wx36/Z5H7Q8Z1OltkHq8ZYkgHB2bGOX4599Y99n1vrVXkT2U1PGctzEEkMD5DTtpPXyyJFODyxjkxljnB35W23Ue/PvrzutZ1gShOVdOlNToctltyQ4IxgadsHr5Bi3kWTJzXJzJGNMYVdAymdDYBKHq5ySObGKj7vhyOSWty+bpJsvMSDoVAtxGAW5V6CLAyR06ZkLyz16xruSGkjIEZVPD0MpIV+U6DjLgkk8wHurCn4JHI2Tbl83AnzJMwAdFTEirk4YYOI8BeVs42yENO0EZXK2SZu3OlcGR5HVgpidtIju2OjUD0yu42zrz9qbceABeCQNJLywwrFFNpYtn2S0Xh5DZGRIw3yMmtwTgAGki3sk55JTqVmJZlYZD7aHPLqk3yBgdAaxZuGSop/LEiCQs5EVvCuGdn0s4OrGnI0AY5o2LE5xQV2vHGlERSHiNxkSIzSeLzrJgYlEYCrO2dCOrYRXjJ1YxUW1ldgI38npEFRo2NwUQCIexDLrcZjUBczEBixABGAKsDjXDIlSbxr68cxwRhvXHCKzKXL6QusNqGp8ZCNtjTkQnGOz9mnpXhcOnmMTW+nV4rnwyvWItqDxjBGnfJUZ1DAFGhzxTR+H4t5aQ6FaI4kE0iowOAwjRjJGQMIvNoDA7daiI7WPMKm6lc88WmCJ2K5LYWMsyiRWLksNj6zoc1Y3F1S3kl02lpCF4jGylpIwcA5LoTIMb7lOih+gwa1yTjj600XECj095AIISR0jAdNMWr7M8x0nH1qujWbXhqyeCEguZTIrqN1UO6AnVGdJyFG5Tr8d6l+yHEbywmiuLWFU8WFvzjHw5xE3rG3Yc2Vxp+Ow3BrBjubiXwT4t06maQAoCo8R/6hL6RI2TlQBsfrVa3cx2Ls5rN5Lq0R51neNvFBJGkLylG2GMnyq2o3rsV26tuJIgVkScoHaDWrMo6HBHXGOmARkZAyKlO1HZ+HiFu9vOMqw2Ye1Gw9l1PkQf+x2NVf3w8H9Fl4a9jDHblXkUPFEQFc+EY8rCpZs6X2wc7jG9XIhOBnY+dYVU/cZaNDPxOJyzPHKiMXOpiy+IpOfPcbfDFe/0imxw6A7bXaHcAj8zN1B2NZvd1cxnifFQudTyB9ypDBZZoiVwc4GkZzvkmp3vG7J/yraejhlRg4kVmDEAgMpOFI+q7e8fCr9GT3fH/AIZZf3ePpjHsD3bVpd4f/FcI1dLc4XfzjfJ93kPuqxuBcNFrbQ24JYQxrGGOxbQoXOPjjNUvxjtXHDx+W6Z08KBoY8iVcsjI0blUUHxMGRmIyCNI+VQW521j1cPvFwxzbSjC7scxNsB760f6PMRXh8wKkH0lwc+ZEcYONtsdPPcGrOilWRQykMrDIIIKsCNiD0INY0UVvZwkKsVvDGCTgLHGg6k7YA99UVz37WbTpZwppLu8uAwJ2WEk6VG7P/VUAkkgAVZ1p7Cfqj91fOXex2nN/eAx6VgtlKxl2ILGQfngg5sk4K4yeVSRjNXCO8fhkaxr6SHZsIoiSSUswAyo8NSCdxt8R76Dv2QuI1vL+FJRITJ47DVlkZmeJkK/VAEUePeDq2zWd3gn/hl7tn8nk29/qz7qqDgvbSKHi818omliuhIkYJiTXpbX1kcacYVQp3Or5AznHe88Xlu0C2yKt0jxAyTHVrwy+ERHGQrnlxlgAJFJI3wwaTxfjVqvpojt1AzaKoIV9HhBdSEb+Jb+qAzszFkyebaTuu1xElwUiKj+UoJNss8YC41AgZcOI2AUghQwA6iorhaRysgBib0kcojtSwLWwRhAdbajEojQ5Ay5YasgEDaOBLLKIZEivpBNG9yGPhxgPGFHMQuHMmjQjdUWVdPmaDnht/xBpo8waVTi8hkVUOEyh1eExwNAAuWc56kE7MQZfgFveK1o1xMg9Hnupp8sm8colVLkY1aBkzBVOM4ONhWbacIn0fzOKL8jaQCe4kfw5TkeC2/PCQA7g5yW333M08DIsuZ7WEx26zAxRB2gkfxPEuFDEkofWBVxvuPmGN2f4VIi2qyTl2jhmjkVNZEviyKVcEFfWL9YgHG+dO1TNjwkBIw2uQi1FuSVUCVSEyx1gsCMnlZt8tkHY1kzW+8w8W4IPhcsYC6MHcowUZ1HOvc4HurLa1BL+rdsyo3M50nSEw6gsdIXHsgDJUnG+TByIAMg/WUR8znmADbYGwbc5IH2nG3uuknI0nJxkDOdJOx+WD9ua4VAp9lFy+fixx16Dm+/YV6LJnHMDzEbfDO3wIx94oOwyeh+8GlcodvP7dqUHNCK5rig40j3Vwf867GuD8vOg887jp1+O+P3GvFTnT1Pte4D5EE+18cfVPTODkEH4dfv/wD7XXB23HU/Ij3H4/H4fHFBHPEdI5R+bZcyNsDvyOAuCvlq8x7+tYc1q++Cieo0gmMyyxnVk6yWbxFOkY2O6Hc5qZWLBU5bbI6Doc8pwPLy+Q+3xS1HJyudIZQWYkgN1Vs+2uw3OTyr160Gr8UsyElDXMsKiBDiLwo/RhFjLqwCFoTg6hnGMjC+UB2i4fbSek+JqkLRx3JRriR9OkEekwBVfWo1MCpH1FyAGFWDDw4Lo0xRpoQoh9oxA42H9nbZdvZHToMRtKBFM8EPqWwkYT1YTGpovPQuRqOMcqbLk5CuOKcNQ+kmG1DE+FdgwQSP4gJJ9JtpGYBJATnwyCDjA1DNePEuz176/Ratjx4ptKrb28dwjEY0ZBaG5B0glWGdOTvgHfOIXEbrIDPeS6rYS+ojcbAtpliIXSGzjSmd9IJ1DeozivDkcXBXhdzcM0URIllCCViQMBmY4lC4DP1AjAzsAaNB4vwOdHlM1zaAi7BJnu2K3ClchZY0IAeMBebShONvLO3d0fEbez8aza8hl1XB8Eqki51DChpHQKWcKCo1NqAOkkAU4vDLCJ9Fnwq1BMJVp5FKvHGFy2nl0iNggAwN87Z6xV/xO6Yz6eI26jxlk02tsZWZGUhA7JE/rWGjqW2U7kCguqoPtNx30ePEehpn5Yw7BUDY9pz10jqQAT+JFQ3vC7qQuTPxe40TFwSjQx82rlfxJkKoug86hRzMBjaouTsQULYsyMSBw91dxM4jLRq7skUfOhLdQTp1E+YoPLs9xOWznt7g3VhGyh1kCEyPKrurv4rqTqyxzqVttBwCRpO//wD50sQi6opi5BJEYBQEDyaTQSCcgHT88Voa9jZMsAtqui4jGiJJrh1DrGwjQyNh1w7M8bENs31SKyU7ETRlcvIgW9I1LHDaozFHJkikbmQKVUaSuk55M+V9DM7R98s92vg2lrJGsoZNQYmVjpIxGUHKRlSSMn5daq5C3IVgjAaNgC3R9G7NztgMNONsZ6b5rd04RYRvCs9zEVW5mVhJcvIfBDMNbJBvFK2E3BwcAnzFYPCrjh6m0Okyn1okWK11lyxTwYT4pw7bN6xQDzLsOtWVEPwvtNfwKqw3rRJ4eQivhQFJULoUYEhx5jJyMmvTiXp10rmee5mCQi4IkErKuSNsPsq4LcwGkkAedbTwq3uWjiEfDL5ytrJbO7EQKXdd9RCAPGoxjWQemSSorJk4ReaSGtbC3C2Phk3Fz4jxRBpNUyjWzBW1Mo2IHKAdsU0afc8CMSz5lKtCsMyjVGDmUgGVRGxJUEqF074lQnFTknZKPNyqpPKsVxb6BCHcNFME1FHKjnZWUnPT1eNQyROS29wROp4laxk28LmKxtWkbwwyiMxaVXbJBJU7auijGMy57Otc+ka7ji15q8Cb1caQQ3KlVOuMvlTpDezykbdcEiarGTsrHFIxNqDp4lHu8iQo6FCwCqz5GDqwh6+Iu+xFZtgtrBJDqfh6aeJTAHUzuUIYblFwkm64OQq8nslakR3eIXlYcNeQ+kJKGubxvXx4Yu2EORJknZwfb6ncVO2XY4QMGEPDYQl0ZQwiLkxHUFQtIcxyDbmBxnoBjeDWOz3am3DWSpctL626XRb2gUMpw4jYNhgOYHIGSSuocuakOAcTldbPRa8SnxbXALzOEBOdg+2CWKAKc8oce1jbceH8MMegG8J8CVspFFHGp8YgrHIig9A2Qw0+0Cc9azLThEa6AWuJDEGjDSSOxIk0ltWSBINhzHONwCOlQaraWdwIkHoFrAF4e0X5RMZPDwSBC/UtDgKWJ9/Xapoi50yD0m3iYWqEeBCZWifm9aoPtx8raUx5H7Zm04ZFGECQooRfCXYErGOiA7nRsOX8KzVHToOuw/yoIyW0ZjLmachhHhUCoE0nJKNpBOr6wJO2wxWSbNSXOljqdXOp2K5QJgqMnQBpHKAASCT1zWWPnXOKDySAAnCqMtqOB1OMaj/a+Pwr1xXNKAKUpQKUpQK4xXNKDiuD9ldqUHRvmfsH4V00dPaOGz1A9/u6gZ/Adete1cYoMVbcAg6F5ScFmJYasZ6+/Hv8h9nnBbaAip4aKi6AqR4CjAwi74VRjpjfA6Vm4/3/AJ1ww69eny/+jQYLWrHrLMdiNtCbnPNsoO3l5bDruThy8Igb2wWBURHxZpHABIwuksRrbXjV1OVG/Spl0znYHp188H/KuruBnmUcwH36Rg79TnA+Y60ELb8IgTGiCFMgIdNuDugUoCcDkXAIOB06g16yW8jDGJeYMhy0ahTpca29rUDsB7WMqdO2akjJv7Tnnxsp25QcHb2fPV8cZry05KerkPrG3LDlGHGojVzIegXf2lOBjICHuOGyMTlYULRlSXklkMeGcqQoK6lbYsMqeoyfLBk4aX63USNLErn0e3QkvE0emaJ5NepFyBg6sBxgqa2KCNwY/VRJgyZ5izLk5BTl31dW6Yz514W6zFYszxDMDahDESrPy6ZIyWOFXJwhznUPdQa5dcEEqSFpeJTBoo3wriJXICHxYwoXRIcbxnG4PLuDWHf9hrYGd/5OicnQ5e4uXxLs+TqOTFIDpLHGDq6k5rZpuGs6Nqmu5NVp4ZClYtbHcyAELonbpvgD4V5X/ZSCUThrfxfFhijPizSYk8JiVVsZK6SFOobkn55DXLuxtLVpmLcJgEM8bOBArHw3JKJKurMb4JKsOpGcAZrpJxaGF8HiN05hvRAywwIoZpgvqZdKASY8OQCRcEA43OK3GXs/EWlIhtgZGiYlog5bwsY1gkZIGQp+rnO/Ss4WRy2JGXVIJOVUGwC5QnSdQbScnrzEAjAoK/tLWF2iHofEZ9FzJZl53bCwuvrC+TiS3321bnSBnOBUjwXgpU2xHCreDS8yEySLJJDEdZXQcEsrl35M4UE+R23L0FcgkyHEhkGZH2JUrjAOCuGOEOR0OMgGu0VjGuMIo0szjbdWckuwPkSWbPzNBr3B0ucWytLZRnw5tUduhZThxoMRJHKuU1e8+7O2Xa2krImu6nkLWxVikaxB3On1wBX1cnuTOBvkbGp1VxsMAe4VzQRT8KVlcMsj6oBERJK2HADbMAThznmkAycjc4rMNmup2CRguFBYrktoJ0hveFycb+ZrKpQdSDvv5jGB5bbb+/f76afnXalBxprmlKBSlKBSlKBSlKBSlKBSlKBSlKBXFc0oOK4I69envx/9V2pQdGQHOwPTr8DmucfvrtSg66fieufL7vlXAjG3XYk7knc59/zO1d6UHRYgOgAxnoPfufvrtiuaUHGK5xSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB//Z"
                />
              </div>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  Not Available
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Coming Soon
                </h2>
                <p className="mt-1">$Free</p>
                <div className=" flex justify-center  mt-2">
                  <Link
                    to=""
                    className="focus:outline-none m-2 text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2 text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Allproducts