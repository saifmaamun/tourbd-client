import React from 'react';
import Places from '../../Places/Places';
import Plans from '../../Plans/Plans';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Plans></Plans>
        </div>
    );
};

export default Home;