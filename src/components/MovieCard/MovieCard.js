import React, {useEffect, useState} from 'react';

import {baseURL} from "../../configs";
import './style.css'
import {Link} from "react-router-dom";


const MovieCard = ({movie}) => {
    const {id,title, overview, poster_path, vote_average,} = movie;

    return (
        <div>
            <div className={'movie'}>
                <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title}/>
                <div className={'movie-info'}>
                    <h3>{title}</h3>
                    <span>{vote_average}</span>
                </div>
                <Link to={id.toString()} state={movie}>
                    <button>Movie details</button>
                </Link>
            </div>
        </div>
    );
};

export {MovieCard};