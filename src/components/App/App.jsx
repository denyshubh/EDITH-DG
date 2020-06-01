import React, { Component } from 'react';
import './App.css';
import Cars from '../cars'
import NavBar from '../navbar';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "../loginForm";
import RegisterForm from "../registerForm";
import Logout from "../logout";
// import ProtectedRoute from "../common/protectedRoute";
import auth from "../../services/authService";
import NotFound from "../notFound";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <BrowserRouter>
        <NavBar user={user}/>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/cars" component = {Cars}/>
            <Redirect from="/" exact to="/cars" />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
