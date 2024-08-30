import { createFileRoute } from '@tanstack/react-router'
import { FilmLoader } from '../../loader/FilmLoader'
import { FilmsDetailsPage } from '../../pages/film/FilmsDetailsPage'

export const Route = createFileRoute('/films/$id')({
  loader: FilmLoader,
  component: FilmsDetailsPage
})
