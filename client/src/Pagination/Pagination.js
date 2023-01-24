import React from "react";

const Pagination = ({ pokemons, postsPerPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // pageNumbers.pop();
  return (
    <div>
      {pageNumbers?.map((number) => {
        return (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
