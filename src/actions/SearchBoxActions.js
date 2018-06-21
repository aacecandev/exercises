import axios from "axios";

export const WRITING = "WRITING THE SEARCH TERMS";
export const WAITING = "WAITING";

export const writing = text => {
  return {
    type: WRITING,
    payload: text
  };
};

export const waiting = () => {
  return {
    type: WAITING,
    payload: ""
  };
};

export const search = word => {
  axios
    .get(`https://api.github.com/users/${word}`)
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
};
