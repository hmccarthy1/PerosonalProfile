import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMatchups } from '../utils/api';
import  Header  from '../components/Header';
import Section from '../components/aboutMeSection';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const [matchupList, setMatchupList] = useState([]);

  useEffect(() => {
    const getMatchupList = async () => {
      try {
        const res = await getAllMatchups();
        if (!res.ok) {
          throw new Error('No list of matchups');
        }
        const matchupList = await res.json();
        setMatchupList(matchupList);
      } catch (err) {
        console.error(err);
      }
    };
    getMatchupList();
  }, []);

  return (
    
    <div className='mainRouter row'>
    
  
    
  
    </div>
  );
};

export default Home;
