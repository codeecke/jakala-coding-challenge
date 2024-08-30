import { Card } from '@mui/material'
import { Link } from '@tanstack/react-router'
import React, { FC } from 'react'
import { tss } from 'tss-react'
import images from '../assets/people-images'
import { PeopleModel } from '../models/PeopleModel'

const useStyle = tss.create({
  root: {
    textDecoration: 'none'
  },
  image: {
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: '#000',
    zIndex: 1
  },
  label: {
    textAlign: 'center',
    background: '#fff',
    padding: 10,
    height: '2rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const PeopleListItem: FC<{ item: PeopleModel }> = ({ item }) => {
  const { cx, classes } = useStyle()
  const image = images.find(
    (image) => image.name === item.name.toLocaleLowerCase()
  )?.image
  return (
    <Link
      to="/people/$id"
      params={{ id: item.id }}
      className={cx(classes.root)}
    >
      <Card sx={{ p: 1 }}>
        <div
          className={cx(classes.image)}
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div className={cx(classes.label)}>{item.name}</div>
      </Card>
    </Link>
  )
}
