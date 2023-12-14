// import React from "react";
import styled from "styled-components";
import { CiShoppingCart } from "react-icons/ci";
export default function Navbar() {
  return (
    <DIV>
      <nav>
        <div className="left_container">
          <p className="logoo">Recco</p>
          <p className="links">Store</p>
          <p className="links">Orders</p>
          <p className="links">Analytics</p>
        </div>
        <div className="main-icon">
          <div></div>
          <div className="icons_container">
            <p className="cart">
              <CiShoppingCart />
            </p>

            <select className="custom-select">
              <option>Hello, James </option>
            </select>
          </div>
        </div>
      </nav>
    </DIV>
  );
}

const DIV = styled.div`
  nav {
    display: flex;
    background-color: rgb(30, 99, 63);
    justify-content: space-around;
    align-items: center;
  }

  .left_container {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-around;
    color: white;
  }

  .logoo {
    font-size: 1.4rem;
  }

  .links p {
    font-size: 1.1rem;
  }
  .main-icon {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .icons_container {
    display: flex;
    align-items: center;
    float: left;
    width: 20%;
    justify-content: space-around;
    color: white;
  }

  .custom-select {
    background: none;
    border: none;
    padding: 5px;
    color: white;
    font-size: 0.8rem;
    border-style: none;
  }

  .cart {
    font-size: 1.3rem;
  }
`;
