import React from "react";
import Cards from "../components/Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
const Course = () => {
  //console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500 "> here! :)</span>
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
