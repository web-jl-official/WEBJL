import React from "react";
import Layout from "../../../components/layout/Layout";

const PYTHON = () => {
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
                Definition of Python
              </td>
              <td className="text-white p-4 border border-slate-600 ">
                <a
                  href="https://mimitbca.blogspot.com/2024/08/definition-of-python.html"
                  className="hover:text-cyan-400"
                >
                  Topic
                </a>
              </td>
            </tr>
            <tr className="text-white ">
              <td className="text-white p-2 border border-slate-600 ">2.</td>
              <td className="text-white p-4 border border-slate-600 ">
                History of Python
              </td>
              <td className="text-white p-4 border border-slate-600 ">
                <a
                  href="https://mimitbca.blogspot.com/2024/08/history-of-python.html"
                  className="hover:text-cyan-400"
                >
                  Topic
                </a>
              </td>
            </tr>
            <tr className="text-white ">
              <td className="text-white p-2 border border-slate-600 ">3.</td>
              <td className="text-white p-4 border border-slate-600 ">
                Keyword , Identifier, Indentation, Comments & Documentation
              </td>
              <td className="text-white p-4 border border-slate-600 ">
                <a
                  href="https://mimitbca.blogspot.com/2024/08/keyword-identifier-indentation-comments.html"
                  className="hover:text-cyan-400"
                >
                  Topic
                </a>
              </td>
            </tr>
            <tr className="text-white ">
              <td className="text-white p-2 border border-slate-600 ">4.</td>
              <td className="text-white p-4 border border-slate-600 ">
                Difference between Python vs C, C++, java
              </td>
              <td className="text-white p-4 border border-slate-600 ">
                <a
                  href="https://mimitbca.blogspot.com/2024/08/sr-no.html"
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
};

export default PYTHON;
