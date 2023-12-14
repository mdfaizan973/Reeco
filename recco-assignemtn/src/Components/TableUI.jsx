// import React from 'react'
import styled from "styled-components";

export default function TableUI() {
  const array = [1, 2, 3, 4, 5];

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
          {array.map((ele, i) => (
            <tr key={i}>
              <td>
                <img
                  src="https://i.pinimg.com/564x/d8/05/5f/d8055f0a0148a3f452ff4869bfb9615b.jpg"
                  alt="Logo"
                  className="logo"
                />
              </td>

              <td className="discription">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed
                Eiusmod
              </td>
              <td className="brand">Harmel Blak Lokakis</td>
              <td>$300</td>
              <td>3</td>
              <td> 6</td>
              <td>Buttons</td>
              <td>✅ ❌ Edit</td>
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
`;
