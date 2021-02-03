import React, {useState} from 'react'
import Hero from '../Components/Hero/IndexHero';
import Sidebar from '../Components/Sidebar/IndexSide'

const Company = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero />
        </div>
    )
}

export default Company