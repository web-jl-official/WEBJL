import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function prumium_cources() {
  const context = useContext(myContext);
  const { mode, product, searchkey, filterType, filterPrice } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  },[cartItems]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="block container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              {" "}
              Our Register Collection
            </h1>
            <div className="h-1 w-20 bg-white rounded"></div>
          </div>
          <div className="flex flex-wrap -m-4">
            {product
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => {
                const { title, price, description, imageUrl, id } = item;
                return (
                  <>
                    <div
                      className="container px-5 py-24 mx-auto"
                      onClick={() =>
                        (window.location.href = `/productinfo/${id}`)
                      }
                      key={index}
                    >
                      <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img
                              alt="ecommerce"
                              className="object-center w-full h-48 block bg-black object-fill"
                              style={{
                                backgroundColor: "#181818",
                                width: "fit-content",
                              }}
                              src={imageUrl}
                            />
                          <div className="mt-4">
                            <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                              WEB JL
                            </h3>
                            <h2 className="text-white title-font text-lg font-medium">
                              {title}
                            </h2>
                            <p className="mt-1 text-white">₹{price}</p>
                            <div className=" flex justify-center mt-2">
                              <button
                                type="button"
                                onClick={() => addCart(item)}
                                className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>       
        </div>
      </section>
    </Layout>
  );
}
