import styled from "styled-components";
import SearchNav from "./SearchNav";

export default function Table() {
  return (
    <DIV>
      <SearchNav />
    </DIV>
  );
}
const DIV = styled.div`
  width: 85%;
  margin: 25px auto;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  height: 300px;
  border-radius: 10px;
`;
