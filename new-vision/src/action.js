

const incAction = () => {
    return {
        type: "INCREMENT",
    };
}

const decAction = () => {
    return {
        type: "DECREMENT"
    };
}

const incIfOddAction = () => {
    return {
        type: "INCREMENTIFODD",
        }
    };

const asnyc = () => {
    return dispatch => {
        setTimeout(()=> {
            dispatch({
                type:"ASNYC"
            })
        },2000)
    };
}

let timer = null;

const timeAdd = () => {
   return dispatch => {
       clearInterval(timer);
       timer = setInterval(() => {
           dispatch({
               type:"TIMEADD"
            })
        }, 500);
   }
}

const stopTime = () => {
    clearInterval(timer);
    return {type: "STOPTIME"}
}






export {
    incAction,
    decAction, 
    incIfOddAction,
    asnyc,
    timeAdd,
    stopTime,
}