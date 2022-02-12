import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres, getGenres} from "../../store/genres.slice";
import {Genre} from "../../components";

const GenresPage = () => {
    const {genres} = useSelector(store=>store['genresReducer']);
    const dispatch = useDispatch();
    console.log(genres)

    useEffect(()=>{
        dispatch(getAllGenres())
    },[]);

    return (
        <div>
            {/*{*/}
            {/*    genres.map(genre=><Genre key={genre.id} genre={genre}/>)*/}
            {/*}*/}
        </div>
    );
};

export {GenresPage};