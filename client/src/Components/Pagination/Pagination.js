import React from "react";
import "./Pagination.css"

const Pagination = ({ pokemons, postsPerPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // pageNumbers.pop();
  return (
    <div className="paginationNumber">
      {pageNumbers?.map((number) => {
        return (
          <button className="number" key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
