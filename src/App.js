import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import HelloWorld from "./components/helloworld";
import LogOut from "./components/logout";
import { loginUrl } from "./settings";
import LogIn from "./components/login";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/index.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const logInFunc = async (user) => {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    setUserName(data.username);
    setUserRole(data.role);
    if (data.username != null && data.username != "") {
      setLoggedIn(true);
    }
  };
  
  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
  };

  return (
    <div className="App">
      <Header />

      {loggedIn && <HelloWorld name={userName} role={userRole} />}

      {loggedIn && (
        <nav className="borderNoTop">
          <Link to="/">Home</Link>
          <Link to="/jokes">jokes</Link>
          <Link to="/facts">facts</Link>
        </nav>
      )}
      <Outlet />

      {!loggedIn && <LogIn onAdd={logInFunc} />}

      {loggedIn && <LogOut onClick={logOutFunc} />}

      <Footer />
    </div>
  );
}

export default App;