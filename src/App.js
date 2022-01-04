import Schedule from "./Schedule";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Schedule timeSpan='weekly'/>
          </Route>
          <Route path='/daily'>
            <Schedule timeSpan='daily'/>
          </Route>
          <Route path='/monthly'>
            <Schedule timeSpan='monthly'/>
          </Route>
          <Route path='/weekly'>
            <Schedule timeSpan='weekly'/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
