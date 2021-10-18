import React from 'react';

const Film = ({name, url}) => {
    return (
        <>
            <h3>{name}</h3>
            <h4>{url}</h4>
        </>
    )
}

export default Film;