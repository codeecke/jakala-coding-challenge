import { useEffect, useMemo, useState } from 'react'
import { Position } from '../../types/Position'
import React from 'react'

export const MobileArrow = () => {
  const [counter, setCounter] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [svgWidth, setSvgWidth] = useState(window.innerWidth - 16 * 4)
  const [intervalHandler, setIntervalHandler] = useState<null | number>(null)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
    setSvgWidth(windowWidth - 16 * 4)
  })

  const positionToString = (pos: Position) => {
    return `${pos.x} ${pos.y}`
  }

  const positions = useMemo(() => {
    let aniVal = 75 * Math.sin(counter)
    if (aniVal < 0) aniVal = 0
    return {
      curve: [
        { x: 100, y: 200 },
        { x: 100, y: -aniVal / 2 },
        { x: svgWidth / 2, y: 100 },
        { x: svgWidth - 20, y: 160 + aniVal },
        { x: svgWidth - 20, y: aniVal }
      ],
      line: [
        { x: svgWidth - 40, y: 20 + aniVal },
        { x: svgWidth - 20, y: 0 + aniVal },
        { x: svgWidth, y: 20 + aniVal }
      ]
    }
  }, [svgWidth, counter])

  const path = useMemo(() => {
    const { curve, line } = positions
    let path = 'M ' + positionToString(curve[0])
    path += ' C ' + positionToString(curve[0])
    path += ' ' + positionToString(curve[1])
    path += ' ' + positionToString(curve[2])
    path += ' S'
    for (let i = 3; i < curve.length; i++) {
      path += ' ' + positionToString(curve[i])
    }
    path += ' L '
    for (let i = 0; i < line.length; i++) {
      path += ' ' + positionToString(line[i])
    }
    return path
  }, [positions])

  useEffect(() => {
    if(windowWidth >= 900) return

    setIntervalHandler(handler => {
      if(handler === null) {
        return setInterval(() => setCounter((value) => {
          return value + ((Math.sin(value) < 0) ? 0.05 : 0.1)
        }), 50)
      }
      return handler
    })
  }, [windowWidth])

  return (
  <>
  {windowWidth < 900 && (
      <svg height={200} width={svgWidth}>
        <path
          d={`${path}`}
          fill="transparent"
          stroke="black"
          strokeWidth={3}
        />
      </svg>
    )}
  </>
)
}
