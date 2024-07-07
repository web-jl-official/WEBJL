import React from 'react'
import Layout from '../../components/layout/Layout';

function NoPage() {
  return (
    <Layout>
      <div className=" w-full h-full bg-center bg-fixed bg-no-repeat bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/No%20Page%20%26%20Under%20Construction%2FDesigner%20(3).png?alt=media&token=a532c7ab-82c8-48fb-8308-77b518551479')]">
        <div className="grid bg-black/80 under-construction text-white justify-center">
          <img
            className="w-56 m-8 border-white border-4 rounded-2xl"
            src="https://firebasestorage.googleapis.com/v0/b/webjl26.appspot.com/o/No%20Page%20%26%20Under%20Construction%2FDesigner%20(2).png?alt=media&token=22d8d0a9-98e1-494a-953a-143b5a1cbe3c"
            alt=""
          />
          <div className=" items-center m-8 ">
            <div className="under-maintenance">
              <h1 className='text-2xl text-cyan-300'>🛠️ Website Under Maintenance 🛠️</h1>
              <p>Hello there! 👋</p>
              <p>
                We're excited to bring you some awesome new features and
                enhancements! Our team is working hard behind the scenes to
                improve your experience. During this time, you might notice some
                temporary disruptions, but trust us—it'll be worth it!
              </p>
              <div className="features">
                <h2>What's Coming:</h2>
                <ul>
                  <li>🚀 Exciting new features</li>
                  <li>🌟 Enhanced performance</li>
                  <li>🎨 Sleeker design</li>
                </ul>
              </div>
              <p>
                Estimated Completion: We expect to be back online by [insert
                estimated time here]. Thanks for your patience!
              </p>
              <p>
                Questions? Reach out to our support team at{" "}
                <a href="mailto:support@example.com">support@example.com</a>.
              </p>
              <p>Thank you for being part of our community! 🙌</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NoPage