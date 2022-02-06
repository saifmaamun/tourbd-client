import React from 'react';
import Places from '../../Places/Places';
import Plans from '../../Plans/Plans';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <h1>banner</h1>
            <Places></Places>
            <Plans></Plans>
        </div>
    );
};

export default Home;