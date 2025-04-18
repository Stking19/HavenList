import React, { useEffect, useState } from 'react'
// import Loadscreen from '../loadscreen/Loadscreen'
import { Outlet } from 'react-router'
import Footer from '../../components/footer/Footer'
import TenantHeader from '../../components/tenantheader/TenantHeader'

const TenantLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(false)
        }, 4000)
    }, [])
  return (
     <div>
        <TenantHeader />
        <Outlet />
        <Footer />
    </div>
  )
}

export default TenantLandingPage