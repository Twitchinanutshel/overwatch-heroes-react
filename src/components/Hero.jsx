import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../heroes.json';

const Hero = () => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    if (data) {
      console.log('heroes', data);
      setHeroData(data);
    }
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      {heroData.map((heroRoleObj, index) => {
        const role = Object.keys(heroRoleObj)[0];
        const heroes = heroRoleObj[role];

        return (
          <div key={index} className='bg-gray-200 p-4 rounded-md shadow-md'>
            <h1 className='text-2xl font-bold mb-4'>{role}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {heroes.map((heroObj) => (
                <Link to={`/${heroObj.name}`} key={heroObj.id} className='block mb-2'>
                  <h3 className='text-lg text-blue-500 hover:underline'>{heroObj.name}</h3>
                </Link>
              ))}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
