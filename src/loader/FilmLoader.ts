import { apiLoader } from '../helper/apiLoader'

const fetchAllFilms = async (page: number) => {
  const { count, films } = await apiLoader.fetchAllFilms(page)
  const itemsPerPage = 10

  return {
    page: page,
    pageCount: Math.ceil(count / itemsPerPage),
    films
  }
}

const fetchFilmById = async (id: number) => {
  const response = await apiLoader.fetchFilmById(id, true)
  return response
}

export const FilmLoader = async (data) => {
  const page = data?.params?.page ?? 1
  const planetId = data?.params?.id
  if (planetId) {
    return fetchFilmById(parseInt(planetId))
  }
  return fetchAllFilms(parseInt(page))
}
