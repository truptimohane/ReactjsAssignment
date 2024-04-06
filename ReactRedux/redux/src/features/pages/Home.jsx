import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showUser, deletedata, updatedata } from "../Userslice";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";

// Define CSS styles as a JavaScript object
const styles = {
  highlight: {
    backgroundColor: "yellow",
  },
};

function Home() {
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const { users, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  // Search Data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    // Reset highlighted index when the search query changes
    setHighlightedIndex(-1);
  }, [users, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Highlight next search result
  const highlightNextResult = () => {
    setHighlightedIndex((prevIndex) => {
      if (prevIndex === filteredUsers.length - 1) {
        return 0; // Highlight the first item if at the end
      } else {
        return prevIndex + 1;
      }
    });
  };
  // Read data
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowDetailsModal(true);
  };

  // Delete data
  const deletehandel = async (id) => {
    try {
      await dispatch(deletedata(id));
      toast.success("Data deleted successfully");
      dispatch(showUser());
    } catch (error) {
      toast.error("Error deleting Data");
      console.error("Error deleting Data:", error);
    }
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    img: "",
  });

  const edithandel = async (id) => {
    const editdata = users.filter((value) => {
      return value.id == id;
    });
    setForm(editdata[0]);
  };

  const changeHandel = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const vadidation = () => {
    var result = true;
    if (form.name == "") {
      toast.error("Name Field is required !");
      result = false;
      return false;
    }
    if (form.email == "") {
      toast.error("email Field is required !");
      result = false;
      return false;
    }

    if (form.mobile == "") {
      toast.error("mobile Field is required !");
      result = false;
      return false;
    }
    if (form.img == "") {
      toast.error("img Field is required !");
      result = false;
      return false;
    }
    return result;
  };
  const submitHandel = async (e) => {
    e.preventDefault();
    if (vadidation()) {
      dispatch(updatedata(form));
      dispatch(showUser());
      toast.success("Update Success");
      return false;
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">
            <h2 align="center" className="mb-5">
              Manage User
            </h2>
            <h2>Search Products :</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search Items"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-primary" onClick={highlightNextResult}>
                Search
              </button>
            </div>
            <Link to="/add_product" className="btn btn-primary float-end mb-5">
              + Create Product
            </Link>
            <div className="container">
              {isLoading ? (
                <>
                  <h2>Data Loading ....</h2>
                </>
              ) : null}
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th align="center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    filteredUsers.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          style={
                            highlightedIndex === index ? styles.highlight : {}
                          }
                        >
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>
                            <span>$ </span>
                            {item.price}
                          </td>
                          <td>{item.category}</td>
                          <td align="left">
                            <button
                              className="btn btn-primary card-link"
                              onClick={() => handleViewDetails(item)}
                            >
                              Read
                            </button>
                            <button
                              className="btn  m-1"
                              style={{ background: "skyblue" }}
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
                              onClick={() => {
                                edithandel(item.id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger m-1"
                              onClick={() => {
                                deletehandel(item.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          show={showDetailsModal}
          onHide={() => setShowDetailsModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedUser && (
              <div>
                <div>
                  <strong>Name:</strong> {selectedUser.name}
                </div>
                <div>
                  <strong>Price:</strong> {selectedUser.price}
                </div>
                <div>
                  <strong>Category:</strong> {selectedUser.category}
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDetailsModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Edit Products</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form action="" method="post">
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={changeHandel}
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={changeHandel}
                    className="form-control"
                    placeholder="Enter email"
                    name="price"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">
                    Category:
                  </label>
                  <input
                    type="text"
                    value={form.category}
                    onChange={changeHandel}
                    className="form-control"
                    placeholder="Enter Mobile"
                    name="category"
                  />
                </div>
                <button
                  type="submit"
                  onClick={submitHandel}
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
