import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMatchups } from '../utils/api';
import Section from '../components/aboutMeSection';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const [matchupList, setMatchupList] = useState([]);

  return (
    
    <div className='mainRouter row'>
    
  
    
  
    </div>
  );
};

export default Home;
