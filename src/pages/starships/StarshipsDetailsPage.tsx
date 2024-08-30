import { Button } from '@mui/material'
import { Link, useLoaderData } from '@tanstack/react-router'
import React from 'react'
import { DetailTable } from '../../components/DetailTable/DetailTable'
import { VehicleModel } from '../../models/VehicleModel'
import { StarshipModel } from '../../models/StarshipModel'

export const StarshipsDetailsPage = () => {
  const data: StarshipModel = useLoaderData({ from: '/starships/$id' })

  return (
    <>
      <h1>{data.name}</h1>
      <DetailTable
        model={data}
        order={[
          'cargoCapacity',
          'consumables',
          'costInCredits',
          'created',
          'crew',
          'edited',
          'films',
          'hyperdriveRating',
          'length',
          'manufacturer',
          'maxAtmospheringSpeed',
          'MGLT',
          'model',
          'name',
          'passengers',
          'pilots',
          'starshipClass',
          'url',
        ]}
      />
      <Link to="/starships/list/$page" params={{ page: 1 }}>
        <Button sx={{ mt: 4 }} variant="contained">
          Back to overview
        </Button>
      </Link>
    </>
  )
}
