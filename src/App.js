import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";  
import CreateUser from "./components/user/CreateUser";
import ExerciseList from "./components/exercise/ExerciseList";
import EditExercise from "./components/exercise/EditExercise";
import CreateExercise from "./components/exercise/CreateExercise";

function App() {

  return (
    <Router>
    <div>
      <Navbar/>
      <br />
    <Routes>
      <Route path = "/" element = {<ExerciseList />}/>
      <Route path = "/user" element = {<CreateUser />}/>
      <Route path = "/edit/:id" element = {<EditExercise />}/>
      <Route path = "/create" element = {<CreateExercise />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
