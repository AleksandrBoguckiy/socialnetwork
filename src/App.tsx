import './App.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import React from 'react';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <HashRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <Profile />}/>
                    <Route path='/users' render={() =><UsersContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;