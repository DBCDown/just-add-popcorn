import React, { useState} from 'react'
import useMovies from "../hooks/useMovies";
import MovieItem from "../components/movies/MovieItem";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Loader from "../components/Loader";
import {Link, useParams} from "react-router-dom";
import useQuery from "../hooks/useQuery";

const MoviesPage = () => {

    const query = useQuery()
    const params = useParams()
    const [ref] = useIntersectionObserver({rootMargin: '-100px'})
    const [pageNum] = useState(1)
    const [movies, loading] = useMovies('list_movies', {
        ...params,
        sort_by: 'rating'
        // page: pageNum,
    })

    return (
        <div className="wrapper">
            <div className="row">
                <div className="col">Movie: {movies && movies.movie_count}</div>
                {JSON.stringify(query)}
            </div>
            <div className="row">
                {
                    movies.movies && movies.movies.map(movie => (
                        <div key={movie.id} className={`md-col-3`}>
                            <MovieItem movie={movie}/>
                        </div>
                    ))
                }
            </div>

            <div>
                <Link className="btn btn--primary" to={`/action` }>NEXT </Link>
            </div>

            {loading && (<Loader/>)}
            <div ref={ref} style={{backgroundColor: 'teal', height: 400}}>
                {/*{JSON.stringify(movies, null, 4)}*/}
            </div>
        </div>
    )
}

export default MoviesPage