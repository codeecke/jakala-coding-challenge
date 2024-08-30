import { apiLoader } from '../helper/apiLoader'

const fetchAllPeople = async (page: number) => {
  const { count, people } = await apiLoader.fetchAllPeople(page)
  const itemsPerPage = 10

  return {
    page: page,
    pageCount: Math.ceil(count / itemsPerPage),
    people
  }
}

const fetchPeopleById = async (id: number) => {
  const response = await apiLoader.fetchPersonById(id, true)
  return response
}

export const PeopleLoader = async (data) => {
  const page = data?.params?.page ?? 1
  const peopleId = data?.params?.id
  if (peopleId) {
    return fetchPeopleById(parseInt(peopleId))
  }
  return fetchAllPeople(parseInt(page))
}
