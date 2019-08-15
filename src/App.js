import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomeLayout = lazy(() => import("./containers/HomeLayout"));
const DetailLayout = lazy(() => import("./containers/DetailLayout"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading Components...</div>}>
      <Switch>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/:id" component={DetailLayout} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
