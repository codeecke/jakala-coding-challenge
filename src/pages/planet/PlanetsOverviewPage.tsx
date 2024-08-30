import { Pagination } from '@mui/material'
import { Link, useLoaderData, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { tss } from 'tss-react'
import { PlanetModel } from '../../models/PlanetModel'

const useStyle = tss.create({
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3rem'
  }
})
declare const window

export const PlanetsOverviewPage = () => {
  const { planets, page, pageCount } = useLoaderData({
    from: '/planets/list/$page'
  })
  const navigate = useNavigate()
  const { cx, classes } = useStyle()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0)
    navigate({ to: '/planets/list/$page', params: { page: value } })
  }

  return (
    <>
      <h1>Planets</h1>
      <ul>
        {planets.map((planet: PlanetModel) => (
          <li key={planet.name}>
            <Link to="/planets/$id" params={{ id: planet.id }}>
              {planet.name}
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
