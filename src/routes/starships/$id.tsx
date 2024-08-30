import { createFileRoute } from '@tanstack/react-router'
import { StarshipLoader } from '../../loader/StarshipLoader'
import { StarshipsDetailsPage } from '../../pages/starships/StarshipsDetailsPage'

export const Route = createFileRoute('/starships/$id')({
  loader: StarshipLoader,
  component: StarshipsDetailsPage
})
