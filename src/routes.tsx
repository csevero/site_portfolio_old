import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import createPost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Historia from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Register from "./pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/historia' component={Historia} />
        <Route path='/postagens' component={Posts} />
        <Route path="/postagem/:categoryName/:id" component={Post} />
        <Route path='/cadastro' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/criar-post' component={createPost} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
