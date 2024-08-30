import { createFileRoute } from '@tanstack/react-router'
import { PeopleLoader } from '../../loader/PeopleLoader'
import { PeopleOverviewPage } from '../../pages/people/PeopleOverviewPage'

export const Route = createFileRoute('/people/list/$page')({
  loader: PeopleLoader,
  component: PeopleOverviewPage
})
