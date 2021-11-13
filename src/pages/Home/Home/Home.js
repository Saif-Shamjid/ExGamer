import React from 'react';
import Faq from '../../Shared/Faq/Faq';
import HomeHeader from '../HomeHeader/HomeHeader';
import OurReview from '../OurReview/OurReview';
import TopGame from '../TopGame/TopGame';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <TopGame></TopGame>
            <OurReview></OurReview>
            <Faq></Faq>
        </div>
    );
};

export default Home;