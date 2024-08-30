import { createFileRoute } from '@tanstack/react-router'
import { StarshipLoader } from '../../loader/StarshipLoader'
import { StarshipsOverviewPage } from '../../pages/starships/StarshipsOverviewPage'

export const Route = createFileRoute('/starships/list/$page')({
  loader: StarshipLoader,
  component: StarshipsOverviewPage
})
