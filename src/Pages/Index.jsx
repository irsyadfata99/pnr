import React, {useState} from 'react'
import Hero from '../Components/Hero/IndexHero'
import Sidebar from '../Components/Sidebar/IndexSide'
import AboutUs from '../Components/AboutUs/AboutUs'
import {homeObjOne, homeObjThree, homeObjTwo} from '../Components/AboutUs/Data'
import Footer from '../Components/Footer/IndexFooter'

const Home = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero />
            <AboutUs {...homeObjOne}/>
            <AboutUs {...homeObjTwo}/>
            <AboutUs {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
