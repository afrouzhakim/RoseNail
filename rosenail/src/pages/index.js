import React, {useState} from 'react'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import RSection from '../components/RSection'
import Sidebar from '../components/Sidebar'
import {homeObjeOne} from '../components/InfoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>  
            <RSection/>
            <InfoSection {...homeObjeOne}/>
        </div>
    )
}

export default Home
