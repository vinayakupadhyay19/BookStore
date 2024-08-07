import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      FullName: data.FullName,
      Email: data.Email,
      Password: data.Password,
    };
    console.log(userInfo.Password);
    if (userInfo.Password.length >= 8) {
      await axios
        .post("http://localhost:3001/user/signup", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            toast.success("Signup Succesful :)");
          }
          localStorage.setItem("User", JSON.stringify(res.data.user));
        })
        .catch((err) => {
          if (err.response) {
            //console.log(err.response.data);

            toast.error("Error: " + err.response.data.message);
          }
        });
    } else {
      toast.error(
        "Password must be at least 8 size Entered Password : " +
          userInfo.Password
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center ">
        <div className="modal-box w-[600px] dark:bg-slate-600 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-2xl text-pink-500">Signup</h3>
            <div className="mt-5 space-y-2 dark:bg-slate-600 dark:text-black">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("FullName", { required: true })}
              />
              <br />
              {errors.FullName && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            {/*Email */}
            <div className="mt-5 space-y-2 dark:bg-slate-600 dark:text-black">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("Email", { required: true })}
              />
              <br />
              {errors.Email && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            {/*Password */}
            <div className="mt-5 space-y-2 dark:bg-slate-600 dark:text-black">
              <span>Password</span>
              <br />
              <input
                type="Password"
                placeholder="Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("Password", { required: true })}
              />
              <br />
              {errors.Password && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            {/*Button*/}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white px-3 py-1  rounded-md hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have Account?{" "}
                <Link
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateUser;
