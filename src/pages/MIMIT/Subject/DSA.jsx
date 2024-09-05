import React from 'react';
import Layout from '../../../components/layout/Layout';
import { Link } from 'react-router-dom';



const DSA = () => {
    return (
      <Layout>
        <section className="bg-gray-900 text-white body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              {/* anker tag using link for page */}
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <a href="https://drive.google.com/file/d/1cQnPczXKksIzXYC41HZLvH8CwjId83FD/view?usp=sharing">
                  <div
                    style={{ height: "180px", width: "280px" }}
                    className="bg-gray-800 bg-opacity-40 p-6 rounded-lg"
                  >
                    <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                      DSA Program
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      DSA Notes MIMIT
                    </h2>
                    <p className="leading-relaxed text-base">
                      This Notes By MIMIT College
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default DSA;
