import { createFileRoute } from '@tanstack/react-router'
import { PeopleLoader } from '../../loader/PeopleLoader'
import { PeopleOverviewPage } from '../../pages/People'

export const Route = createFileRoute('/people/list/$page')({
  loader: PeopleLoader,
  component: PeopleOverviewPage,
  staleTime: Infinity,
})
