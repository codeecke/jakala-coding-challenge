import { createFileRoute } from '@tanstack/react-router'
import { VehiclesLoader } from '../../loader/VehiclesLoader'
import { VehiclesOverviewPage } from '../../pages/vehicles/VehiclesOverviewPage'
import { StarshipsOverviewPage } from '../../pages/starships/StarshipsOverviewPage'
import { StarshipLoader } from '../../loader/StarshipLoader'

export const Route = createFileRoute('/starships/list/$page')({
  loader: StarshipLoader,
  component: StarshipsOverviewPage
})
