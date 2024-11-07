import './App.css'
import React, { useEffect } from 'react';
import Home from './Home.jsx';
import AllTasks from "./AllTasks.jsx";
import ImportantTasks from "./ImportantTask.jsx";
import CompletedTasks from "./incompletedTask.jsx";
import IncompletedTasks from "./completedTask.jsx";
import { Routes, Route, useNavigate} from "react-router-dom";
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './auth.jsx';

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }else if(isLoggedIn === false){
      navigate("/signup");
    }
  }, []);
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
        <Routes>
          <Route exact path = "/" element = {<Home />} >
            <Route index element = {<AllTasks />} />
            <Route path = "/importantTasks" element = {<ImportantTasks />} />
            <Route path = "/completedTasks" element = {<CompletedTasks />} />
            <Route path = "/incompletedTasks" element = {<IncompletedTasks />} />
          </Route>
          <Route path="/signup" element= {<Signup/>} />
          <Route path="/login" element= {<Login/>} />
        </Routes>  
    </div>
  )
}

export default App
