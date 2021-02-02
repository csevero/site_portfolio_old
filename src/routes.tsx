import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre-mim" component={About} />
        <Route path="/contato" component={Contact} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
