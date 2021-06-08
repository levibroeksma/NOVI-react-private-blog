import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams, NavLink} from 'react-router-dom';
import HomePage from "./Pages/Home-page";
import Login from "./Pages/Login";
import Blogs from "./Pages/Blogs";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  function BlogById() {
      const params = useParams();
      // console.log("WAT ZIT HIER IN?: ", params)
      return <h2>{params.id}</h2>
  }
  const [authenticated, setAuthenticated] = useState();

  return (
    <div>
        <Router>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    {authenticated && (
                        <>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/blog/:id">Blog post</NavLink></li>
                        </>
                    )}
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    <Login
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <Route exact path="/blog">
                    <Blogs/>
                </Route>
                <Route path="/blog/:id">
                    <BlogById/>
                </Route>

            </Switch>
        </Router>

    </div>
  );
}

export default App;
