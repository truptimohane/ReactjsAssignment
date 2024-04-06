import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { insert } from "../Userslice";

function CreateProduct() {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    let result = true;
    if (formValue.name === "") {
      toast.error("Name Field is required !");
      result = false;
    }
    if (formValue.price === "") {
      toast.error("Price Field is required !");
      result = false;
    }
    if (formValue.category === "") {
      toast.error("Category Field is required !");
      result = false;
    }
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      dispatch(insert(formValue));
      toast.success("Data Inserted success");
      setFormValue({
        id: "",
        name: "",
        price: "",
        category: "",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12">
          <h2>Add Product</h2>
          <Link to="/" className="btn btn-primary float-end mb-5">
            Back
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label mt-5">
                Name:
              </label>
              <input
                type="text"
                value={formValue.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Name"
                name="name"
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                value={formValue.price}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter price"
                name="price"
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <input
                type="text"
                value={formValue.category}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter category"
                name="category"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
