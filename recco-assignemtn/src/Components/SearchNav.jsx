import styled from "styled-components";
import { FiPrinter } from "react-icons/fi";

export default function SearchNav() {
  return (
    <DIV>
      <div className="main_container">
        <div className="input-box">
          <input placeholder="Search.. " />
          {/* <svg
            className="svgs"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l5 4.99L20.49 18l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg> */}
        </div>
        <div className="buttons">
          <button className="add">Add item</button>
          <h4>
            <FiPrinter />
          </h4>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  width: 90%;
  margin: auto;
  padding: 15px;
  .main_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-box {
    width: 38%;
  }
  .input-box input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  /* .svgs {
    position: absolute;
    top: 57%;
    right: 900px;
    transform: translateY(-50%);
    fill: #ccc;
    cursor: pointer;
  } */
  .buttons {
    display: flex;
    align-items: center;
  }
  .add {
    padding: 10px 22px;
    border: 1px solid green;
    color: green;
    font-weight: 600;
    border-radius: 20px;
    background-color: white;
    margin-right: 30px;
  }
  h4 {
    font-size: 1.2rem;
    color: green;
  }
`;
