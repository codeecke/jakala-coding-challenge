import { createFileRoute } from '@tanstack/react-router'
import { SpeciesLoder } from '../../loader/SpeciesLoder'
import { SpeciesDetailsPage } from '../../pages/species/SpeciesDetailsPage'

export const Route = createFileRoute('/species/$id')({
  loader: SpeciesLoder,
  component: SpeciesDetailsPage
})
