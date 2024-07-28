import React from 'react'
import ControlledCarousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import TrainerCardContainer from '../../components/TrainersCard/TrainersCard';
function Home() {
    return ( 
        <>
        <ControlledCarousel/>
        <TrainerCardContainer/>
        <Footer/>
        </>
     );
}

export default Home;