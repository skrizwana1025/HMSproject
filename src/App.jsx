import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample credentials
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // Dashboard
  if (isLoggedIn) {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Welcome, {username}!</h2>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  // Login Page
  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;