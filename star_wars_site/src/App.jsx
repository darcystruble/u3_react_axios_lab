import './App.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [starships, setStarships] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])
  const [species, setSpecies] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [films, setFilms] = useState([])

  useEffect(()=>{
      const getStarships = async () => {
        const allStarships = []
        const swapiGetCategory = async (url) => {
          const response = await axios.get(url)
          allStarships.push(...response.data.results)
          if (response.data.next){
            swapiGetCategory(response.data.next)
          }
        }
        swapiGetCategory(`${BASE_URL}/starships`)
        setStarships(allStarships)
      }
      getStarships()
    }, [])
  // console.log(starships)
  useEffect(()=>{
    const getPlanets = async () => {
      const allPlanets = []
      const swapiGetCategory = async (url) => {
        const response = await axios.get(url)
        allPlanets.push(...response.data.results)
        if(response.data.next){
          swapiGetCategory(response.data.next)
        }
      }
      swapiGetCategory(`${BASE_URL}/planets`)
      setPlanets(allPlanets)
    }
    getPlanets()
  }, [])
  // console.log(planets)
  useEffect(()=>{
    const getCharacters = async () => {
      const allCharacters = []
      const swapiGetCategory = async (url) => {
        const response = await axios.get(url)
        allCharacters.push(...response.data.results)
        if(response.data.next){
          swapiGetCategory(response.data.next)
        }
      }
      swapiGetCategory(`${BASE_URL}/people`)
      setCharacters(allCharacters)
    }
    getCharacters()
  }, [])
  // console.log(characters)
  useEffect(()=>{
    const getSpecies = async () => {
      const allSpecies = []
      const swapiGetCategory = async (url) => {
        const response = await axios.get(url)
        allSpecies.push(...response.data.results)
        if (response.data.next){
          swapiGetCategory(response.data.next)
        }
      }
      swapiGetCategory(`${BASE_URL}/species`)
      setSpecies(allSpecies)
    }
    getSpecies()
  }, [])

  useEffect(()=>{
    const getVehicles = async () => {
      const allVehicles = []
      const swapiGetCategory = async (url) => {
        const response = await axios.get(url)
        allVehicles.push(...response.data.results)
        if (response.data.next){
          swapiGetCategory(response.data.next)
        }
      }
      swapiGetCategory(`${BASE_URL}/vehicles`)
      setVehicles(allVehicles)
    }
    getVehicles()
  }, [])
  // console.log(vehicles)
  useEffect(()=>{
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films`)
      // console.log(response.data.results)
      setFilms(response.data.results)
    }
    getFilms()
  }, [])
  // console.log(films)
  return (
      <div className='page'>
        <Header />
        <Main starships={starships} planets={planets} characters={characters} films={films} species={species} vehicles={vehicles} />
      </div>
  )
}

export default App
