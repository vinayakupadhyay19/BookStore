import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      Email: data.Email,
      Password: data.Password,
    };
    await axios
      .post("http://localhost:3001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Succesful :)");

          setTimeout(() => {
            window.location.href = "/";
          }, 1200);
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          //console.log(err.response.data);

          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  const [clickFlag, setClickFlag] = useState(false);

  useEffect(() => {
    if (clickFlag === true) {
      window.location.reload();
      setClickFlag(false);
    }
  }, [clickFlag]);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-600 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setClickFlag(!this.clickFlag)}
            >
              ✕
            </Link>
            <h3 className="font-bold text-2xl text-pink-500">Login</h3>
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
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => setClickFlag(!this.clickFlag)}
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
