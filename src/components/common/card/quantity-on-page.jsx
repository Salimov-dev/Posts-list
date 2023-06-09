import React from "react";

const QuantityOnPage = ({
  setCurrentPage,
  setPageSizePagination,
  pageSizePagination,
  quantityOnPageOptions,
}) => {
  const handleChange = ({ target }) => {
    setPageSizePagination(target.value);
    setCurrentPage(1);
  };

  return (
    <div className="d-flex align-items-center">
      <label htmlFor="quantityOnPage" className="d-flex text-nowrap me-3">
        Кол-во на странице:
      </label>
      <select
        name="quantityOnPage"
        id="quantityOnPage"
        className="form-select"
        style={{ height: "39px", width: "70px" }}
        aria-label="Default select example"
        onChange={handleChange}
        value={pageSizePagination}
      >
        {quantityOnPageOptions.map((q) => (
          <option key={q}>{q}</option>
        ))}
      </select>
    </div>
  );
};

export default QuantityOnPage;
