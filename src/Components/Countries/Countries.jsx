import { useEffect, useState } from "react";

const Countries = () => {
    const[countries, setCountries] = useState([]);
    useEffect (() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries = {countries.length}</h3>
         {
            countries.map(Country => <Countries country ={Country}></Countries>)
         }      
            
            
        </div>
    );
};

export default Countries;