import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";
const Course = () => {
  //console.log(list);
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBookList = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book");
        console.log(res.data.book);
        setbook(res.data.book);
      } catch (err) {
        console.log(err);
      }
    };
    getBookList();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mt-16 px-5 py-5">
        <div className="items-center justify-center text-center">
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
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
