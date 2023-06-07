import React from "react";

const SearchForm = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control-sm me-2 "
        type="search"
        placeholder="Найти по заголовку"
        aria-label="Поиск"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-success btn-sm" type="submit">
        Поиск
      </button>
    </form>
  );
};

export default SearchForm;
