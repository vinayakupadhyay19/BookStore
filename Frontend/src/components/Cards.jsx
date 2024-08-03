import React from "react";

const Cards = ({ item }) => {
  //console.log(item);
  return (
    <>
      <div className="mt-4 w-80 ml-auto mr-auto">
        <div className="card bg-base-100 w-64 shadow-xl flex flex-wrap gap-4 hover:scale-105 duration-300 ">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body dark:bg-slate-900 dark:text-white">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary"> {item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline mr-auto">{item.price}</div>
              <div className="badge badge-outline ml-auto hover:bg-pink-600 hover:text-white px-3 py-2 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
