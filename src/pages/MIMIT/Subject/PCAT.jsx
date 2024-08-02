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
                    href="https://mimitbca.blogspot.com/2024/08/generations-of-computers.html"
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
      
      </Layout>
    );
}

export default PCAT;
