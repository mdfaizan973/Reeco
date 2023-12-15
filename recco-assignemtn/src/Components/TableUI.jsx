// import React from 'react'
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import Loading from "./Loading";
export default function TableUI() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  const [show, setShow] = useState({});
  const [brandName, setBrandName] = useState({});
  const [editData, seteditData] = useState({});
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(show);
  const handleEditModal = (id) => {
    document.getElementById("edit_modal").showModal();
    const found_e_Data = data.find((item) => item.id === id);
    seteditData(found_e_Data);
  };
  const handle_close_dialog = () => {
    document.getElementById("edit_modal").closeModal();
  };
  const handlemissingModal = (id) => {
    document.getElementById("missing_moodal").showModal();
    const foundData = data.find((item) => item.id === id);
    setBrandName(foundData);
  };

  // Approve
  const handleButtonClick = (value) => {
    // setShow({ [value]: true });
    setShow(value);
  };
  return (
    <DIV>
      <dialog id="edit_modal">
        <div className="modal-content">
          <form method="dialog">
            <div className="text-con">
              <h5>{editData.description}</h5>
              <p>{editData.brand}</p>
            </div>
            <button className="" onClick={handle_close_dialog}>
              X
            </button>
          </form>
          <div className="content-edit">
            <div className="img_con">
              <img src={editData.image} />
            </div>
          </div>
        </div>
      </dialog>
      <dialog id="missing_moodal">
        <div className="modal-content">
          <form method="dialog">
            <h3>Missing Product</h3>
            <button className="" onClick={handle_close_dialog}>
              X
            </button>
          </form>
          <div>
            <h3>Is {brandName.brand}.. urgent?</h3>
          </div>
          <div className="confem_buttons">
            <button onClick={() => handleButtonClick("no")}>NO</button>
            <button onClick={() => handleButtonClick("yes")}>YES</button>
          </div>
        </div>
      </dialog>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Ountity</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => (
            <tr key={i}>
              <td>
                <img src={ele.image} alt={ele.brand} className="logo" />
              </td>

              <td className="discription">{ele.description}</td>
              <td className="brand">{ele.brand}</td>
              <td>${ele.price}</td>
              <td>{ele.quantity}</td>
              <td>{ele.total}</td>
              <td>
                <button className="approved">Approved</button>
              </td>
              <td className="actions">
                <button onClick={() => handleButtonClick("show")}>✅</button>
                <button onClick={() => handlemissingModal(ele.id)}>❌</button>
                <button onClick={() => handleEditModal(ele.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DIV>
  );
}
const DIV = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-radius: 10px;
  }

  th,
  td {
    text-align: left;
    padding: 12px;
    border-radius: 10px;
    border-bottom: 1px solid #dddddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  .logo {
    width: 30px;
    height: auto;
  }
  .discription {
    width: 30%;
  }
  .brand {
    width: 10%;
  }

  .approved {
    background-color: rgb(61, 202, 114);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }

  .approved:hover {
    background-color: darkgreen;
  }
  .actions button {
    border: none;
    background-color: white;
    cursor: pointer;
  }

  #edit_modal,
  #missing_moodal {
    position: fixed;
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: white;
    border: none;
    width: 25%;
  }
  #edit_modal,
  #missing_moodal .modal-content {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.75rem;
    text-align: center;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  form button {
    border: none;
    background-color: white;
    cursor: pointer;
    font-size: 1.2rem;
  }
  .confem_buttons {
    display: flex;
    justify-content: end;
  }
  .confem_buttons button {
    border: none;
    padding: 3px;
    font-size: 1rem;
    margin-left: 15px;
    background-color: white;
    cursor: pointer;
  }
  .content-edit img {
    width: 100%;
  }
  .img_con {
    width: 30%;
  }
  .text-con {
    text-align: start;
  }
`;
// #db2114 - mu
// #f66d44  u
