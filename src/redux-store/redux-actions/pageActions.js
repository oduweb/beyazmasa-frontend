import * as actionType from "./actionTypes";
import axios from "axios";

export function changePage(page) {
  return { type: actionType.CHANGE_PAGE, payload: page };
}

export function getPostData(page) {
  return { type: actionType.GET_POST, payload: page };
}

export function getPost() {
  return dispatch => {
    axios({
      url: "http://localhost:5001/graphql",
      method: "post",
      data: {
        query: `
        query{
          allUsers{
            Id
            firstName
            userName
            password
            posts{
              title
            }
          }
        }
          `
      }
    })
      .then(response => response.data.data.allUsers)
      .then(result => {
        console.log(result);
        dispatch(getPostData(result));
      });
  };
}
