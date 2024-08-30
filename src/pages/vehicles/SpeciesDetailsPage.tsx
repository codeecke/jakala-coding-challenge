import { Button } from '@mui/material'
import { Link, useLoaderData } from '@tanstack/react-router'
import React from 'react'
import { DetailTable } from '../../components/DetailTable/DetailTable'
import { SpeciesModel } from '../../models/SpeciesModel'

export const SpeciesDetailsPage = () => {
  const data: SpeciesModel = useLoaderData({ from: '/species/$id' })

  return (
    <>
      <h1>{data.name}</h1>
      <DetailTable
        model={data}
        order={[
          'name',
          'homeworld',
          'language',
          'classification',
          'designation',
          'averageHeight',
          'averageLifespan',
          'url',
          'skinColors',
          'hairColors',
          'eyeColors',
          'films',
          'people'
        ]}
      />
      <Link to="/species/list/$page" params={{ page: 1 }}>
        <Button sx={{ mt: 4 }} variant="contained">
          Back to overview
        </Button>
      </Link>
    </>
  )
}
