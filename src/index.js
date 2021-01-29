import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import EditPage from "./todo/EditPage/EditPage";
import state from "./BLL/state"

export let rerenderAll = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path='/editPage/:id?' render={ () => <EditPage />}></Route>
                <Route path="/">
                    <App state={state}/>
                </Route>
            </Switch>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderAll();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
