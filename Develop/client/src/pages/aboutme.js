import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMatchups } from '../utils/api';
import  Header  from '../components/Header';
import Section from '../components/aboutMeSection';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

function AboutMe() {
    return (
    
        <div className='mainRouter row'>
        
        <Header></Header>
        <Section></Section>
        
      
        </div>
      );
    
}
  



export default AboutMe;
