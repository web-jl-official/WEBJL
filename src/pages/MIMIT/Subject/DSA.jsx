import React from 'react';
import Layout from '../../../components/layout/Layout';
import { Link } from 'react-router-dom';



const DSA = () => {
    return (
      <Layout>
        <section className="bg-gray-900 text-white body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="mt-4 border-4 p-2 rounded-xl">
                  <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                    DSA Leacture
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium mb-1">
                    1. Array
                  </h2>

                  <Link
                    className="flex justify-center text-center items-center m-4"
                    to="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/MIMIT%20COURCES%2FDSA%2F1.2.1%20Linear%20Arrays.pdf?alt=media&token=2ca2a77d-9f8c-4911-b336-c6dedc26013f"
                  >
                    <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                      Link of PDF
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="mt-4 border-4 p-2 rounded-xl">
                  <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                    DSA 
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium mb-1">
                    Coming Soon
                  </h2>

                  <Link
                    className="flex justify-center text-center items-center m-4"
                    to=""
                  >
                    <button className=" bg-purple-800 text-white text-3xl p-1 m-2 border-2 border-white rounded-xl w-96">
                      Link of PDF
                    </button>
                  </Link>
                </div>
              </div>

             
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default DSA;
