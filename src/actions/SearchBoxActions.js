import axios from "axios";

export const WRITING = "WRITING THE SEARCH TERMS";
export const WAITING = "WAITING";
export const SEARCHING = "SEARCHING FOR USERS";
export const SEARCHDONE = "SEARCH DONE";
export const HAS_STOPPED_WRITING = "HAS STOPPED WRITING";

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

export const hasStoppedWriting = () => {
  return {
    type: HAS_STOPPED_WRITING
  }
}
