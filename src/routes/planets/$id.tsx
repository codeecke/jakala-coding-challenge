import { createFileRoute } from '@tanstack/react-router'
import { PlanetLoader } from '../../loader/PlanetLoader'
import { PlanetsDetailsPage } from '../../pages/planet/PlanetsDetailsPage'

export const Route = createFileRoute('/planets/$id')({
  loader: PlanetLoader,
  component: PlanetsDetailsPage
})
