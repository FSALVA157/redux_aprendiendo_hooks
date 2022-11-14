
import React, { useEffect } from 'react'

export const Message = () => {

  
 
  useEffect(() => {

    const coordenadas = ({x,y}) => {
      const coords = {x,y};
      console.log(coords);
    };

    window.addEventListener('mousemove',coordenadas)
  
    return () => {
     window.removeEventListener('mousemove',coordenadas);
    }
  }, [])

  return (
    <h3>usuario ya Existe!</h3>
  )
}
