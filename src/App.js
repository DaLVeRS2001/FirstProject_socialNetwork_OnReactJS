import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {


  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={()=> <DialogsContainer />} />
        <Route path='/profile' render={()=> <Profile /> } />
        <Route path='/users' render={()=> <UsersContainer/> } />
      </div>
    </div>
)
}




export default App;
