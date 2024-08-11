import React from 'react';
import Layout from "../../../components/layout/Layout";

const DSAL = () => {
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
                  Expriments
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
                  Program for using Dynamic Function (malloc(), calloc(),
                  realloc(), free(0) function{" "}
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/dsa-lab-1-program.html"
                    className="hover:text-cyan-400"
                  >
                    Experiment
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">2.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Program to insert, delete and traverse an element from an
                  array
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/ds-lab-2-program.html"
                    className="hover:text-cyan-400"
                  >
                    Experiment
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">3.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Program to merge one dimensional array
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/ds-lab-3-program.html"
                    className="hover:text-cyan-400"
                  >
                    Experiment
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">4.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Program for addition and subtraction of two matrices
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/ds-lab-4-program.html"
                    className="hover:text-cyan-400"
                  >
                    Experiment
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">5.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Program for implemention of two matrices
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/program-for-implemention-of-two.html"
                    className="hover:text-cyan-400"
                  >
                    Experiment
                  </a>
                </td>
              </tr>
              <tr className="text-white ">
                <td className="text-white p-2 border border-slate-600 ">6.</td>
                <td className="text-white p-4 border border-slate-600 ">
                  Implement linear search using one and two dimensional arry
                </td>
                <td className="text-white p-4 border border-slate-600 ">
                  <a
                    href="https://mimitbca.blogspot.com/2024/08/ds-lab-6-program.html"
                    className="hover:text-cyan-400"
                  >
                    Experiment
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <hr />
      </Layout>
    );
}

export default DSAL;
