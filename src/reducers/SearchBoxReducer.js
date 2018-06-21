import { WRITING, SEARCHING, SEARCHDONE } from "../actions/SearchBoxActions";

const initialState = { userInput: "", foundUsers:[] };

export default (state = initialState, action) => {
  switch (action.type) {
    case WRITING:
      return { ...state, 
        userInput: action.payload, 
        isWriting: true,
        isLoading: true
      };

    case SEARCHING:
      return {...state, foundUsers: action.payload, isLoading: false};

    case SEARCHDONE:
      return {...state, isLoading: false, foundUsers: action.payload}

    default:
      return state;
  }
};
