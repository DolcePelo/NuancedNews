import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (articles) => {
    setSearchResults(articles);
  };

  return (
    <Router>
      <div className="app">
        <div className="container">
          <header className="app-header">
            <h1>News Explorer</h1>
            <p>Get well-rounded news articles from various sources</p>
            <nav>
              <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link> |{" "}
              <Link to="/signup">Sign Up</Link>
            </nav>
          </header>
          <main className="app-main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchBar onSearch={handleSearch} />
                    {searchResults.length > 0 && (
                      <div className="search-results">
                        <h2>Search Results</h2>
                        <ul>
                          {searchResults.map((article, index) => (
                            <li key={index}>
                              <h3>{article.title}</h3>
                              <p>{article.description}</p>
                              <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Read more
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                }
              />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
