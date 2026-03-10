import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar w-100">
          <span className="navbar-brand">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.svg'} alt="OctoFit Logo" style={{height: '48px', marginRight: '1rem'}} />
            OctoFit Tracker
          </span>
          <div className="navbar-nav">
            <a className="nav-link" href="#activities">Activities</a>
            <a className="nav-link" href="#leaderboard">Leaderboard</a>
            <a className="nav-link" href="#teams">Teams</a>
            <a className="nav-link" href="#users">Users</a>
            <a className="nav-link" href="#workouts">Workouts</a>
          </div>
        </nav>
      </header>
      <main style={{padding: '2rem'}}>
        <h1>Welcome to OctoFit Tracker</h1>
        <p className="lead">Track your fitness, join teams, and compete on the leaderboard!</p>
      </main>
    </div>
  );
}

export default App;
