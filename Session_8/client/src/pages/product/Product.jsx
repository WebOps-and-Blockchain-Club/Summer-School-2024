import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

const Product = (props) => {
  const [info, setInfo] = useState({});
  const productId = localStorage.getItem("product");
  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/product/${productId}`);
      // console.log(res.data.product); // Log the response for debugging
      setInfo(res.data.product)
      
      if (res.data.error) {
        props.showAlert(res.data.error, "bad");
        return;
      }
    }
    fetchProduct();
  }, [productId]);

  
  
  
  

  console.log(info);
  return (
    <div>

      <div class="font-sans bg-white">
        <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
            <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">

              <div class="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                <img src={info.image} alt="Product" class="w-3/4 rounded object-cover mx-auto" />
              </div>

            </div>

            <div class="lg:col-span-2 mt-16">
              <h2 class="text-2xl font-extrabold text-gray-800">{info.name}{info.productId}</h2>
              <div class="flex flex-col gap-4 mt-8">
                <p className='text-2xl font-semibold text-gray-800'>Condition : {info.condition}</p>
                <p class="text-gray-800 text-2xl font-semibold">Cost Price : ₹{info.costPrice}</p>
                <p class="text-gray-800 text-2xl font-bold">Selling Price : ₹{info.sellingPrice}</p>
              </div>

              <div class="mt-16 ">
                <h3 class="text-xl font-bold text-gray-800">Product information</h3>
                <ul class="mt-4 space-y-6 text-gray-800">
                  <li class="text-sm">{info.description}</li>
                </ul>
                <ul class="mt-4 space-y-6 text-gray-800">
                  <li class="text-sm">Current Owner : {info.user&&info.user.username}</li>
                </ul>
              </div>


              <div class="flex flex-wrap gap-4 mt-8">
                <button type="button" class="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Buy now</button>
                <button type="button" class="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Add to cart</button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Product
