const initialState = 0;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
   case 'add':
     return state+5;
     case 'addnumber':
       return state+action.payload

    default:
      return state;
  }
};
export default changeNumber;
