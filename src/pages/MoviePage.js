import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useMovies from "../hooks/useMovies";
import Loader from "../components/Loader";

const MoviePage = () => {

    const params = useParams()

    const [movies, loading] = useMovies('movie_details', {
        movie_id: params.id
    })

    if (loading) return  <Loader/>

    return (
        <div className="movie__background">
            <div className={`wrapper`} style={{zIndex: 2, position: 'relative'}}>
                <div className="row">
                    <div className="md-col-3">
                        <img className="movie__cover" src={movies.movie.medium_cover_image} alt={`${movies.movie.title} cover`}/>
                    </div>
                    <div className="md-col-6">
                        <h1 className="text--primary">{movies.movie.title}</h1>
                        <p>{movies.movie.description_full}</p>
                        <div className="my-5">
                            <h3 className="mb-5">Genres</h3>
                            {
                                movies.movie.genres && movies.movie.genres.map(genre => (
                                    <Link to={`/`} key={genre} className="btn btn--xs btn--default">
                                        {genre}
                                    </Link>
                                ))
                            }
                        </div>
                        <div>
                            <h3 className="mb-5">Download</h3>
                            {
                                movies.movie.torrents && movies.movie.torrents.map(torrent => (
                                    <a href={torrent.url} key={torrent.hash} target="_blank" rel="noreferrer" className={`btn btn--primary`}>
                                        {torrent.quality}
                                    </a>
                                ))
                            }
                        </div>
                        {/*<pre>{JSON.stringify(movies.movie, null, 4)}</pre>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}


const styles = {
    background: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'var(--primary-color)',
        height: '100vh'
    }
}

export default MoviePage