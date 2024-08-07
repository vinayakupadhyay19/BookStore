import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import CreateUser from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<CreateUser />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
