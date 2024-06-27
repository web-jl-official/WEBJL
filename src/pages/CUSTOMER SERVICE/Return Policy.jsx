import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";

const ReturnPolicy = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Layout>
      <div id="Profile" className="bg-gray-900   text-white body-font mx-6">
        <div className="container">
          <h1>Return Policy</h1>
          <p>
            At <strong>WEB JL</strong>, we value your satisfaction and strive to
            provide high-quality products. Here's our return policy:
          </p>
          <ol>
            <li>
              Most of our products are eligible for returns within{" "}
              <strong>30 days</strong> from the date of delivery.
            </li>
            <li>
              If the item is customized with personalized names, photos, or
              logos, we accept returns or exchanges for defects or errors on our
              part.
            </li>
            <li>
              Non-returnable items include digital downloads or hazardous
              materials.
            </li>
            <li>
              Upon receiving the returned item, we'll process a refund or offer
              an exchange.
            </li>
          </ol>
          <p>Contact us via email or phone to initiate a return.</p>
          <p>
            Thank you for choosing <strong>WEB JL</strong>. We appreciate your
            trust in our craftsmanship.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicy;
