import { createFileRoute } from '@tanstack/react-router'
import { FilmLoader } from '../../loader/FilmLoader'
import { FilmsOverviewPage } from '../../pages/film/FilmsOverviewPage'

export const Route = createFileRoute('/films/list/$page')({
  loader: FilmLoader,
  component: FilmsOverviewPage
})
