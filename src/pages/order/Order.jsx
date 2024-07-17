import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import OrderCustomer from "./OrderCustomer";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  return (
    <Layout>

      <OrderCustomer/>

    </Layout>
  );
}

export default Order;
