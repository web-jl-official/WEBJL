import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const ContactUs = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
      <div id="Profile" className="bg-gray-900   text-white body-font mx-6">
        <div className="container m-4">
          <center>
            <h1 className="text-2xl">Contact Us</h1>
          </center>
          <p className="text-xl">
            Have questions or feedback? Reach out to us!
          </p>
          <div className="contact-info text-xl">
            <p>
              Message on instagram :{" "}
              <a href="https://www.instagram.com/livesh_garg_official/">
                Livesh_garg_official
              </a>
            </p>
            <p>
              MS Fome : <a href="">FOME Link</a>
            </p>
            {/* Add a contact form here */}
            <center className="m-4 rounded-lg">
              <iframe
                className="rounded-lg"
                width="640px"
                height="480px"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATbDxhpUN0FJTkhOTzNUSTNJQVNNOTBTMzZaTjNPUC4u&embed=true"
                frameBorder={0}
                marginWidth={0}
                marginHeight={0}
                style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                allowFullScreen
                webkitallowfullscreen
                mozallowfullscreen
                msallowfullscreen
              >
                {" "}
              </iframe>
            </center>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
