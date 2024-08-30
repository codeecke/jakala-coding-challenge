import { apiLoader } from '../helper/apiLoader'
import { PeopleModel } from '../models/People'
import { PeopleValidator } from '../zod/PeopleValidator'

export const PeopleLoader = async (data) => {
  const page = data?.params?.page ?? 1
  const response = await apiLoader.fetchAllPeople(page)
  const { count, results } = response
  const itemsPerPage = 10

  return {
    page: parseInt(page),
    pageCount: Math.ceil(count / itemsPerPage),
    people: results.map((item) => {
      if (!PeopleValidator.safeParse(item)) {
        throw new Error('invalid response')
      }
      return new PeopleModel(item)
    })
  }
}
