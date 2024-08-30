import React, { useEffect, useMemo } from "react"
import { useState } from "react"

export const DesktopArrow = () => {
    const [counter, setCounter] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    const [intervalHandler, setIntervalHandler] = useState<null | number>(null)
  
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
      })

      useEffect(() => {
        if(windowWidth < 900) return
        
        setIntervalHandler(handler => {
            
          if(handler === null) {
            return setInterval(() => setCounter((value) => {
              return value + ((Math.sin(value) < 0) ? 0.05 : 0.2)
            }), 50)
          }
          return handler
        })
      }, [windowWidth])

      const pos = useMemo(() => {
        let aniVal = 25 * Math.sin(counter)
        if (aniVal < 0) aniVal = 0
        return aniVal
      }, [counter])


    return windowWidth >= 900 && (
        <svg>
          <path
            d={`M 100 0  C 100 0, 100 100, ${pos} 100 M  ${pos + 20} 80 ${pos} 100  ${pos+20} 120`}
            fill="transparent"
            stroke="black"
            strokeWidth={3}
          />
        </svg>
      )
}