import React,{useState,useEffect} from 'react';
import {TextField,Button,List,ListItem,ListItemText} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import './Todo.css';
import db from '../firebase'



function Todo() {
    const [input, setInput] = useState('');
    const [todolist, setTodolist] = useState([])


    const handleSendMessage = async () => {
        await db.collection('todos').add({
          item: input,
        })
      }
    const handleChange =(e)=>{
        setInput(e.target.value)
    };
   
    const deleteTodo = async (id)=>{  
      await db.collection('todos').doc(id).delete()
    }
    
    useEffect(() => {
      db.collection('todos').onSnapshot((docs) => {
        let temp = []
        docs.forEach(doc => {
          temp.push({...doc.data(),id:doc.id})
        })
        setTodolist(temp)
      })
    }, [])  
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
        onClick={handleSendMessage}
        >
        </Button>
        </form>

        <List component="nav">
            {todolist.map((item,e) => (
              <ListItem button onClick={()=>{deleteTodo(item.id)}}>
                <ListItemText primary={item.item} />
              </ListItem>
            ))}
          </List>

        </div>
    )
}

export default Todo
