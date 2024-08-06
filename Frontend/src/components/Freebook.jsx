import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {
  //const freebooks = booklist.filter((data) => data.category === "Free");
  function findBook(booklist) {
    const list = [];
    for (var i = 0; i < booklist.length; i++) {
      if (
        booklist[i].category.toUpperCase() === "FREE" ||
        booklist[i].category.toLowerCase() === "free"
      ) {
        list.push(booklist[i]);
      }
    }
    return list;
  }
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
  const freebooks = findBook(book);
  //console.log(freebooks);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-bold color:black text:xl pb-2">
            Free Offered Books
          </h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>

        <div className="slider-container mt-10">
          <Slider {...settings}>
            {freebooks.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
