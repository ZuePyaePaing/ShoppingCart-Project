import React from 'react'
import { useLocation,Navigate } from 'react-router-dom'

const RouteGaurd = (children) => {
    const location = useLocation()
    
    if(location.state != null){
        return children
    }else{
        return <Navigate to="/"/>
    }
  
}

export default RouteGaurd