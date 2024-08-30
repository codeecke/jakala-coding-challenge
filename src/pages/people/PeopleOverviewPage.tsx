import { Grid, Pagination } from '@mui/material'
import { useLoaderData, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { tss } from 'tss-react'
import { PeopleListItem } from '../../components/PeopleListItem'
import { PeopleModel } from '../../models/PeopleModel'

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
    <Grid item xs={6} md={3} key={item.id}>
      <PeopleListItem item={item} />
    </Grid>
  )) ?? <>Nothing found</>

  return (
    <>
      <Grid container spacing={4}>
        {items}
      </Grid>
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
