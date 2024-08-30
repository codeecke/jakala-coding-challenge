import { apiLoader } from '../helper/apiLoader'

const fetchAllSpecies = async (page: number) => {
  const { count, species } = await apiLoader.fetchAllSpecies(page)
  const itemsPerPage = 10

  return {
    page: page,
    pageCount: Math.ceil(count / itemsPerPage),
    species
  }
}

const fetchSpeciesById = async (id: number) => {
  const response = await apiLoader.fetchSpeciesById(id)
  return response
}

export const SpeciesLoder = async (data) => {
  const page = data?.params?.page ?? 1
  const planetId = data?.params?.id
  if (planetId) {
    return fetchSpeciesById(parseInt(planetId))
  }
  return fetchAllSpecies(parseInt(page))
}
