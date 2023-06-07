import React from "react";
import TableHeader from "./components/table-header";
import TableBody from "./components/table-body";

const Table = () => {
  return (
    <table className="table table-hover">
      <>
        <TableHeader />
        <TableBody />
      </>
    </table>
  );
};

export default Table;
