import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './style.css'
import {getAllMovies,getMoviesByPage} from "../../store/movies.slice";
import {MovieCard} from "../../components";
import {moviesService} from "../../services/movies.service";
import {baseSearchUrl} from "../../configs";


const MoviesPage = () => {
    const {movies,page} = useSelector(store => store['moviesReducer']);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllMovies())

    }, []);


    return (
        <div>

            <div className={'movies-container'}>
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
            <div className={'pages-btn'}>
                <button onClick={()=> dispatch(getMoviesByPage({data:'previos'}))}>Previos page</button>
                <button onClick={()=>dispatch(getMoviesByPage({data: 'next'}))}>Next page</button>
            </div>

        </div>

)
    ;
};

export {MoviesPage};