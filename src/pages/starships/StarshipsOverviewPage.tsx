import { Pagination } from '@mui/material'
import { Link, useLoaderData, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { tss } from 'tss-react'
import { VehicleModel } from '../../models/VehicleModel'
import { StarshipModel } from '../../models/StarshipModel'

const useStyle = tss.create({
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3rem'
  }
})
declare const window

export const StarshipsOverviewPage = () => {
  const { starships, page, pageCount } = useLoaderData({
    from: '/starships/list/$page'
  })
  const navigate = useNavigate()
  const { cx, classes } = useStyle()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0)
    navigate({ to: '/starships/list/$page', params: { page: value } })
  }

  return (
    <>
      <h1>Starships</h1>
      <ul>
        {starships.map((starship: StarshipModel) => (
          <li key={starship.id}>
            <Link to="/starships/$id" params={{ id: starship.id }}>
              {starship.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className={cx(classes.paginationWrapper)}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </div>
    </>
  )
}
