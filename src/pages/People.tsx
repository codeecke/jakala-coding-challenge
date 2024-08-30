import { Grid2, Pagination } from '@mui/material'
import { useLoaderData, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { tss } from 'tss-react'
import { PeopleListItem } from '../components/PeopleListItem'
import { PeopleModel } from '../models/People'

const useStyle = tss.create({
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3rem'
  }
})
declare const window

export const PeopleOverviewPage = () => {
  const { people, page, pageCount } = useLoaderData({
    from: '/people/list/$page'
  })
  const navigate = useNavigate()
  const { cx, classes } = useStyle()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0)
    navigate({ to: '/people/list/$page', params: { page: value } })
  }

  const items = people?.map((item: PeopleModel) => (
    <Grid2 size={{ xs: 6, md: 3 }} key={item.url}>
      <PeopleListItem item={item} />
    </Grid2>
  )) ?? <>Nothing found</>

  return (
    <>
      <Grid2 container spacing={4}>
        {items}
      </Grid2>
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
