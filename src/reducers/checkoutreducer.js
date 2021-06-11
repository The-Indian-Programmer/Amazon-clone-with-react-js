

const initialState = []; /// For the default value of state here state is like a variable
const basket = (state = initialState, action) => {
  /// We have to inc/dec number so create function changeTheNumber which takes two arguments state(a variable) and action (which action we have to perform which we have declared in action/index.js file)

  switch (action.type) {
    case "ADDTOCART": /// For the increment action which we had defined in action/index.js
      console.log("Before Adding the item >>>>", state);
      state = [...state, action.payload];
      console.log("After Adding the item >>>>", state);
      return state;
      break;

    case "REMOVEFROMCART": /// For the decrement action which we had defined in action/index.js
    console.log("Before removeing the item >>>>>",state)
    const newArr = state.filter(item => item !== action.payload)

      return newArr

      break;

    default:
      return state; /// By default
      break;
  }
};

export default basket;
