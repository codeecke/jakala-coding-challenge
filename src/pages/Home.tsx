import React, { useEffect, useMemo, useState } from 'react'
import { MobileArrow } from '../components/HomeAnimations/MobileArrow'
import { DesktopArrow } from '../components/HomeAnimations/DesktopArrow'

declare const window



export const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  return (
    <>
      {windowWidth < 900 && <MobileArrow />}
      <h1>Hi and welcome</h1>
      <p>please select a category in navigation</p>
      {windowWidth >= 900 && <DesktopArrow />}
    </>
  )
}
