import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {axiosService} from "./services/axios.service";
import {genresService} from "./services/genres.service";
import {moviesService} from "./services/movies.service";

import {Header} from "./components";
import {GenresPage, MoviePage, MoviesPage} from "./pages";
import './App.css'

const App = () => {
     return (
        <div>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'/movies/:id'} element={<MoviePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;

