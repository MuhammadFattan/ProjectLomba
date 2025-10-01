import React from 'react'
import { useAppContext } from '../contexts/AppContext'
import { assets } from '../assets/Asset';
import MainBanner from '../components/MainBanner';

const Home = () => {
    const { isDarkMode } = useAppContext();
    return (
    <div>
        <MainBanner />
    </div>
  )
}

export default Home
