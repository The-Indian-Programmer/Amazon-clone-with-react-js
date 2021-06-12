

const initialState = {}; /// For the default value of state here state is like a variable
const register = (state = initialState, action) => {
  /// We have to inc/dec number so create function changeTheNumber which takes two arguments state(a variable) and action (which action we have to perform which we have declared in action/index.js file)

  switch (action.type) {
    case "REGISTER": 
      state = action.payload
      return state;
      break;

    case "SIGNIN": 
      state = action.payload
      return state;
      break;

   

    default:
      return state; /// By default
      break;
  }
};

export default register;
