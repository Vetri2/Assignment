import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Route path="/" exact component={Dashboard} />
                <Route path="/users" component={ListUsers} />
                <Route path="/create-user" component={CreateUser} />
                <Route path="/edit-user/:id" component={EditUser} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/edit-profile/:id" component={EditProfile} />
            </div>
        </Router>
    );
};

export default AppRouter;
