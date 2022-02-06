import React from 'react';
import Places from '../../Places/Places';
import Plans from '../../Plans/Plans';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';
import Newsteller from '../Newsteller/Newsteller';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Places></Places>
            <Reviews></Reviews>
            <Newsteller></Newsteller>
            <Footer></Footer>
        </div>
    );
};

export default Home;