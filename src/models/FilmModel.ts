import { apiLoader } from '../helper/apiLoader'
import { Film } from '../types/Film'
import { AbstractModel } from './AbstractModel'
import { PeopleModel } from './PeopleModel'
import { PlanetModel } from './PlanetModel'
import { SpeciesModel } from './SpeciesModel'
import { StarshipModel } from './StarshipModel'
import { VehicleModel } from './VehicleModel'

export class FilmModel extends AbstractModel {
  public readonly id: number
  public readonly title: string
  public readonly created: string
  public readonly edited: string
  public readonly url: string
  public readonly episodeId: number
  public readonly openingCrawl: string
  public readonly director: string
  public readonly producer: string
  public readonly releaseDate: string
  public readonly characters: PeopleModel[] = []
  public readonly planets: PlanetModel[] = []
  public readonly starships: StarshipModel[] = []
  public readonly vehicles: VehicleModel[] = []
  public readonly species: SpeciesModel[] = []

  constructor(apiData: Film, autoload: boolean = false) {
    super()
    const characters = apiData.characters
    const planets = apiData.planets
    const species = apiData.species
    const vehicles = apiData.vehicles
    const starships = apiData.starships

    this.id = this.getIdFromApiUrl(apiData.url) || 0
    this.title = apiData.title
    this.created = apiData.created
    this.edited = apiData.edited
    this.url = apiData.url
    this.episodeId = apiData.episode_id
    this.openingCrawl = apiData.opening_crawl
    this.director = apiData.director
    this.producer = apiData.producer
    this.releaseDate = apiData.release_date

    if (characters && autoload) {
      characters.forEach(async (characterUri) => {
        const id = this.getIdFromApiUrl(characterUri)
        if (!id) return
        const character = await apiLoader.fetchPersonById(id)
        this.characters.push(character)
      })
    }
    if (planets && autoload) {
      planets.forEach(async (planetUri) => {
        const id = this.getIdFromApiUrl(planetUri)
        if (!id) return
        const planet = await apiLoader.fetchPlanetById(id)
        this.planets.push(planet)
      })
    }
    if (species && autoload) {
      species.forEach(async (speciesUri) => {
        const id = this.getIdFromApiUrl(speciesUri)
        if (!id) return
        const species = await apiLoader.fetchSpeciesById(id)
        this.species.push(species)
      })
    }
    if (vehicles && autoload) {
      vehicles.forEach(async (vehiclesUri) => {
        const id = this.getIdFromApiUrl(vehiclesUri)
        if (!id) return
        const vehicle = await apiLoader.fetchVehicleById(id)
        this.vehicles.push(vehicle)
      })
    }
    if (starships && autoload) {
      starships.forEach(async (starshipsUri) => {
        const id = this.getIdFromApiUrl(starshipsUri)
        if (!id) return
        const starship = await apiLoader.fetchStarshipById(id)
        this.starships.push(starship)
      })
    }
  }

  getLabel(key: string): string {
    const labels = {
      title: 'Title',
      url: 'API',
      episodeId: 'Episode',
      openingCrawl: 'Opening crawl',
      director: 'Director',
      producer: 'Producer',
      releaseDate: 'Release',
      characters: 'Characters',
      planets: 'Planets',
      starships: 'Starships',
      vehicles: 'Vehicles',
      species: 'Species'
    }
    return labels[key]
  }

  toString() {
    return this.title
  }

  getDetailLink(): string {
    return '/planets/' + this.id
  }
}
