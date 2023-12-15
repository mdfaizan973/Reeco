import styled from "styled-components";

export default function Loading() {
  return (
    <DIV>
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin: 0;

  .loading-container {
    position: relative;
    width: 100px;
    height: 100px;
  }

  .loading-spinner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 70px;
    height: 70px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
