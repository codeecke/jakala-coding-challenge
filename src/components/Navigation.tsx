import { List, ListItem, ListItemButton } from '@mui/material'
import { Link } from '@tanstack/react-router'
import React, { FC, useState } from 'react'
import { tss } from 'tss-react'

const useStyles = tss.create({
  root: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
  },
  link: {
    color: 'var(--nav-link-color)',
    textDecoration: 'none',
  },
  button: {
    justifyContent: 'center',
  },
})

export const Navigation: FC<{className: string}> = ({className}) => {
  const [value, setValue] = useState('')
  const { cx, classes } = useStyles()
  return (
    <List className={className}>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link className={cx(classes.link)} to="/people/list/1">
            People
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link className={cx(classes.link)} to="/planets">
            Planets
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link className={cx(classes.link)} to="/films">
            Films
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link className={cx(classes.link)} to="/species">
            Species
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link className={cx(classes.link)} to="/vehicles">
            Vehicles
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton className={cx(classes.button)}>
          <Link className={cx(classes.link)} to="/starships">
            Starships
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  )
}
