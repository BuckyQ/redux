const INIT_STATE = 0;

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + action.payload.newValue;
        case "DECREMENT":
            return state - 1;
        case "INCREMENTIFODD":
            return (state % 2 === 1) ? state + 1 : state ;
        case "ASNYC":
            return state + 1;
        case "TIMEADD":
            return state + 1;
        case "STOPTIME":
            return state;
        default:
            return state;
    }

};

export default reducer;