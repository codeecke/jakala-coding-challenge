import { createFileRoute } from '@tanstack/react-router'
import { PlanetLoader } from '../../loader/PlanetLoader'
import { PlanetsOverviewPage } from '../../pages/planet/PlanetsOverviewPage'

export const Route = createFileRoute('/planets/list/$page')({
  loader: PlanetLoader,
  component: PlanetsOverviewPage
})
