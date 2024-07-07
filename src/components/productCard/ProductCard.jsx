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
    <div>
      <section className=" text-white body-font ">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-left"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Our Free Collection
        </h1>
        <div className="container px-5 py-8  mx-auto">
          <div className="flex flex-wrap -m-4 justify-evenly">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a
                className="flex relative h-48 rounded-xl overflow-hidden bg-transparent justify-center"
                href="/Python"
              >
                <img
                  alt="ecommerce"
                  className=" object-center w-full h-full block object-fill rounded-xl  "
                  src="https://img-c.udemycdn.com/course/750x422/4898996_e73f_24.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  Python
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Python Programs & Notes
                </h2>
                <p className="mt-1">$Free</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a
                className="flex relative h-48 rounded-xl overflow-hidden bg-transparent justify-center"
                href="/React"
              >
                <img
                  alt="ecommerce"
                  className=" object-center w-full h-full block object-fill rounded-xl  "
                  src="data:image/jpeg;base64,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"
                />
              </a>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  React JS
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  New Ecommerce Project
                </h2>
                <p className="mt-1">$Free</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a
                className="flex relative h-48 rounded-xl overflow-hidden bg-transparent justify-center"
                href="/Js_cource"
              >
                <img
                  alt="ecommerce"
                  className=" object-center w-full h-full block object-fill rounded-xl  "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAA6lBMVEX1/+Ou6Tiy7jj7/+mx7zGp4jeAinhwljP6/+etr6v3/+Wg2ilkhjKx7jaAsh/9/+xohUPW3M3O0sdwiFSHuiGa0ieUyia1ubK8v7gAAC6bnJuFjn+q5iy29Dik3DcNEi8ZIi8MES8FCC9ZeDKVxzZfgDKDrzSd0zY7TzBIYTEQFi/k7NW+w7VlfUt4qwheeT6lqqCz9Ch2njOKuTUdJy8VHS9PajFskTOItzVDWjEpOC+RwzUgKy98pjSIvhZ8hHiioaddb05jiyBpdGVqlhyMj45ib1lxoBaAhIJ6eoEAHxROcB0sJ0nV28g4s2yDAAADfElEQVR4nO3da1PTQBSAYbJJNQTXCpbaraS1TaFAVbQKKFiKF/DK//87JlBpdMZxCT3mMu8zQ7l8CNN3MiebBpqlJQAAAAAAAAAAAAAAAAB58osgyLuCCP/pcgGMKhm3/mxjJXfP16rZ9qHn5E01qtpWO47OU7XbdvYe5GevU+m26616flrNard95Of2+33aiqGtHNrKoa0c2sqhrRzayqGtHNrKoa0c2sqh7TXftWO/QdrO+E/v2HlhvUXazvhtz8rLx67tFmk747c3rK7SeLRdoq0k2sqhrRzayqGtHNrKoa0c2sq5bVul1Oyznn1F219u2bY2Hk9UUnYrOth8pRVtU27ZtmNML3TUsGsSr48Vbedu3bb7JHRqpncZt2cGirbXFtFWjU13f+AMD0yk2W/nFtI2MmYzdJxwi3mbtpC2h/F+20n+SJl1QtpC5m382DObHc0a7DcLaavemP6uMZHDTEjL2Fbpq7XsVVtHD7eTuvsd2qZka6smOzuXB65Z2/g4NnhrdvtHrBNSsrXVh8bc/a2to8KJ2WV9m5Zxvx3H0zVuqgamdxTP20Gyv4avu2aLtnMZ2x4n+2gYqu2+iZTaModKh534Z8e0nct4LNNH8aFre6cfPw5VPBiM2Tkw3f475m1K1jXY0Jhev98zZqKd+Nxh9s2Q12pSsrZVtc0nJt5bLyetHkb7xnSjGuvbtOznDuryH4FnNbW++qBtCtd05NBWDm3l0FYObeXQVg5t5dBWDm3l3LitskHbxM3auu2Tho2TKW1v2jYYrdmxfhNA2l4LbNlukLZyaCuHtnJoK4e2cmgrh7ZyaCuHtnJoK4e2cqrf1rV+nWDR3Kq3PV3Nz2m129bu56lW6baO1bUEKVW+v0OYa9mEbqzldzAVE9SXo3sFMB3ZXgMqi6C+9n5d573XxrT3oW3/Fo5l4I6mz0OrS+Ly9Mpeq16Zoeu77Q8b6t/P+n/xGh9X3UrUDeqtZyv638/4P1LepzO//IMhcEcfG/nft+xPaiNaLvtg8P2zT16BxsGc1zxfLXPdoP4oWilk2YT3+Ytb1vVYUL84b4ZFWHj9RegdlnQwBKOv3ybju4U2/v6jlPc9DVonTq3onGarjOuFoNUs7Ki9psradt3u3dhztV7OthdTy7sI5Gl6UcZ5G582lEEp0wIAAAAAAAAAAAAAAADl9RM4394FgyYQdQAAAABJRU5ErkJggg=="
                />
              </a>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  JS Developing
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  JS Code
                </h2>
                <p className="mt-1">$Free</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a
                className="flex relative h-48 rounded-xl overflow-hidden bg-transparent justify-center"
                href="/Cpp"
              >
                <img
                  alt="ecommerce"
                  className=" object-center w-full h-full block object-fill rounded-xl  "
                  src="data:image/jpeg;base64,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"
                />
              </a>
              <div className="mt-4">
                <h3 className="   text-white text-xs tracking-widest title-font mb-1">
                  C++ Language
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  C++ Programs
                </h2>
                <p className="mt-1">$Free</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
        <section className="text-gray-600 body-font">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-left"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Register Collection
          </h1>
          <div className="block container px-5 py-8 md:py-16 mx-auto">
            <div className="flex flex-wrap -m-4 justify-start text-left">
              {product
                .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                .filter((obj) =>
                  obj.category.toLowerCase().includes(filterType)
                )
                .filter((obj) => obj.price.includes(filterPrice))
                .map((item, index) => {
                  const { title, price, description, imageUrl, id } = item;
                  return (
                    <>
                      <div>
                        <div className="flex flex-wrap m-4 justify-evenly">
                          <div
                            onClick={() =>
                              (window.location.href = `/productinfo/${id}`)
                            }
                            key={index}
                          >
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
    </div>
  );
}

export default ProductCard;
