
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
function reducer(state = { artist: {}, err: "", }, action) {
    if (action.type === "SEARCH")
      return { err: "", artist: action.art, };
    else if (action.type === "ERROR") return { ...state, err: action.err };
    else return state;
  }
  
  const store = createStore(reducer, applyMiddleware(thunk));
  export default store;