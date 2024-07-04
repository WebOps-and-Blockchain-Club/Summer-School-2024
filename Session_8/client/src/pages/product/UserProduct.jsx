import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserProduct = (props) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const del = (prod) => {
    async function deleteProduct() {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/product/${prod.productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data);
        props.showAlert("Item Deleted", "bad");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
    deleteProduct();
  };

  useEffect(() => {
    async function fetchProducts() {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/products/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data);
        setProducts(res.data.products);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-24 relative dark:bg-[#111827]">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black dark:text-white">
          Your Product
        </h2>
        {products.length === 0 && (
          <div className="grid grid-cols-1 gap-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex gap-4 border rounded-lg shadow-lg p-4 dark:bg-gray-700"
                >
                  <div className="w-1/4 h-56 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                  <div className="w-3/4 h-56 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
                </div>
              ))}
          </div>
        )}
        {products &&
          products.map((product, index) => (
            <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 dark:bg-black ">
              <div className="col-span-12 lg:col-span-2 img box">
                <img
                  alt="speaker"
                  className="max-lg:w-full lg:w-[180px] "
                  src={product.image}
                />
              </div>
              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                  <button
                    className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                    onClick={() => {
                      console.log(product);
                      localStorage.setItem("product", product.productId);
                      del(product);
                    }}
                  >
                    <svg
                      fill="none"
                      height="34"
                      viewBox="0 0 34 34"
                      width="34"
                      xmlns="http:www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                        cx="17"
                        cy="17"
                        fill=""
                        r="17"
                      />
                      <path
                        className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                        stroke="#EF4444"
                        strokeLinecap="round"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </button>
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                  {product.description}{" "}
                </p>
                <div className="flex justify-between items-center">
                  <h6 className="text-black font-manrope font-bold text-2xl leading-9 text-right dark:text-white">
                    Buying Price: ₹{product.costPrice}
                  </h6>
                  <h6 className="text-black font-manrope font-bold text-2xl leading-9 text-right dark:text-white">
                    Selling Price: ₹{product.sellingPrice}
                  </h6>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default UserProduct;
