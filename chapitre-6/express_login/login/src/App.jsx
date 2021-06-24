import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './views/Signup';
import Login from './views/Login';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                       
                    </ul>
                </nav>

                <Switch>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
