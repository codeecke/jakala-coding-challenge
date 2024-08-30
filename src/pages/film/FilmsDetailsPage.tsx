import { Button } from '@mui/material'
import { Link, useLoaderData } from '@tanstack/react-router'
import React from 'react'
import { DetailTable } from '../../components/DetailTable/DetailTable'
import { DetailTableItem } from '../../components/DetailTable/DetailTableItem'
import { PeopleModel } from '../../models/PeopleModel'

export const FilmsDetailsPage = () => {
  const data: PeopleModel = useLoaderData({ from: '/films/$id' })

  const list = (content: object | Array<unknown>, parentKey: string = '') => {
    return Object.keys(content).map((key) => {
      const value = content[key]
      const label = data.getLabel(key)

      return <DetailTableItem value={value} label={label} key={label} />
    })
  }

  return (
    <>
      <h1>{data.name}</h1>

      <DetailTable
        model={data}
        order={[
          'title',
          'episodeId',
          'releaseDate',
          'url',
          'director',
          'producer',
          'openingCrawl',
          'characters',
          'planets',
          'starships',
          'vehicles',
          'species'
        ]}
      />

      <Link to="/films/list/$page" params={{ page: 1 }}>
        <Button sx={{ mt: 4 }} variant="contained">
          Back to overview
        </Button>
      </Link>
    </>
  )
}
