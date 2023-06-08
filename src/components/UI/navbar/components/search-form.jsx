import React from "react";

const SearchForm = ({setData}) => {
  return (
    <form className="d-flex w-100" role="search">
      <input
        className="form-control "
        type="search"
        placeholder="Найти по заголовку"
        aria-label="Поиск"
        onChange={(e) => setData(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
