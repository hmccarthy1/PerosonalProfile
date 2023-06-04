import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Footer from './components/footer';
import Header from './components/Header';
import Resume from './pages/resume';

function App() {
  return (
    <Router>
      
      <Header></Header>

      <div className=" col-12  content-container" >

      
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
          <Route
          path='/resume'
          element={<Resume/>}
          />
        </Routes>

      </div>

      <Footer></Footer>
    </Router>
  );
}

export default App;
