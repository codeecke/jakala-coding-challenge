import { createFileRoute } from '@tanstack/react-router'
import { VehiclesLoader } from '../../loader/VehiclesLoader'
import { VehiclesDetailsPage } from '../../pages/vehicles/VehiclesDetailsPage'

export const Route = createFileRoute('/vehicles/$id')({
  loader: VehiclesLoader,
  component: VehiclesDetailsPage
})
