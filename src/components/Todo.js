import React,{useState} from 'react';
import {TextField,Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import './Todo.css';


function Todo() {
    const [input, setInput] = useState('');
    const [todolist, setTodolist] = useState([])
    const handleChange =(e)=>{
        setInput(e.target.value)
    };
    const save=()=>{
        todolist.push(input)
        setTodolist([...todolist])
        }
    return (
       
        <div>

        <h1>TODO List</h1>
        <form>
        <TextField
          label="Task"
          variant="outlined"
          size="small" 
          style={{paddingRight:'20px'}}
          onChange={(e)=> handleChange(e)}
        />
        
        <Button
        type="reset"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
        onClick={save}
        >
        </Button>
        </form>

       <ul>
          {todolist.map((t)=>(
              <li className='listy'  onClick={()=> { todolist.splice(todolist.indexOf(t),1);
                setTodolist([...todolist])
                 }
              }>{t}
              </li>
              
          ))}
        </ul>

        </div>
    )
}

export default Todo
