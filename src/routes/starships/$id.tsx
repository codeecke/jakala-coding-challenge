import { createFileRoute } from '@tanstack/react-router'
import { VehiclesLoader } from '../../loader/VehiclesLoader'
import { VehiclesDetailsPage } from '../../pages/vehicles/VehiclesDetailsPage'
import { StarshipsDetailsPage } from '../../pages/starships/StarshipsDetailsPage'
import { StarshipLoader } from '../../loader/StarshipLoader'

export const Route = createFileRoute('/starships/$id')({
  loader: StarshipLoader,
  component: StarshipsDetailsPage
})
