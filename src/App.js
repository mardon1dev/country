import { useState } from 'react';
import './App.css';
import CountryCard from './Components/CountryCard/CountryCard';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Modal from './Components/Modal/Modal';
import UploadImage from "./assets/images/upload.webp"
import Loading from './Components/Loading/Loading';
function App() {
  const allCountries = [
    {
      id: 1,
      name: "Wallis and Futuna",
      capital: "Mata-Utu",
      population: 11750,
      flag: "https://flagcdn.com/wf.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 2,
      name: "Iceland",
      capital: "Reykjavik",
      population: 366425,
      flag: "https://flagcdn.com/is.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 3,
      name: "Luxembourg",
      capital: "Luxembourg",
      population: 632275,
      flag: "https://flagcdn.com/lu.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 4,
      name: "Mali",
      capital: "Bamako",
      population: 20250834,
      flag: "https://flagcdn.com/ml.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 5,
      name: "Comoros",
      capital: "Moroni",
      population: 869595,
      flag: "https://flagcdn.com/km.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 6,
      name: "Australia",
      capital: "Canberra",
      population: 25687041,
      flag: "https://flagcdn.com/au.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 7,
      name: "Estonia",
      capital: "Tallinn",
      population: 1331057,
      flag: "https://flagcdn.com/ee.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 8,
      name: "Canada",
      capital: "Ottawa",
      population: 38005238,
      flag: "https://flagcdn.com/ca.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 9,
      name: "Belarus",
      capital: "Minsk",
      population: 9398861,
      flag: "https://flagcdn.com/by.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 10,
      name: "Guyana",
      capital: "Georgetown",
      population: 786559,
      flag: "https://flagcdn.com/gy.svg",
      isLiked: false,
      isBasket: false
    }
  ];

  const [toggleBackground, setToggleBackground] = useState(false);
  const handleBackground = () =>{
    setToggleBackground(!toggleBackground)
  }

  const [countries, setCountries] = useState(allCountries)
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  const [flag, setFlag] = useState(UploadImage);

  const [loading, setLoading] = useState(false)


  function handleModal(){
    setModal(!modal)
  }

  function handleFlag (e){
    setFlag(URL.createObjectURL(e.target.files[0]))
  }

  function handleAddCountry(e){
    e.preventDefault();

    const newCountry = {
      id: allCountries.length ? allCountries[allCountries.length - 1] + 1 : 1,
      name,
      capital,
      population,
      flag,
      isLiked: false,
      isBasket: false
    }
    setCountries([newCountry, ...countries])
    setName("");
    setCapital("");
    setPopulation("");
    setFlag(UploadImage);
    handleModal();
    setLoading(!loading);
    setTimeout(() => setLoading(false), 1000);
  }

  const handleSelect = (e) => {
    e.preventDefault()
    setLoading(!loading)
    const id = e.target.value
    if (id === 0) {
        setCountries(allCountries)
    }
    else{
        const filteredCountries = allCountries.filter(country => country.id === id)
        setCountries(filteredCountries)
    }
    setTimeout(() => setLoading(false), 1000);
}


  return (
    <div className={`${toggleBackground ? `bg-[#202C36]`: `bg-[#FAFAFA]`} min-h-screen`}>
      <Header handleModal={handleModal} toggleBackground={toggleBackground} handleBackground={handleBackground} />
      <main className='pt-[120px] pb-[20px]'>
        <Search setCountries={setCountries} allCountries={allCountries} handleSelect={handleSelect} setLoading={setLoading} toggleBackground={toggleBackground}/>
        <div className='max-w-[1280px] mx-auto pt-[48px] px-4'>
          <div className='grid grid-cols-12 lg:gap-[74px] sm:gap-[37px] gap-y-[74px] w-full'>
            {
              loading ? <div className='col-span-12 flex items-center justify-center py-10'><Loading toggleBackground={toggleBackground} /></div> : 
              countries.length > 0 ? (
                countries.map((country, index) => (
                  <CountryCard country={country} key={index} countries={countries} setCountries={setCountries} loading={loading} setLoading={setLoading} toggleBackground={toggleBackground} />
                ))
              ) : (
                <div className='text-center w-full col-span-12'>
                  <p className={`text-xl text-gray-500 ${toggleBackground ? `text-white` : `text-black`}`}>No countries found.</p>
                </div>
              )
            }
          </div>
        </div>
      </main>
      <Modal modal={modal} setModal={setModal} handleModal={handleModal} toggleBackground={toggleBackground}>
        <form onSubmit={handleAddCountry} className={`min-w-[400px] flex items-start justify-between gap-6 h-full`}>
            <label>
              <input onChange={handleFlag} type="file" className='hidden' />
              <img className='rounded h-[300px] object-cover' src={flag} width={"300px"} height={"300px"} />
            </label>
            <div className='flex flex-col justify-between h-[300px]'>
              <div className='flex flex-col gap-3'>
                <label className='flex flex-col'>
                  <span className='text-sm mb-2'>Country name: </span>
                  <input 
                    className={`px-4 py-2 outline-none shadow-md focus:shadow-lg rounded ${toggleBackground ? `bg-[#2B3844] text-white`: `bg-[#ffffff] text-black` }`} 
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='Country name' 
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-sm mb-2'>Country capital: </span>
                  <input 
                    className={`px-4 py-2 outline-none shadow-md focus:shadow-lg rounded ${toggleBackground ? `bg-[#2B3844] text-white`: `bg-[#ffffff] text-black` }`} 
                    type='text' 
                    name='capital' 
                    id='capital' 
                    placeholder='Country capital' 
                    required
                    value={capital}
                    onChange={(e)=>setCapital(e.target.value)}
                  />
                </label>            
                <label className='flex flex-col'>
                  <span className='text-sm mb-2'>Country population: </span>
                  <input 
                    className={`px-4 py-2 outline-none shadow-md focus:shadow-lg rounded ${toggleBackground ? `bg-[#2B3844] text-white`: `bg-[#ffffff] text-black` }`} 
                    type='number' 
                    name='population' 
                    id='population' 
                    placeholder='Country population' 
                    required
                    value={population}
                    onChange={(e)=>setPopulation(e.target.value)}
                  />
                </label>
              </div>
              <div className='flex justify-end gap-3'>
                <button onClick={handleModal} type='button' className='px-4 py-2 bg-[#000000]/20 rounded hover:bg-[#000000]/30'>Cancel</button>
                <button type='submit' className='px-4 py-2 bg-[#000000]/20 rounded hover:bg-[#000000]/30'>Add</button>
              </div>
            </div>
          </form>
      </Modal>
    </div>
  );
}

export default App;
