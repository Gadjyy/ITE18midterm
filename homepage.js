import React from 'react';
import CustomNav from '../Navigation/navigationpage';
import { userData } from '../../helpers';

/* Will display a welcome message to the user that login */
const Home = () => {
    const {username} = userData()
  return (
    <div className="home">
        <CustomNav />
        <div>
            <h2>Welcome {username}</h2> 
        </div>
    </div>
  );
};

export default Home;
