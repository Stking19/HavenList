import React, { useEffect, useState } from 'react'
import Loadscreen from '../loadscreen/Loadscreen'
import Header from '../components/header/Header'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import AboutUsPage from './Joshua/AboutUsPage/AboutUsPage'

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false)
        }, 4000)
    }, [])
  return (
    isLoading ? <Loadscreen /> : <div>
        <Header />
        <AboutUsPage />
        {/* <Outlet /> */}
        <Footer />
    </div>
  )
}

export default LandingPage