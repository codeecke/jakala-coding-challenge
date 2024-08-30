import { Button } from '@mui/material'
import { Link, useLoaderData } from '@tanstack/react-router'
import React from 'react'
import { DetailTable } from '../../components/DetailTable/DetailTable'
import { SpeciesModel } from '../../models/SpeciesModel'
import { VehicleModel } from '../../models/VehicleModel'

export const VehiclesDetailsPage = () => {
  const data: VehicleModel = useLoaderData({ from: '/vehicles/$id' })
  

  return (
    <>
      <h1>{data.name}</h1>
      <DetailTable
        model={data}
        order={[
          'name',
          'model',
          'manufacturer',
          'length',
          'maxAtmospheringSpeed',
          'costInCredits',
          'crew',
          'passengers',
          'cargoCapacity',
          'consumables',
          'vehicleClass',
          'pilots',
          'films',
          'url',
        ]}
      />
      <Link to="/vehicles/list/$page" params={{ page: 1 }}>
        <Button sx={{ mt: 4 }} variant="contained">
          Back to overview
        </Button>
      </Link>
    </>
  )
}
