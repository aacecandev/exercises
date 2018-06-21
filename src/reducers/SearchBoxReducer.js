import { WRITING } from "../actions/SearchBoxActions";

const initialState = { userInput: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case WRITING:
      return { ...state, 
        userInput: action.payload, 
        isWriting: true,
        isLoading: true
      };

    default:
      return state;
  }
};
