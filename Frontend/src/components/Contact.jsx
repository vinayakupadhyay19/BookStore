import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    localStorage.setItem("UserData", JSON.stringify(data));

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center ">
        <div className="">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5 space-y-2 dark:bg-slate-900 dark:text-blue-600">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div className="mt-5 space-y-2 dark:bg-slate-900 dark:text-blue-600">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div className="mt-5 space-y-2 dark:bg-slate-900 dark:text-blue-600">
              <span>Message</span>
              <br />
              <input
                type="text"
                placeholder="Enter your message"
                className="w-80 pb-20 border rounded-md outline-none"
                {...register("meassage", { required: true })}
              />
              <br />
              {errors.meassage && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
            <div className="flex justify-left mt-4">
              <button className="bg-blue-600 text-white px-3 py-1  rounded-md hover:bg-blue-800 duration-200">
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
