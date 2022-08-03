const initialState = {
    count: 0
  };

const inReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":  
            return {count:state.count + 1};
        case "DEC":
            return {count:state.count - 1};
        default:
            return state;
    
        }
       
}
export default inReducer;