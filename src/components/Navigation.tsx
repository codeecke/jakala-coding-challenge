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

export const Navigation: FC<{ className: string }> = ({ className }) => {
  const [value, setValue] = useState('')
  const { cx, classes } = useStyles()
  return (
    <List className={className}>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link
            className={cx(classes.link)}
            to="/people/list/$page"
            params={{ page: 1 }}
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
          >
            Starships
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  )
}
