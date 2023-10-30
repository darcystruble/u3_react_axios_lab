import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import StarshipPage from './StarshipPage'
import Planets from './Planets'
import PlanetPage from './PlanetPage'
import Characters from './Characters'
import CharacterPage from './CharacterPage'
import Films from './Films'
import FilmPage from './FilmPage'


export default function Main (props) {
    // console.log(props)
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<StarshipList starships={props.starships}/>}/>
                <Route path="/starships/:name" element={<StarshipPage starships={props.starships}/>} />
                <Route path="/planets" element={<Planets planets={props.planets}/>}/>
                <Route path="/planets/:name" element={<PlanetPage planets={props.planets}/>} />
                <Route path="/characters" element={<Characters characters={props.characters}/>}/>
                <Route path="/characters/:name" element={<CharacterPage characters={props.characters} />} />
                <Route path="/films" element={<Films films={props.films}/>}/>
                <Route path="/films/:episode_id" element={<FilmPage films={props.films} />} />
            </Routes>
        </div>
    )
}