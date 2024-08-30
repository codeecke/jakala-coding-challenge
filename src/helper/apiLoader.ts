import axios, { AxiosResponse } from 'axios'
import { z, ZodSchema } from 'zod'
import { FilmModel } from '../models/FilmModel'
import { PeopleModel } from '../models/PeopleModel'
import { PlanetModel } from '../models/PlanetModel'
import { SpeciesModel } from '../models/SpeciesModel'
import { VehicleModel } from '../models/VehicleModel'
import { filmValidator } from '../zod/filmValidator'
import {
  filmListResponseValidator,
  peopleListResponseValidator,
  planetListResponseValidator,
  speciesListResponseValidator,
  vehiclesListResponseValidator
} from '../zod/listResponseValidator'
import { peopleValidator } from '../zod/peopleValidator'
import { planetValidator } from '../zod/planetValidator'
import { speciesValidator } from '../zod/speciesValidator'
import { vehicleValidator } from '../zod/vehiclesValidator'

type Cache = {
  [key: string]: AxiosResponse
}

declare const localStorage

class APILoader {
  private cache: Cache = {}

  constructor() {
    const savedCache = localStorage.getItem('cache')
    if (!savedCache) return
    this.cache = JSON.parse(savedCache)
  }

  saveCache(uri: string, response: AxiosResponse) {
    this.cache[uri] = response
    localStorage.setItem('cache', JSON.stringify(this.cache))
  }

  private async fetch<R, V extends ZodSchema>(
    uri: string,
    validator: V,
    converter: (response: z.infer<V>) => R
  ) {
    const response =
      this.cache[uri] || (await axios(`https://swapi.py4e.com/api${uri}`))
    const validationResult = validator.safeParse(response.data)
    if (!validationResult.success) {
      console.error('Error in data: ', response.data)
      console.error(validationResult.error)

      throw new Error('Invalid response schema! Maybe api was changed?')
    }
    this.saveCache(uri, response)
    return converter(response.data)
  }

  async fetchAllPeople(page: number = 1) {
    type responseType = {
      count: number
      people: PeopleModel[]
    }
    return await this.fetch<responseType, typeof peopleListResponseValidator>(
      `/people/?page=${page}`,
      peopleListResponseValidator,
      (response) => ({
        count: response.count,
        people: response.results.map((item) => new PeopleModel(item))
      })
    )
  }

  async fetchPersonById(id: number, autoload: boolean = true) {
    return await this.fetch<PeopleModel, typeof peopleValidator>(
      `/people/${id}/`,
      peopleValidator,
      (response) => new PeopleModel(response, autoload)
    )
  }

  async fetchAllPlanets(page: number = 1) {
    type responseType = {
      count: number
      planets: PlanetModel[]
    }
    return this.fetch<responseType, typeof planetListResponseValidator>(
      `/planets/?page=${page}`,
      planetListResponseValidator,
      (response) => ({
        count: response.count,
        planets: response.results.map((item) => new PlanetModel(item))
      })
    )
  }

  async fetchPlanetById(id: number, autoload: boolean = true) {
    return await this.fetch<PlanetModel, typeof planetValidator>(
      `/planets/${id}/`,
      planetValidator,
      (response) => new PlanetModel(response, autoload)
    )
  }

  async fetchAllFilms(page: number = 1) {
    type responseType = {
      count: number
      films: FilmModel[]
    }
    return this.fetch<responseType, typeof filmListResponseValidator>(
      `/films/?page=${page}`,
      filmListResponseValidator,
      (response) => ({
        count: response.count,
        films: response.results.map((item) => new FilmModel(item))
      })
    )
  }

  async fetchFilmById(id: number, autoload: boolean = true) {
    return await this.fetch<FilmModel, typeof filmValidator>(
      `/films/${id}/`,
      filmValidator,
      (response) => new FilmModel(response, autoload)
    )
  }

  async fetchAllSpecies(page: number = 1) {
    type responseType = {
      count: number
      species: SpeciesModel[]
    }
    return this.fetch<responseType, typeof speciesListResponseValidator>(
      `/species/?page=${page}`,
      speciesListResponseValidator,
      (response) => ({
        count: response.count,
        species: response.results.map((item) => new SpeciesModel(item))
      })
    )
  }
  async fetchSpeciesById(id: number, autoload: boolean = true) {
    return await this.fetch<SpeciesModel, typeof speciesValidator>(
      `/species/${id}/`,
      speciesValidator,
      (response) => new SpeciesModel(response, autoload)
    )
  }
  async fetchAllVehicles(page: number = 1) {
    type responseType = {
      count: number
      vehicles: VehicleModel[]
    }
    return this.fetch<responseType, typeof vehiclesListResponseValidator>(
      `/vehicles/?page=${page}`,
      vehiclesListResponseValidator,
      (response) => ({
        count: response.count,
        vehicles: response.results.map((item) => new VehicleModel(item))
      })
    )
  }
  async fetchVehicleById(id: number, autoload: boolean = true) {
    return await this.fetch<VehicleModel, typeof vehicleValidator>(
      `/vehicles/${id}/`,
      vehicleValidator,
      (response) => new VehicleModel(response, autoload)
    )
  }


}

export const apiLoader = new APILoader()
