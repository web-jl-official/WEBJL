import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../layout/Layout';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
  return (
    <Layout>
      <div>
        <section className="bg-gray-900">
          <div className=" container mx-auto px-5 py-10">
            <h1 className=" text-center text-3xl font-bold text-white">
              WEB JL
            </h1>
            <h2 className=" text-center text-2xl font-semibold mb-10 text-white">
              OUR TEAM<span className=" text-indigo-400"> MEMBERS </span>
            </h2>
            <div className="flex justify-center flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className=" w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/DEVLOPERS%2FLIVESH.jpg?alt=media&token=256f6def-e18e-4770-91f9-41976395f544"
                  />
                  <p className=" leading-relaxed text-cyan-400">
                    Senior Developer & Founder of WEB JL
                  </p>
                  <p className="text-white leading-relaxed">
                    I am a BCA student. My Languages Python, HTML, CSS, JS,
                    React JS, DSA, SQL, Firebase, Unity, Unreal Engine .
                  </p>

                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="   text-white font-medium title-font tracking-wider text-sm uppercase"
                  >
                    LIVESH KUMAR GARG
                  </h2>
                  <p className="   text-white">
                    Web Developer & Game Developer
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/DEVLOPERS%2F20240601_191032(1).jpg?alt=media&token=945d0318-b89c-411d-8ea4-06085d288220"
                  />
                  <p className=" leading-relaxed text-cyan-400">
                    Junior Developer & Co-Founder of WEB JL.
                  </p>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed"
                  >
                    I am a BTech CSE Student. My Language is C, C++, DSA. HTML,
                    CSS, JS, Python .
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="   text-white font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Software Developer
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="   text-white"
                  >
                    Web Developer
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/DEVLOPERS%2Fsk.jpg?alt=media&token=6fb4ee8e-fd15-4287-9879-60d15bd59380"
                  />
                  <p className=" leading-relaxed text-cyan-400">
                    Junior Developer & Project Manager.
                  </p>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed"
                  >
                    I am a B.Tech Student. My Language is C++, C#, Unity, Unreal
                    Engine .
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="   text-white font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Sharik Hasan
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="   text-white"
                  >
                    App Developer & Game Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <center className="text-4xl mb-2 text-cyan-400">
              <h1>WEB JL Contributions</h1>
            </center>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="border-white border-2 w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/DEVLOPERS%2FLIVESH.jpg?alt=media&token=256f6def-e18e-4770-91f9-41976395f544"
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      Livesh Garg
                    </h2>
                    <p className="text-gray-400">
                      CEO, Website Developer & Teacher
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="border-white border-2 w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/DEVLOPERS%2F20240601_191032(1).jpg?alt=media&token=945d0318-b89c-411d-8ea4-06085d288220"
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      Jatin Dua
                    </h2>
                    <p className="text-gray-400">Director & Teacher</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="border-white border-2 w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/DEVLOPERS%2Fsk.jpg?alt=media&token=6fb4ee8e-fd15-4287-9879-60d15bd59380"
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      Sharik Hasan
                    </h2>
                    <p className="text-gray-400">Director & Cource Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Testimonial