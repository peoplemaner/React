import { Route, Link, Switch } from "react-router-dom"
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Introduce</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to='/history'>HistorySample</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/profiles" component={Profiles} />
        <Route path='/history' component={HistorySample} />
        <Route 
          // path를 지정하지 않으면 모든 상황에서 렌더링 됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )} />
      </Switch>
    </div>
  );
}

export default App;