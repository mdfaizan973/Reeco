// import React from 'react'
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import Loading from "./Loading";
export default function TableUI() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  // const prod_data = JSON.stringify(data);
  console.log(data);

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
  return (
    <DIV>
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

              <td className="discription">
                {/* Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed
                Eiusmod */}
                {ele.description}
              </td>
              <td className="brand">{ele.brand}</td>
              <td>${ele.price}</td>
              <td>{ele.quantity}</td>
              <td>{ele.total}</td>
              <td>
                <button className="approved">Approved</button>
              </td>
              <td className="actions">
                <button>✅</button> <button>❌</button> <button>Edit</button>{" "}
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
`;
// #db2114 - mu
// #f66d44  u
