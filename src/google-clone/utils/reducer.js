export const initialState = {
  term: "",
  loading:false,
  error:null,
  data:null
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_LOADING:"SET_LOADING",
  SET_ERROR:"SET_ERROR",
  SET_DATA:"SET_DATA"
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.SET_LOADING:return {
      ...state,
      loading:true
    }
    case actionTypes.SET_DATA:return {
      ...state,
      loading:false,
      data:action.payload
    }
    case actionTypes.SET_ERROR:return {
      ...state,
      error:true,
      loading:false
    }
    default:
      return state;
  }
};

export default reducer;
