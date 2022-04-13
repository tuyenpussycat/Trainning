
// import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Calculator from "./page/Calculator.jsx";
import Home from "./page/Home.jsx";
import TodoList from "./page/TodoList.jsx";
function App() {  

  return (
    <>
    <Router>
      <div >
       
          <ul className="flex bg-slate-400 ">
          
              <NavLink exact
                style={{
                  height:'100px',
                  width:'150px',
                  textAlign:'center',
                  paddingTop:'37px',
                  marginLeft:'0%'
                }}
                activeStyle={{
                  color: "chocolate"
,              backgroundColor: '#f0f0f0',
                }}
              to="/">HOME</NavLink>
           
          
              <NavLink to="/calculator"
            style={{
              height:'100px',
              width:'150px',
              textAlign:'center',
              paddingTop:'37px',
              marginLeft:'0%'
            }}
            activeStyle={{
            width:'150px',color: "chocolate"
,            backgroundColor: '#f0f0f0',
                 }}
            >CALCULATOR</NavLink>
           
          
              <NavLink to="/todolist"
             style={{
              height:'100px',
              width:'150px',
              textAlign:'center',
              paddingTop:'37px',
              marginLeft:'0%'
            }}
               activeStyle={{
                 color: "chocolate"
,              backgroundColor: '#f0f0f0',
            }}
            >TODOLIST</NavLink>
           
          </ul>
       

      
        <Switch >
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
