import { Link, Outlet } from '@tanstack/react-router'
import React, { useState } from 'react'
import { tss } from 'tss-react/mui'
import { Navigation } from './Navigation'

const useStyles = tss
  .withParams<{ mobileNavVisibility: boolean }>()
  .create(({ theme, mobileNavVisibility }) => ({
    root: {
      display: 'flex',
      maxWidth: '100vw',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      }
    },
    navContainer: {
      backgroundColor: 'var(--nav-background)',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100vw',

      [theme.breakpoints.up('md')]: {
        position: 'fixed',
        width: 200,
        height: '100vh'
      }
    },
    nav: {
      display: mobileNavVisibility ? 'block' : 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    logo: {
      width: '200px'
    },
    content: {
      padding: '2rem',
      [theme.breakpoints.up('md')]: {
        marginLeft: 200
      }
    },

    navHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 'calc(100% - 4rem)',
      [theme.breakpoints.up('md')]: {
        width: 'auto'
      }
    },

    burger: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      },

      span: {
        display: 'block',
        backgroundColor: 'var(--hightlight-color)',
        width: 30,
        height: 3,
        marginBottom: 6
      }
    }
  }))

export const Layout: React.FC = () => {
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false)
  const { cx, classes } = useStyles({ mobileNavVisibility })
  return (
    <>
      <div className={cx(classes.root)}>
        <div className={cx(classes.navContainer)}>
          <div className={cx(classes.navHeader)}>
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
                className={cx(classes.logo)}
              />
            </Link>
            <div
              className={cx(classes.burger)}
              onClick={() => setMobileNavVisibility((value) => !value)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Navigation className={cx(classes.nav)} onClick={() => setMobileNavVisibility(false)} />
        </div>
        <div className={cx(classes.content)}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
