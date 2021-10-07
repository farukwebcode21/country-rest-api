import React, { useEffect, useState } from 'react'
import { Countrys } from './Countrys';

const Country = () => {
    const [countrys, setCountrys] = useState([]);
    // console.log(countrys);
    useEffect (()=>{
        const api_key ='3a073147dd7e9bc26c8b4e9ae552584d';
        fetch(`http://api.countrylayer.com/v2/all?access_key=${api_key}`)
        .then(res =>res.json())
        .then(data => setCountrys(data));
    
    },[])
    return (
        <div>
            <h1>Country Rest API Test</h1>
            <h4>Country :{countrys.length}</h4>
            {
                countrys.map(country => <Countrys 
                    country ={country}
                     key={country.alpha3Code}
                />)
            }
        </div>
    )
}

export default Country;