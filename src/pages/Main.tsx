import React from 'react';
import MainSlide from '../components/Slides/MainSlide';
import SlideOne from '../components/Slides/SlideOne';
import SlideThree from '../components/Slides/SlideThree';
import SlideTwo from '../components/Slides/SlideTwo';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


export const Main = () => {
    return (<>
        <Navbar />
            <MainSlide />
            <SlideOne />
            <SlideTwo />
            <SlideThree/>
        <Footer/>
        </> 
    );
};
