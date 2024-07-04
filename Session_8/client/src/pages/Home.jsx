import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const redirect = () => navigate("/product");

  const token = localStorage.getItem("token");
  // token&&(
  //   <Navigate to="/login" replace={true} />
  // )

  useEffect(() => {
    async function fetchProducts() {
      const token = localStorage.getItem("token");
      const res = await axios.get( 
        `${process.env.REACT_APP_BACKEND_BASE_URL}/products`,
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

  //checking user info
  // useEffect(() => {
  //   async function userInfo() {
  //     const rep = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_BASE_URL}/user`,);
  //     console.log(rep.data);
  //   }

  //   userInfo();
  // }, []);
  console.log(token);
  return (
    <div className="min-h-screen px-8 py-8 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.length === 0 &&
          Array(6)
            .fill(0)
            .map((_, index) => (
              <Box key={index} padding="6" boxShadow="lg" bg="none">
                <div className="h-72 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
              </Box>
            ))}
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-600 mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Condition:</strong> {product.condition}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Cost Price:</strong> ${product.costPrice}
            </p>
            <p className="text-gray-800 font-bold mb-2">
              <strong>Selling Price:</strong> ${product.sellingPrice}
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => {
                console.log(product);
                localStorage.setItem("product", product.productId);
                redirect();
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
