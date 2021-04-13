import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
import Home from './components/Home';

function App() {
  return (
    // <div className="App">
    //   Hello world!
    // </div>
    <Router>
      <Navbar/>
      <br/>
      <Route exact path="/" component={Home}/>
      <Route path="/exerciseList" component={ExerciseList}/>
      <Route path="/editExercise/:id" component={EditExercise}/>
      <Route path="/createUser" component={CreateUser}/>
      <Route path="/createExercise" component={CreateExercise}/>
    </Router>
  );
}

export default App;
