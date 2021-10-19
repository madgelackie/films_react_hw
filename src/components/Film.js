import React from 'react';

const Film = ({name, url}) => {
    return (
        <>
            <li id="film-list">
            <a id="film-url" href={url}>{name}</a>
            </li>
        </>
    )
}

export default Film;