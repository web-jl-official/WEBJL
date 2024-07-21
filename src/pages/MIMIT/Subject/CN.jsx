import React from 'react';
import Layout from '../../../components/layout/Layout';
import { Link } from 'react-router-dom';
const CN = () => {
    return (
      <Layout>
        <section id="Index" className="text-white  container inset-0 ">
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
                  Data Communication
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a href="#Data_Communication" className="hover:text-cyan-400">
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
          id="Data_Communication"
          className=" m-2 p-4 text-white container  "
        >
          <div>
            <a href="#Index">
              <button className="text-xl text-cyan-400 bg-violet-700 p-2 m-2 border-2 border-white rounded-full">
                <h1>Go To Index</h1>
              </button>
            </a>

            {/* This Is For Heading  */}
            <h1 className="text-3xl text-cyan-400"> Data Communication</h1>

            <br />
            <div>
              <h2 className="text-xl">Data Communication :</h2>
              <p>
                Data communication is the exchange of data between two devices
                via some form of transmission medium. Data communication is said
                to be local if communication devices are in the same building or
                a similar restricted geographical area.
              </p>
            </div>
            <br />
            <h2 className="text-violet-500 text-2xl">
              The Components of Data Communication
            </h2>
            <br />
            <div>
              <p className="m-2">
                <h2 className="text-xl inline text-sky-400">Message : </h2>
                It is the information or data to be communicated. It consists of
                text, numbers, symbols, pictures, videos, sounds, and any other
                media formats
              </p>

              <p className="m-2">
                <h2 className="text-xl inline text-sky-400">Sender : </h2>The
                device or person that sends the message.
              </p>

              <p className="m-2">
                <h2 className="text-xl inline text-sky-400">Receiver: </h2>The
                device or person that receives the message.
              </p>

              <p className="m-2">
                <h2 className="text-xl inline text-sky-400">
                  Transmission Medium :{" "}
                </h2>
                The physical path through which the message travels from sender
                to receiver. Examples include cables, fiber optics, and wireless
                signals.
              </p>

              <p className="m-2">
                <h2 className="text-xl inline text-sky-400">Protocol : </h2>A
                set of rules and conventions that determine how data is
                transmitted and received. Protocols ensure that the sender and
                receiver understand each other.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default CN;
