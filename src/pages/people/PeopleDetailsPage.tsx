import { Button } from '@mui/material'
import { Link, useLoaderData } from '@tanstack/react-router'
import React from 'react'
import { DetailTable } from '../../components/DetailTable/DetailTable'
import { PeopleModel } from '../../models/PeopleModel'

export const PeopleDetailPage = () => {
  const data: PeopleModel = useLoaderData({ from: '/people/$id' })

  return (
    <>
      <h1>{data.name}</h1>

      <DetailTable
        model={data}
        order={[
          'name',
          'gender',
          'birthYear',
          'height',
          'mass',
          'hairColor',
          'skinColor',
          'eyeColor',
          'homeworld',
          'films',
          'species',
          'vehicles',
          'starships',
          'url'
        ]}
      />

      <Link to="/people/list/$page" params={{ page: 1 }}>
        <Button sx={{ mt: 4 }} variant="contained">
          Back to overview
        </Button>
      </Link>
    </>
  )
}
