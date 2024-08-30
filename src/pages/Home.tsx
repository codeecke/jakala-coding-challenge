import React, { useState } from 'react'

declare const window

export const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [svgWidth, setSvgWidth] = useState(window.innerWidth - 16 * 4)
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
    setSvgWidth(windowWidth - 16 * 4)
  })

  return (
    <>
      {windowWidth < 900 && (
        <svg height={200} width={svgWidth}>
          <path
            d={`M 100 200  C 100 200 100 100 ${svgWidth / 2} 100 S ${svgWidth - 20} 100 ${svgWidth - 20} 0 L ${svgWidth - 40} 20 ${svgWidth - 20} 0 ${svgWidth} 20`}
            fill="transparent"
            stroke="black"
            strokeWidth={3}
          />
        </svg>
      )}
      <h1>Hi and welcome</h1>
      <p>please select a category in navigation</p>
      {windowWidth >= 900 && (
        <svg>
          <path
            d="M 100 0  C 100 0, 100 100, 0 100 M  20 80 0 100  20 120 "
            fill="transparent"
            stroke="black"
            strokeWidth={3}
          />
        </svg>
      )}
    </>
  )
}
