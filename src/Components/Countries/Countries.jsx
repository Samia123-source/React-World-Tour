import { useEffect, useState } from "react";
import Country from "./Country/Country";

const Countries = () => {
    const[countries, setCountries] = useState([]);
    useEffect (() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,co')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3>Total countries = {countries.length}</h3>
           {
             countries.map(country => <Country key={country.name.official} country={country}></Country>)
           }
         
            
        </div>
    );
};

export default Countries;