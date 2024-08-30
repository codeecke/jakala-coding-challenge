import { createFileRoute } from '@tanstack/react-router'
import { SpeciesLoder } from '../../loader/SpeciesLoder'
import { SpeciesDetailsPage } from '../../pages/species/SpeciesDetailsPage'
import { VehiclesDetailsPage } from '../../pages/vehicles/VehiclesDetailsPage'
import { VehiclesLoader } from '../../loader/VehiclesLoader'

export const Route = createFileRoute('/vehicles/$id')({
  loader: VehiclesLoader,
  component: VehiclesDetailsPage
})
