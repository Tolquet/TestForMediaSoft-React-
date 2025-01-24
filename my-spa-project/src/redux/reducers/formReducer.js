const initialState = {
    name: "",
    email: "",
  };
  
  const formReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case "SAVE_FORM_DATA":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default formReducer;
  