import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Footer from './components/footer';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';

function App() {
  return (
    <>

    <div className='appContainer column'>

    <Router>
      
      <div className='headerContainer'> 
      <Header></Header>
      </div>
      <div className='bodyContainer'>
        
      </div>
    </Router>
    </div>


    </>
  )

}

export default App;
/* 


    <Router>
      
      <Header></Header>

      <div className=" col-12  content-container"  style={{width: '100%'}}>

      
        <Routes>
          <Route 
            path="/" 
            element={<AboutMe />} 
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
          />,
          <Route
          path='portfolio'
          element={<Portfolio/>}
          />
        </Routes>

      </div>

      <Footer></Footer>
    </Router>
  );
}

export default App;

*/