import React from "react";

const QuantityOnPage = ({
  setPageSizePagination,
  pageSizePagination,
  quantityOnPageOptions,
}) => {
  const handleChange = ({ target }) => {
    setPageSizePagination(target.value);
  };

  return (
    <>
      <label htmlFor="quantityOnPage" className="d-flex text-nowrap">
        Кол-во на странице:
      </label>
      <select
        name="quantityOnPage"
        id="quantityOnPage"
        className="form-select"
        style={{ height: "39px", width: "10%" }}
        aria-label="Default select example"
        onChange={handleChange}
        value={pageSizePagination}
      >
        {quantityOnPageOptions.map((q) => (
          <option key={q}>{q}</option>
        ))}
      </select>
    </>
  );
};

export default QuantityOnPage;
