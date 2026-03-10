import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar w-100">
            <span className="navbar-brand">
              <img src={process.env.PUBLIC_URL + '/octofitapp-small.svg'} alt="OctoFit Logo" style={{height: '48px', marginRight: '1rem'}} />
              OctoFit Tracker
            </span>
            <div className="navbar-nav">
              <Link className="nav-link" to="/activities">Activities</Link>
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              <Link className="nav-link" to="/teams">Teams</Link>
              <Link className="nav-link" to="/users">Users</Link>
              <Link className="nav-link" to="/workouts">Workouts</Link>
            </div>
          </nav>
        </header>
        <main style={{padding: '2rem'}}>
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <>
                <h1>Welcome to OctoFit Tracker</h1>
                <p className="lead">Track your fitness, join teams, and compete on the leaderboard!</p>
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
