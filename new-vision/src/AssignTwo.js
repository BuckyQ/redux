import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const  Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const handleClick = id => dispatch({
        type: 'DELETE_TODO',
        payload: id,
    })
    if(!todos || !todos.length){
            return <p>empty</p>
    }
    return( 
        <ul>
        {todos.map(todo => 
        <li>
        {todo.label}
        <button onClick={()=>handleClick(todo.id)}>delete</button>
        </li>
        )}
        </ul>
    )
}
const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value);
    const handleClick = () => dispatch({
        type: "ADD_TODO",
        payload:{
            label: newTodo,
            id: Math.ceil(Math.random() * 100),
        }
    })
    return (
        <>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button onClick={handleClick}>+</button>
        </>
    )
}


function Assigntwo() {
    return (
        <div>
            <h1>ToDo List Component</h1>
            <TodoInput />
            <Todos />
        </div>
    )
}



export default Assigntwo;