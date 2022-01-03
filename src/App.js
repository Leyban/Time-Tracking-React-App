import Schedule from "./Schedule";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/Time-Tracking-React-App/'>
            <Schedule timeSpan='weekly'/>
          </Route>
          <Route path='/Time-Tracking-React-App/daily'>
            <Schedule timeSpan='daily'/>
          </Route>
          <Route path='/Time-Tracking-React-App/monthly'>
            <Schedule timeSpan='monthly'/>
          </Route>
          <Route path='/Time-Tracking-React-App/weekly'>
            <Schedule timeSpan='weekly'/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
