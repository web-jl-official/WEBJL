import React from 'react';
import Layout from '../../../../components/layout/Layout';

const Raptor = () => {
    return (
      <Layout>
        <div className="flex justify-center items-center m-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FNohj6289-s?si=i7UOzc4JNEw_eyMo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-5 text-white ">
          <h1 className="text-3xl font-bold ">Raptor</h1>
          <a
            href="https://raptor.martincarlisle.com/"
            className="text-cyan-400"
          >
            Link of Raptor
          </a>
          <h1 className="text-3xl font-bold ">Draw io</h1>
          <a href="https://www.drawio.com/" className="text-cyan-400">
            Link of Draw io
          </a>
        </div>
      </Layout>
    );
}

export default Raptor;
