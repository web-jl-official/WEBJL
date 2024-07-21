import React from 'react';
import Layout from '../../../components/layout/Layout';

const PCAT = () => {
    return (
      <Layout>
        <section id="Index" className="text-white container ">
          <table className=" border-collapse border-2 border-slate-500 table-auto text-white m-4 p-2  ">
            <thead>
              <tr className="text-white ">
                <th className="text-cyan-400 border border-slate-600 p-2">
                  Sr No.
                </th>
                <th className="text-cyan-400 border border-slate-600 p-4">
                  Chapter / Topic
                </th>
                <th className="text-cyan-400 border border-slate-600 p-4">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">1.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Generations of Computers
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="#Generations_of_Computers"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">2.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Coming Soon
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a href="" className="hover:text-cyan-400">
                    Topic
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr />
        <section
          id="Generations_of_Computers"
          className=" m-2 p-4 text-white container  "
        >
          <div>
            <a href="#Index">
              <button className="text-xl text-cyan-400 bg-violet-700 p-2 m-2 border-2 border-white rounded-full">
                <h1>Go To Index</h1>
              </button>
            </a>
            {/* This Is For Heading  */}
            <h1 className="text-3xl text-cyan-400">
              {" "}
              Generations of Computers
            </h1>
            <br />
            <div className="mb-8">
              <p className=" mb-2">
                <h2 className="text-xl inline text-sky-400">
                  1st Generation (1940 - 1953) :{" "}
                </h2>
                The technology behind the primary generation of computers was
                based on vacuum tubes. These computers were not reliable and
                used low-level programming languages.
              </p>
              <table className=" border-collapse border-2 border-slate-500 table-auto text-white m-4 p-2  ">
                <thead>
                  <tr className="text-white ">
                    <th className="text-cyan-400 border border-slate-600 p-2">
                      Characteristics.
                    </th>
                    <th className="text-cyan-400 border border-slate-600 p-4">
                      Components
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Electronic Components
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Vacuum Tube
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Language
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Low Level Language
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Input / Output
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Punch Card, Paper Tape
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Memoery
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Magnetic Tape, Magnetic Drum
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                <h2 className="inline ml-4 text-cyan-400">Example : </h2>ENIAC,
                EDVAC (Founded by Von-Neuman)
              </p>
            </div>
            <div className="mb-8">
              <p className=" mb-2">
                <h2 className="text-xl inline text-sky-400 ">
                  2nd Generation (1955 - 1963) :{" "}
                </h2>
                It uses the technology of transistors rather than vacuum tubes.
                A transistor is a device composed of semiconductor material that
                amplifies signals or acts as an open or closed circuit.
              </p>
              <table className=" border-collapse border-2 border-slate-500 table-auto text-white m-4 p-2  ">
                <thead>
                  <tr className="text-white ">
                    <th className="text-cyan-400 border border-slate-600 p-2">
                      Characteristics.
                    </th>
                    <th className="text-cyan-400 border border-slate-600 p-4">
                      Components
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Electronic Components
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Transister
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Language
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Assembly Language
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Input / Output
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Punch Card, Magnetic Tape
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Memoery
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Magnetic Tape, Disk
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                <h2 className="inline ml-4 text-cyan-400">Example : </h2>IBM
                1620, IBM 7094, CDC 1604, CDC 3600, UNIVAC 1108
              </p>
            </div>
            <div className="mb-8">
              <p className=" mb-2">
                <h2 className="text-xl inline text-sky-400 ">
                  3rd Generation (1964 - 1972) :{" "}
                </h2>
                Third generation computers used integrated circuits (IC) instead
                of transistors. These ICs, which are composed of a variety of
                transistors on a silicon chip, significantly reduced the size of
                computers and increased memory space.
              </p>
              <table className=" border-collapse border-2 border-slate-500 table-auto text-white m-4 p-2  ">
                <thead>
                  <tr className="text-white ">
                    <th className="text-cyan-400 border border-slate-600 p-2">
                      Characteristics.
                    </th>
                    <th className="text-cyan-400 border border-slate-600 p-4">
                      Components
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Electronic Components
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      IC (Integrated Circuits)
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Language
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      High Level
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Input / Output
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Keybord, Mouse
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Memoery
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Tape, Disk
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                <h2 className="inline ml-4 text-cyan-400">Example : </h2> IBM
                370, PDP-11, IBM System/360, UNIVAC 1108, Honeywell-6000, DEC
                series, and ICL 2900.
              </p>
            </div>
            <div className="mb-8">
              <p className=" mb-2">
                <h2 className="text-xl inline text-sky-400 ">
                  4th Generation (1975 - Present ) :{" "}
                </h2>
                In fourth generation computers, the main component was the
                microprocessor. A microprocessor contains a variety of
                integrated circuits, also known as large-scale integrated
                circuits (LSI). In this generation, it became possible to build
                a complete computer with a microprocessor and primary storage
                chips, leading to the development of personal computers.
              </p>
              <table className=" border-collapse border-2 border-slate-500 table-auto text-white m-4 p-2  ">
                <thead>
                  <tr className="text-white ">
                    <th className="text-cyan-400 border border-slate-600 p-2">
                      Characteristics.
                    </th>
                    <th className="text-cyan-400 border border-slate-600 p-4">
                      Components
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Electronic Components
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Microprocesser
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Language
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      High Level
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Input / Output
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Keybord, Mouse, Printer, Flopy Disk, Joystick, etc.
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Memoery
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Ram, Rom, Flopy Disk, HDD
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                <h2 className="inline ml-4 text-cyan-400">Example : </h2>IBM
                1401, STAR 1000, & PC (Personal Computer)
              </p>
            </div>
            <div className="mb-8">
              <p className=" mb-2">
                <h2 className="text-xl inline text-sky-400 ">
                  5th Generation (Present - Feature) :{" "}
                </h2>
                In the fifth generation of computers, there was growth in
                computer network communication technology, e-commerce, etc. A
                vast ocean of information became available to the world. The
                World Wide Web has powerful servers, supercomputers, and
                notebook computers available. In the fifth generation, there is
                ultra-large-scale integration technology, which is called a
                microprocessor chip, having 10 million electronic components.
              </p>
              <table className=" border-collapse border-2 border-slate-500 table-auto text-white m-4 p-2  ">
                <thead>
                  <tr className="text-white ">
                    <th className="text-cyan-400 border border-slate-600 p-2">
                      Characteristics.
                    </th>
                    <th className="text-cyan-400 border border-slate-600 p-4">
                      Components
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Electronic Components
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      AI , Laptop, Mini-PC, etc.
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Language
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      High Level Language
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Input / Output
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Keybord, Mouse, Flopy Disk, Printer, etc.
                    </td>
                  </tr>
                  <tr className="text-white ">
                    <td className="text-white p-2 border border-slate-600 ">
                      Memoery
                    </td>
                    <td className="text-white p-4 border border-slate-600 ">
                      Ram, Rom, HDD, SSD, etc.
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                <h2 className="inline ml-4 text-cyan-400">Example : </h2>Param
                1000, Intel P4, IBM laptops, notebooks, and PCs of Pentium
              </p>
            </div>
            <br />
          </div>
        </section>
      </Layout>
    );
}

export default PCAT;
