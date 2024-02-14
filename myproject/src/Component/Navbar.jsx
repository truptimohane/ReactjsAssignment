import React from "react";
import styled from "styled-components";

// Styled components
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
  border-bottom: 2px solid gray;
`;

const Navbarmenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
`;

const NavbarItem = styled.div`
  display: inline-block;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
`;

const Helpline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItemWithIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -100px;
`;

const SupportCenter = styled.h4`
  margin-top: 10px;
  font-size: 30px;
  font-width: bold;
  color: green;
`;

const Center = styled.p`
  color: grey;
  font-size: 14px;
  margin-left: 20px;
`;

// Component
function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-success dropdown-toggle category"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Browse <br /> All <br /> Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
              <a className="dropdown-item" href="/">
                Dropdown link
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <Navbarmenu>
        <div>
          <div>
            <li class="nav-item" style={{ listStyle: "none" }}>
              <a class="nav-link " aria-current="page" href="#">
                <img
                  src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-hot.svg"
                  alt=""
                  srcset=""
                />
                Deals
              </a>
            </li>
          </div>
        </div>
        <div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn  dropdown-toggle category"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <li class="nav-item" style={{ listStyle: "none" }}>
            <a class="nav-link " aria-current="page" href="#">
              About
            </a>
          </li>
        </div>
        <div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn  dropdown-toggle category"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn  dropdown-toggle category"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Vendors
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn  dropdown-toggle category"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mega menu
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn  dropdown-toggle category"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blog
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn  dropdown-toggle category"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Dropdown link
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <li class="nav-item" style={{ listStyle: "none" }}>
            <a class="nav-link " aria-current="page" href="#">
              Contact
            </a>
          </li>
        </div>
      </Navbarmenu>
      <div>
        <div>
          <NavbarItem>
            <Helpline>
              <NavItemWithIcon>
                <img
                  src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-headphone.svg"
                  className="headimg"
                  alt=""
                  style={{
                    height: "40px",
                    width: "40px",
                    position: "relative",
                    left: "205%",
                  }}
                />
              </NavItemWithIcon>
              <SupportCenter>
                <h4 color="green">
                  1900- <br />
                  888
                </h4>
              </SupportCenter>
            </Helpline>
            <Center>
              <p>24/7 Support Center</p>
            </Center>
          </NavbarItem>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
