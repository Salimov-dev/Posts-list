import React from "react";

const QuantityOnPage = ({setPageSizePagination, pageSizePagination, quantityOnPageArray}) => {
  const handleChange = ({ target }) => {
    console.log("target", target.value);
    setPageSizePagination(target.value);
  };
  return (
    <>
      <label htmlFor="quantityOnPage" className="d-flex ">
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
        {quantityOnPageArray.map((q) => (
          <option key={q}>{q}</option>
        ))}
      </select>
    </>
  );
};

export default QuantityOnPage;
