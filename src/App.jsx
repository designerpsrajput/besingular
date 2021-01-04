import React from 'react';
import Header from './Header';
import Wrapper from './Wrapper';
import Allcourses from './Allcourses';
import { BrowserRouter, Route, Switch,} from "react-router-dom";

const App = () => {
    return (
        <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Wrapper} />
            <Route path="/allcourses" component={Allcourses} />
          </Switch>
        </BrowserRouter>
      </>
    );
}

export default App;