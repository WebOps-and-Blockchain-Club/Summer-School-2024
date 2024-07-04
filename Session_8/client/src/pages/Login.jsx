import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from 'react-router-dom'
// import React,{useEffect} from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const eye = <FontAwesomeIcon icon={faEye} />;


export default function Login(props) {
  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data,process.env.REACT_APP_BACKEND_BASE_URL );
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/signin`,
        data
      );

      console.log(res.data); // Log the response for debugging

      if (res.data.error) {
        props.showAlert(res.data.error, "bad");
        return;
      }

      if (res.data.message === "Login successful") {
        props.showAlert("Login successful", "good");
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error); // Log any error that occurs
      props.showAlert(
        "An error occurred during login. Please try again.",
        "bad"
      );
    }
  };


  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 h-full ">
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-[90%] lg:py-0 ">
          <a
            href="/#"
            className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* {props.mode==="Dark Mode"?<img  name='mode' src='logo_light.jpg' className='w-[100px]' alt=''/>:<img  name='mode' src='logo_dark.jpeg' className='w-[100px]' alt=''/>} */}
            <img  name='mode' src='logoo.png' className='w-[100px]' alt=''/>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <div className="flex justify-between items-center ">
                <div className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log In
                </div>
                <div>
                  <button
                    onClick={props.toggleMode}
                    className="border p-2 dark:text-white dark:border-[#555756] rounded-lg"
                  >
                    {props.mode}
                  </button>
                </div>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                action="/#"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label
                    htmlFor="RollNo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Roll No.
                  </label>
                  <input
                    type="Text"
                    name="username"
                    id="username"
                    placeholder="XXXXXXXX"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    {...register("rollNo", {
                      required: "requires Username",
                      minLength: {value:8,message:" length 8 only"
                    },
                    maxLength: {value:8,message:" length 8 only"
                    },
                    })}
                  />
                  <p className="text-red-500">{errors.username?.message}</p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                      required: "requires password",
                       minLength:{value:8,message:"Min length 8"
                    },
                    })}
                  />
                  <i onClick={togglePasswordVisiblity} className="dark:invert">{eye}</i>{" "}
                  <p className="text-red-500">{errors.password?.message}</p>
                </div>
                <div className="flex items-start"></div>
                <button
                  type="submit"
                  className="w-full dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border dark:bg-primary-600 dark:hover:bg-[#111827] dark:focus:ring-primary-800 dark:border dark:border-[#45464b]"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign Up here
                  </Link>
                </p>
              </form>
              <DevTool control={control} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
