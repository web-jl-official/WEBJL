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
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/data-communication.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">2.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Types of Computer Networks
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/types-of-computer-networks.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">3.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Transmission Modes
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/transmission-modes.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">4.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Line Configuration in Computer Networks
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/line-configuration-in-computer-networks.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">5.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Data Transmission Parallel & Serial Transmission
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/data-transmission-parallel-serial.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">6.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Synchronous and Asynchronous Transmission
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/synchronous-and-asynchronous.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">7.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Difference between Analog Communication and Digital
                  Communication
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/difference-between-analog-communication.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">7.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Types of Network Topology
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/types-of-network-topology.html"
                    className="hover:text-cyan-400"
                  >
                    Topic
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Layout>
    );
}
export default CN;
