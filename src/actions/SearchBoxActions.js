import axios from "axios";

export const WRITING = "WRITING THE SEARCH TERMS";
export const WAITING = "WAITING";
export const SEARCHING = "SEARCHING FOR USERS";
export const SEARCHDONE = "SEARCH DONE"

export const writing = text => {
  return {
    type: WRITING,
    payload: text
  };
};

export const waiting = () => {
  return {
    type: WAITING,
  };
};

export const searchDone = data => {
    return {
        type: SEARCHDONE,
        payload: data
    }
}
