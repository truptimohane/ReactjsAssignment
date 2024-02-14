import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Subheader() {
  // Styled components
  const SubHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background: #fff;
    border-bottom: 2px solid gray;

    Button {
      color: black;
    }

    li {
      list-style: none;
      display: inline-block;
      margin-right: 25px;
    }
  `;
  return (
    <div>
      <SubHeader>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button>About</Button>
          <Button>My Account</Button>
          <Button>Wishlist</Button>
          <Button>Order Traking</Button>
        </ButtonGroup>
        <p>100% Secure delivery without contacting the courier</p>
        <ul>
          <li>
            Need help? Call <br />
            Us:
          </li>

          <li style={{ color: "green" }}>
            + 1800 <br />
            900
          </li>

          <li>English |</li>
          <li>USD |</li>
        </ul>
      </SubHeader>
    </div>
  );
}

export default Subheader;
