import { createFileRoute } from '@tanstack/react-router'
import { SpeciesLoder } from '../../loader/SpeciesLoder'
import { SpeciesOverviewPage } from '../../pages/species/SpeciesOverviewPage'

export const Route = createFileRoute('/species/list/$page')({
  loader: SpeciesLoder,
  component: SpeciesOverviewPage
})
