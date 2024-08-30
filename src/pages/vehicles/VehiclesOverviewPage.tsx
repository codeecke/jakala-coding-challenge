import { Pagination } from '@mui/material'
import { Link, useLoaderData, useNavigate } from '@tanstack/react-router'
import React from 'react'
import { tss } from 'tss-react'
import { VehicleModel } from '../../models/VehicleModel'

const useStyle = tss.create({
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3rem'
  }
})
declare const window

export const VehiclesOverviewPage = () => {
  const { vehicles, page, pageCount } = useLoaderData({
    from: '/vehicles/list/$page'
  })
  const navigate = useNavigate()
  const { cx, classes } = useStyle()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo(0, 0)
    navigate({ to: '/vehicles/list/$page', params: { page: value } })
  }

  return (
    <>
      <h1>Vehicles</h1>
      <ul>
        {vehicles.map((vehicle: VehicleModel) => (
          <li key={vehicle.id}>
            <Link to="/vehicles/$id" params={{ id: vehicle.id }}>
              {vehicle.name}
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
