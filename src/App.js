import {Switch, BrowserRouter, Route} from 'react-router-dom'
import MoviesPage from "./pages/MoviesPage";
import Nav from "./components/Nav";
import MoviePage from "./pages/MoviePage";
import Hero from "./components/Hero";


const App = () => {

    return (
        <BrowserRouter>
            <Hero/>
            <Switch>
                <Route exact path={`/movie/:id`} component={MoviePage}/>
                <Route exact path={`/movies?:query`} component={MoviesPage}/>
                <Route exact path={`/`} component={MoviesPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App