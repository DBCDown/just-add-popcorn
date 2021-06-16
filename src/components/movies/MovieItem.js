import React from "react";
import { Link } from 'react-router-dom'

const MovieItem = ({movie}) => {


    return (
        <div className={`movie__panel`}>
            <Link to={`movie/${movie.id}`}>
                <img className={`movie__cover`} src={movie.medium_cover_image} alt={movie.title}/>
            </Link>
            <h4>{movie.title}</h4>
            {/*<ul>*/}
            {/*    {*/}
            {/*        movie.genres && movie.genres.map(gen => (*/}
            {/*            <li key={gen}>*/}
            {/*                <Link to={`movies?genre=${gen.toLowerCase()}`} className="mr-3">{gen}</Link>*/}
            {/*            </li>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</ul>*/}
            Year: {movie.year}
        </div>
    )
}

export default MovieItem