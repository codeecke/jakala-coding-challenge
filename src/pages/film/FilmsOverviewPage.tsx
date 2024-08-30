import { Pagination } from '@mui/material'
import { Link, useLoaderData, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { tss } from 'tss-react'

const useStyle = tss.create({
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3rem'
  }
})
declare const window

export const FilmsOverviewPage = () => {
  const { films, page, pageCount } = useLoaderData({
    from: '/films/list/$page'
  })
  const navigate = useNavigate()
  const { cx, classes } = useStyle()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0)
    navigate({ to: '/films/list/$page', params: { page: value } })
  }

  return (
    <>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.title}>
            <Link to="/films/$id" params={{ id: film.id }}>
              {film.title}
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
