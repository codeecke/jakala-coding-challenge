import { apiLoader } from '../helper/apiLoader'

const fetchAllPlanets = async (page: number) => {
  const { count, planets } = await apiLoader.fetchAllPlanets(page)
  const itemsPerPage = 10

  return {
    page: page,
    pageCount: Math.ceil(count / itemsPerPage),
    planets
  }
}

const fetchPlanetById = async (id: number) => {
  const response = await apiLoader.fetchPlanetById(id, true)
  return response
}

export const PlanetLoader = async (data) => {
  const page = data?.params?.page ?? 1
  const planetId = data?.params?.id
  if (planetId) {
    return fetchPlanetById(parseInt(planetId))
  }
  return fetchAllPlanets(parseInt(page))
}
