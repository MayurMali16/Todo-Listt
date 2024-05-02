import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addTodo, deleteTodo } from "../actions";

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [showTasks, setShowTasks] = useState(false); // Initially tasks are hidden
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);

  return (
    <div>
      <div className='container'>
        <div className='content'>
          <h1>Add your tasks 👍</h1>
          <button className="view-button" onClick={() => setShowTasks(!showTasks)}>
          {showTasks ? 'Hide Tasks' : 'View Tasks'}
        </button>
        </div>

        <div className='addTasks'>
          <input
            type='text'
            placeholder='Add Tasks ✍️....'
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            required
          />
          <i
            className="fa fa-plus add-button"
            onClick={() => {
              if (inputData.trim() !== '') {
                dispatch(addTodo(inputData));
                setInputData('');
              }
            }}
          ></i>
          
        </div>
        
       

        {showTasks && (
          <div className="showTasks">
         
            {list.map((ele) => (
              <div className="eachTask" key={ele.id}>
                <p>{ele.data}</p>
                <i className="fa fa-trash-alt add-button" title="Delete-Item" onClick={() => dispatch(deleteTodo(ele.id))}></i>
              </div>
            ))}
          </div>
          
        )}
       
      </div>
      
    </div>
  )
}

export default Todo;
