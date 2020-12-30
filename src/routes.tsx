import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import createPost from "./pages/CreatePost/createPost";
import Dashboard from "./pages/Dashboard/dashboard";
import Historia from "./pages/History/history";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import NotFound from "./pages/NotFound/notFound";
import Posts from "./pages/Posts/posts";
import Register from "./pages/Register/register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/historia' component={Historia} />
        <Route path='/postagens' component={Posts} />
        <Route path='/cadastro' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/criar-post' component={createPost} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
