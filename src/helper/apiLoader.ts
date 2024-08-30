import axios from 'axios'

class APILoader {
  private async fetch(uri: string) {
    return axios(`https://swapi.py4e.com/api${uri}`)
  }

  async fetchAllPeople(page: number = 1) {
    const response = await this.fetch(`/people/?page=${page}`)

    return await response.data
  }
}

export const apiLoader = new APILoader()
