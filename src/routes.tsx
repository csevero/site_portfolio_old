import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/dashboard';
import Historia from './pages/History/history';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Posts from './pages/Posts/posts';
import Register from './pages/Register/register';

export default function Routes() {
   return (
      <BrowserRouter>
         <Route path="/" exact component={Home} />
         <Route path="/historia" component={Historia} />
         <Route path="/postagens" component={Posts} />
         <Route path="/cadastro" component={Register} />
         <Route path="/login" component={Login} />
         <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
   )
}

