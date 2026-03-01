import './Country.css'
const Country = ({country}) => {
     console.log(country.name.common);

    return (

        <div className='country'>
            <h3>Name: {country.name?.common}</h3>
            <img src={country.flags.png} alt="" />
            
        </div>
    );
};

export default Country;