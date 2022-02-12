import React from 'react';

const Genre = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <h2>List of genres:</h2>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export {Genre};