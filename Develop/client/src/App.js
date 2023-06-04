import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div className=" col-12 min-100-vh">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
          path='/aboutme'
          element={<AboutMe/>}
          />
          <Route
          path='/contact'
          element={<Contact/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
