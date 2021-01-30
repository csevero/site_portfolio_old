import { BrowserRouter, Switch, Route } from "react-router-dom";
import Historia from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre-mim" component={Historia} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
