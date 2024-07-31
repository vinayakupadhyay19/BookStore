import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-600 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-pink-500">Login</h3>
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
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
