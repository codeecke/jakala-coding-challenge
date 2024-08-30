import { Button } from '@mui/material'
import { Link, useLoaderData } from '@tanstack/react-router'
import React from 'react'
import { DetailTable } from '../../components/DetailTable/DetailTable'
import { PlanetModel } from '../../models/PlanetModel'

export const PlanetsDetailsPage = () => {
  const data: PlanetModel = useLoaderData({ from: '/planets/$id' })

  return (
    <>
      <h1>{data.name}</h1>
      <DetailTable
        model={data}
        order={[
          'name',
          'rotationPeriod',
          'orbitalPeriod',
          'diameter',
          'climate',
          'gravity',
          'terrain',
          'surfaceWater',
          'population',
          'url',
          'residents',
          'films'
        ]}
      />
      <Link to="/planets/list/$page" params={{ page: 1 }}>
        <Button sx={{ mt: 4 }} variant="contained">
          Back to overview
        </Button>
      </Link>
    </>
  )
}
