import { List, ListItem, ListItemButton } from '@mui/material'
import { Link } from '@tanstack/react-router'
import React, { FC, useState } from 'react'
import { tss } from 'tss-react'

const useStyles = tss.create({
  root: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0
  },
  link: {
    color: 'var(--nav-link-color)',
    textDecoration: 'none'
  },
  button: {
    justifyContent: 'center'
  }
})

export const Navigation: FC<{ className: string, onClick: () => void }> = ({ className, onClick }) => {
  const { cx, classes } = useStyles()
  return (
    <List className={className}>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link
            className={cx(classes.link)}
            to="/people/list/$page"
            params={{ page: 1 }}
            onClick={onClick}
          >
            People
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link
            className={cx(classes.link)}
            to="/planets/list/$page"
            params={{ page: 1 }}
            onClick={onClick}
          >
            Planets
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link
            className={cx(classes.link)}
            to="/films/list/$page"
            params={{ page: 1 }}
            onClick={onClick}
          >
            Films
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link
            className={cx(classes.link)}
            to="/species/list/$page"
            params={{ page: 1 }}
            onClick={onClick}
          >
            Species
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link
            className={cx(classes.link)}
            to="/vehicles/list/$page"
            params={{ page: 1 }}
            onClick={onClick}
          >
            Vehicles
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link
            className={cx(classes.link)}
            to="/starships/list/$page"
            params={{ page: 1 }}
            onClick={onClick}
          >
            Starships
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  )
}
