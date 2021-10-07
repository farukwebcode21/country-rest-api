import React from 'react'

export const Countrys = (props) => {
    console.log(props);
    const {name, capital,population } = props.country;
    return (
        <div>
           <h2>Name : {name}</h2>
           <p>Capitl: {capital}</p>
           <p>{population}</p>

        </div>
    )
}
