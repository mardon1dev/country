import React, { useState } from 'react'

import "./card.css"

function CountryCard({country, countries, setCountries, toggleBackground}) {

  const [updateCountry, setUpdateCountry] = useState([]);

  const [fall, setFall] = useState(false);
  const handleDelete = (id) => {
    setFall(!fall);
    setTimeout(() => {
      setCountries(countries.filter((country) => country.id !== id));
      setFall(false);
    }, 1000);
  }

  const handleUpdate = (id) =>{
    const country = countries.find((country) => country.id === id);
    setUpdateCountry(country);
  }
  return (
    <div className={`card md:col-span-4 sm:col-span-6 col-span-12 w-full ${!toggleBackground ? `bg-[#ffffff] text-black`: `bg-[#2B3844] text-white`} rounded-lg cursor-pointer ${fall ? `fall` : ""}`}>
        <img className='w-full sm:h-[200px] h-[300px] object-cover rounded-t-md' src={country.flag} alt={country.name} height={"200px"}/>
        <div className='card__content p-[24px]'>
            <h2 className='text-xl'><strong>{country.name}</strong></h2>
            <p className='mt-4'><strong>Population:</strong> {country.population}</p>
            <p><strong>Capital</strong> {country.capital}</p>
            <div className='mt-4 flex items-center justify-end gap-3'>
              <button onClick={() => handleUpdate(country.id)} className={`px-4 py-2 rounded bg-green-500 text-white hover:bg-green-400`}>Update</button>
              <button onClick={() => handleDelete(country.id)} className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-400`}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default CountryCard;