import { Pagination } from '@mui/material'
import { Link, useLoaderData, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { tss } from 'tss-react'
import { SpeciesModel } from '../../models/SpeciesModel'

const useStyle = tss.create({
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3rem'
  }
})
declare const window

export const SpeciesOverviewPage = () => {
  const { species, page, pageCount } = useLoaderData({
    from: '/species/list/$page'
  })
  const navigate = useNavigate()
  const { cx, classes } = useStyle()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0)
    navigate({ to: '/species/list/$page', params: { page: value } })
  }

  return (
    <>
      <h1>Species</h1>
      <ul>
        {species.map((species: SpeciesModel) => (
          <li key={species.name}>
            <Link to="/species/$id" params={{ id: species.id }}>
              {species.name}
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
