import { createFileRoute } from '@tanstack/react-router'
import { VehiclesLoader } from '../../loader/VehiclesLoader'
import { VehiclesOverviewPage } from '../../pages/vehicles/VehiclesOverviewPage'

export const Route = createFileRoute('/vehicles/list/$page')({
  loader: VehiclesLoader,
  component: VehiclesOverviewPage
})
