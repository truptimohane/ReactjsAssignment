import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Badge from "@mui/material/Badge";

function Header() {
  const categories = [
    { label: "All" },
    { label: "Milks and Dairies" },
    { label: "Wines & Alcohol" },
    { label: "Clothing & Beauty" },
    { label: "Pet Toys& Foods  " },
    { label: "Fast Foods" },
    { label: "Baking Material" },
    { label: "Vegetables" },
    { label: "Fresh Seafood" },
    { label: "Noodles & Rice" },
    { label: "Ice cream" },
  ];

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background: #fff;
    border-bottom: 2px solid gray;
    margin: 5px;
    overflow: hidden;
  `;

  const Iconbar = styled.header`
    display: flex;
    margin: 10px 10px;

    a {
      text-decoration: none;
      color: black;
      display: flex;
    }

    span {
      margin: 0px 5px 0 -48px;
      font-size: 15px;
    }
  `;

  return (
    <div>
      <Header>
        <div className="logo">
          <img src="img/logo.svg" alt="" srcset="" />
        </div>

        <div className="d-flex items">
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={categories}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="All Categories "
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
          <input
            autoComplete="off"
            type="search"
            className="form-control rounded"
            placeholder="Search for items..."
            style={{ minWidth: 300 }}
          />
        </div>

        <Iconbar>
          <div>
            <a href="#">
              <Badge badgeContent={3} color="success" className="ms-5 me-5">
                <img
                  src="img\icon-compare.svg"
                  alt=""
                  srcset=""
                  color="action"
                />
              </Badge>
              <span>Compare</span>
            </a>
          </div>
          <div>
            <a href="#">
              <Badge badgeContent={6} color="success" className="ms-5 me-5">
                <img src="img\icon-heart.svg" alt="" srcset="" color="action" />
              </Badge>
              <span>Wishlist</span>
            </a>
          </div>
          <div>
            <a href="#">
              <Badge badgeContent={2} color="success" className="ms-5 me-5">
                <img src="img\icon-cart.svg" alt="" srcset="" color="action" />
              </Badge>
              <span>Cart</span>
            </a>
          </div>
          <div>
            <a href="#">
              <Badge badgeContent={0} color="success" className="ms-5 me-5">
                <img src="img\icon-user.svg" alt="" srcset="" color="action" />
              </Badge>
              <span>Acoount</span>
            </a>
          </div>
        </Iconbar>
      </Header>
    </div>
  );
}

export default Header;
