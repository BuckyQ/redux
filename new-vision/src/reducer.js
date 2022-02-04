const INIT_STATE = {
    counter: 0,
    todos: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "INCREMENT":
            return { 
                ...state,
                counter: state.counter + 1, 
            };
        case "DECREMENT":
            return { 
                ...state,
                counter: state.counter - 1,
            };
        case "INCREMENTIFODD":
            return {
                ...state,
                counter:(state.counter % 2 === 1) ? state.counter + 1 : state.counter
            };
        case "ASNYC":
            return { 
                ...state,
                counter: state.counter + 1, 
            };
        case "TIMEADD":
            return { 
                ...state,
                counter: state.counter + 1, 
            };
        case "STOPTIME":
            return { 
                ...state,
                counter: state.counter
            };
        case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }

};

export default reducer;