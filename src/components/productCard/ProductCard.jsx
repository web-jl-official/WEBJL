import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

function ProductCard() {
  
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
}, [cartItems]);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <section className="w-full text-gray-600 body-font">
      <div className="block w-full">
        <div className=" w-full mb-6 ">
          <h1 className="text-2xl font-medium title-font mb-2 ml-5 text-white text-left">
            {" "}
            Our Register Collection
          </h1>
        </div>
        <div className=" flex overflow-x-auto  scroll-smooth m-4 sm:flex sm:flex-wrap justify-evenly text-left items-center ">
          {product
            .filter((obj) => obj.title.toLowerCase().includes(searchkey))
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .slice(0, 4)
            .map((item, index) => {
              const { title, price, description, imageUrl, id } = item;
              return (
                <>
                  <div className="block m-auto items-center mt-4 mb-4 p-4">
                    <div className="flex w-64 flex-wrap justify-evenly ">
                      <div className="" key={index}>
                        <img
                          alt="ecommerce"
                          className="object-center h-48 bg-black object-fill w-full border-4 border-cyan-400 rounded-xl"
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
                          <div className=" flex justify-center  mt-2">
                            <button
                              type="button"
                              onClick={() => addCart(item)}
                              className="focus:outline-none m-2 text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                            >
                              Add To Cart
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                (window.location.href = `/productinfo/${id}`)
                              }
                              className="focus:outline-none m-2 text-black bg-cyan-400 hover:bg-violet-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                            >
                              Product Details
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
  );
}

export default ProductCard;
