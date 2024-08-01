import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CreateUser = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center ">
        <div className="modal-box w-[600px] dark:bg-slate-600 dark:text-white">
          <form method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-2xl text-pink-500">Signup</h3>
          <div className="mt-5 space-y-2 dark:bg-slate-600 dark:text-black">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/*Email */}
          <div className="mt-5 space-y-2 dark:bg-slate-600 dark:text-black">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>
          {/*Password */}
          <div className="mt-5 space-y-2 dark:bg-slate-600 dark:text-black">
            <span>Password</span>
            <br />
            <input
              type="Password"
              placeholder="Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateUser;
