import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../heroes.json';

const HeroPage = () => {
  const { name } = useParams();

  const hero = data
    .flatMap((heroRoleObj) => Object.values(heroRoleObj)[0])
    .find((hero) => hero.name === name);

  if (!hero) {
    return <div>Hero not found</div>;
  }

  return (
    <>
      <div className='absolute top-0 right-0 p-4'>
        <Link to='/overwatch-heroes-react/' className='text-3xl font-bold mb-4'>Go Back</Link>
      </div>
      <div className='p-4'>
        <h1 className='text-3xl font-bold mb-4'>{hero.name}</h1>
        <p className='mb-4'><strong>Role:</strong> {hero.role}</p>
        <p className='mb-4'><strong>Abilities:</strong></p>
        <ul className='list-disc pl-6'>
          {hero.abilities.map((ability, index) => (
            <li key={index} className='mb-1'>{ability}</li>
          ))}
        </ul>
        <p className='my-4'><span className='font-bold'>Ultimate: </span>{hero.ultimate}</p>
        <p className='mb-4'><strong>Synergies:</strong></p>
        <ul className='list-disc pl-6'>
          {hero.synergies.map((synergy, index) => (
            <li key={index} className='mb-1'>
              <Link to={`/${synergy}`}>
                {synergy}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeroPage;
