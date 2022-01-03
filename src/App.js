import Schedule from "./Schedule";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Schedule timeSpan='weekly'/>
          </Route>
          <Route path='/Time-tracking-dashboard-hub/daily'>
            <Schedule timeSpan='daily'/>
          </Route>
          <Route path='/Time-tracking-dashboard-hub/monthly'>
            <Schedule timeSpan='monthly'/>
          </Route>
          <Route path='/Time-tracking-dashboard-hub/weekly'>
            <Schedule timeSpan='weekly'/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
