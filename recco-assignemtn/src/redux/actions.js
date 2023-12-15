// actions.js
import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const UPDATE_DATA = "UPDATE_DATA";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
// redux/actions.js
export const updateData = (updatedData) => ({
  type: UPDATE_DATA,
  payload: updatedData,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
        console.log("Data:", response.data);
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
        console.error("Error fetching data:", error.message);
      });
  };
};
