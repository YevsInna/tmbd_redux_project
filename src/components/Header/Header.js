import React from 'react';
import {Outlet, NavLink} from 'react-router-dom'

import './style.css'

const Header = () => {
    return (
        <div>
            <div className={'menu'}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {Header};