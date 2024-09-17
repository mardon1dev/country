import React from "react";
import { IconSearch } from "../../assets/icon/icon";
import "./search.css";

function Search({ setCountries, allCountries, setLoading, toggleBackground }) {
  function handleCountries(e) {
    setLoading(true);
    setTimeout(() => {
      if (e.target.value.trim() === "") {
        setCountries(allCountries);
      } else {
        const filtered = allCountries.filter(
          (country) =>
            country.name
              .toLowerCase()
              .includes(e.target.value.trim().toLowerCase()) ||
            country.capital
              .toLowerCase()
              .includes(e.target.value.trim().toLowerCase()) ||
            country.population.toString().includes(e.target.value.trim())
        );
        setCountries(filtered);
      }
      setLoading(false);
    }, 500);
  }

  const handleSelect = (e) => {
    e.preventDefault();
    setLoading(true);
    const id = e.target.value;
    console.log(id);
    if (id === "0") {
      setCountries(allCountries);
    } else {
      const filteredCountries = allCountries.filter(
        (country) => country.id === id
      );
      setCountries(filteredCountries);
    }
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 flex sm:flex-row flex-col sm:items-center items-start justify-between gap-4">
      <div className="relative max-w-[480px] w-full">
        <span className="absolute top-0 bottom-0 my-auto left-8 flex items-center justify-center">
          <IconSearch />
        </span>
        <input
          className={`input text-sm font-normal leading-5 text-left outline-none w-full ${
            toggleBackground
              ? `bg-[#2B3844] text-white`
              : `bg-[#ffffff] text-black`
          }`}
          type="text"
          placeholder="Search for a country…"
          onChange={handleCountries}
        />
      </div>
      <div>
        <label>
          <select
            onChange={handleSelect}
            className={`h-[56px] px-3 overflow-hidden outline-none cursor-pointer rounded ${
              toggleBackground
                ? `bg-[#2B3844] text-white`
                : `bg-[#ffffff] text-black`
            }`}
          >
            <option className="mt-3" value="0">
              All
            </option>
            {allCountries.map((country, index) => {
              return (
                <option key={index} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
}

export default Search;
