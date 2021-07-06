import './App.css';
import Todo from './components/Todo';
import {Grid} from '@material-ui/core';


function App() {
  return (
      <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      >  
    

      <Grid item xs={4}>
      </Grid>

      <Grid item xs={4}>
        <Todo/> 
      </Grid>

      <Grid item xs={4} >
      </Grid>



      </Grid>
   
  );
}

export default App;
