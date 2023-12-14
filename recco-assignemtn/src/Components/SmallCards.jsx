// import React from 'react'
import styled from "styled-components";

export default function SmallCards() {
  return (
    <DIV>
      <div className="main_container">
        <div className="card sec-1">
          <div className="card-inner">
            <p>Supplier</p>
            <h4>East coast fruites & veetables</h4>
          </div>
        </div>
        <div className="card sec-2">
          <div className="card-inner">
            <p>Shipping Date</p>
            <h4>Thu, Feb 10 </h4>
          </div>
        </div>
        <div className="card sec-3">
          <div className="card-inner">
            <p>Total</p>
            <h4>$ 15,028.03</h4>
          </div>
        </div>
        <div className="card sec-4">
          <div className="card-inner">
            <p>Category</p>
            <h4>East coast fruites </h4>
          </div>
        </div>
        <div className="card sec-5">
          <div className="card-inner">
            <p>Department</p>
            <h4>300-444-678</h4>
          </div>
        </div>
        <div className="card sec-6">
          <div className="card-inner">
            <p>Status</p>
            <h4>Awaiting your approvel</h4>
          </div>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  width: 85%;
  margin: 25px auto;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  height: 130px;
  border-radius: 10px;
  .main_container {
    display: flex;
    justify-content: space-between;
  }
  .card {
    text-align: start;
    width: 100%;
    height: 130px;
    box-shadow: rgba(33, 35, 38, 0.1) 10px 0px 10px -10px;
  }

  .card-inner {
    width: 65%;
    margin: auto;
  }
  .card-inner p {
    margin-top: 30px;
    color: rgb(134, 134, 134);
    font-size: 0.8rem;
    font-weight: 600;
  }
  .card-inner h4 {
    margin-top: -5px;
  }
`;
