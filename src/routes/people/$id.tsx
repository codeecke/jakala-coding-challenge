import { createFileRoute } from '@tanstack/react-router'
import { PeopleLoader } from '../../loader/PeopleLoader'
import { PeopleDetailPage } from '../../pages/people/PeopleDetailsPage'

export const Route = createFileRoute('/people/$id')({
  loader: PeopleLoader,
  component: PeopleDetailPage
})
