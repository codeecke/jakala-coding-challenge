import { apiLoader } from '../helper/apiLoader'

const fetchAllStarships = async (page: number) => {
  const { count, starships } = await apiLoader.fetchAllStarships(page)
  const itemsPerPage = 10

  return {
    page: page,
    pageCount: Math.ceil(count / itemsPerPage),
    starships
  }
}

const fetchStarshipById = async (id: number) => {
  const response = await apiLoader.fetchStarshipById(id)
  return response
}

export const StarshipLoader = async (data) => {
  const page = data?.params?.page ?? 1
  const planetId = data?.params?.id
  if (planetId) {
    return fetchStarshipById(parseInt(planetId))
  }
  return fetchAllStarships(parseInt(page))
}
