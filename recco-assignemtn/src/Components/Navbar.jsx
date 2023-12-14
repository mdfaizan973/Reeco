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
      {/* Sub-Nav */}
      <div className="sub_nav">
        <div className="top_sub_nav">
          <p>
            Orders - <span>Order 32457ABC</span>
          </p>
        </div>
        <div className="bot_sub_nav">
          <h3>Order 32457ABC</h3>

          <div className="buttons_group">
            <button className="back">Back</button>
            <button className="approve">Approve order</button>
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  nav {
    display: flex;
    background-color: rgb(30, 99, 63);
    justify-content: space-around;
    align-items: center;
    height: 60px;
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
    font-weight: 600;
  }

  .links {
    cursor: pointer;
  }
  .links:hover {
    color: rgb(223, 219, 219);
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
    cursor: pointer;
  }

  .cart {
    font-size: 1.4rem;
    cursor: pointer;
    margin-right: 25px;
  }
  .cart:hover {
    color: rgb(223, 219, 219);
  }
  /* Sub_Nav */
  .sub_nav {
    width: 86%;
    height: 88px;
    margin: auto;
  }

  .top_sub_nav {
    width: 100%;
    height: 45%;
  }
  .top_sub_nav p {
    font-size: 0.8;
    color: rgb(104, 103, 103);
  }
  .bot_sub_nav {
    width: 100%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bot_sub_nav h3 {
    font-size: 1.4rem;
  }
  .buttons_group {
    width: 18%;
    display: flex;
    justify-content: space-around;
  }
  .back {
    padding: 10px 22px;
    border: 1px solid green;
    color: green;
    font-weight: 600;
    border-radius: 20px;
    background-color: white;
  }
  .approve {
    padding: 10px 22px;
    background-color: rgb(30, 99, 63);
    color: white;
    font-weight: 600;
    border-radius: 20px;
    border: none;
  }
`;
