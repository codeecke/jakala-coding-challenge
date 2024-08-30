import { apiLoader } from '../helper/apiLoader'

const fetchAllVehicles = async (page: number) => {
  const { count, vehicles } = await apiLoader.fetchAllVehicles(page)
  const itemsPerPage = 10

  return {
    page: page,
    pageCount: Math.ceil(count / itemsPerPage),
    vehicles
  }
}

const fetchVehicleById = async (id: number) => {
  const response = await apiLoader.fetchSpeciesById(id)
  return response
}

export const VehiclesLoader = async (data) => {
  const page = data?.params?.page ?? 1
  const planetId = data?.params?.id
  if (planetId) {
    return fetchVehicleById(parseInt(planetId))
  }
  return fetchAllVehicles(parseInt(page))
}
