import React from "react";

const SelectShoppingCartAddress = () => {
  return (
    <>
      <div className="col-12 col-md-6 d-flex justify-content-end align-items-baseline">
        <div className="text-dark">انتخاب آدرس</div>
        <select
          style={{ width: "200px" }}
          className="form-select ms-3"
          aria-label="Default select example"
        >
          <option>منزل</option>
          <option>محل کار</option>
        </select>
        <a href="profile.html" className="btn btn-auth">
          ایجاد آدرس
        </a>
      </div>
    </>
  );
};

export default SelectShoppingCartAddress;
