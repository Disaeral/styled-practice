import React from 'react';
import MainSlide from '../components/Slides/MainSlide';
import SlideOne from '../components/Slides/SlideOne';
import SlideThree from '../components/Slides/SlideThree';
import SlideTwo from '../components/Slides/SlideTwo';


const Main = () => {
    return (<>
        <MainSlide />
        <SlideOne />
        <SlideTwo />
        <SlideThree/>
        </> 
    );
};

export default Main;