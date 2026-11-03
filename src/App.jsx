
import { useState } from "react";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="card">
          <h1>Welcome to Dashboard</h1>
          <p>Name: Rizwana Shaik</p>
          <p>Course: Computer Engineering</p>
          <p>Status: Active</p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="card">
          <h1>Student Login</h1>
          <p>Click the button to log in.</p>

          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;