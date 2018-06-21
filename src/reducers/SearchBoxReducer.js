import { WRITING, SEARCHING, SEARCHDONE, HAS_STOPPED_WRITING } from "../actions/SearchBoxActions";

const initialState = { init: true, userInput: "", foundUsers:[], isWriting: false, hasStoppedWriting: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case WRITING:
      return { ...state,
        init: false,
        userInput: action.payload, 
        isWriting: true,
        isLoading: true
      };

    case SEARCHING:
      return {...state, foundUsers: action.payload, isLoading: false, isWriting: false};

    case SEARCHDONE:
      return {...state, isLoading: false, foundUsers: action.payload};

    case HAS_STOPPED_WRITING:
      return {...state, isWriting: false, hasStoppedWriting: true}

    default:
      return state;
  }
};
