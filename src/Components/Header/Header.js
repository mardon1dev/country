import React from 'react'
import { DarkMode, LightMode } from '../../assets/icon/icon';


function Header({handleModal, toggleBackground, handleBackground}) {

  return (
    <header className={`header fixed top-0 w-full z-10 ${toggleBackground ? `bg-[#2B3844] text-white` : `bg-[#ffffff] text-black`}`}>
        <div className='max-w-[1280px] w-full mx-auto py-6 px-4 flex justify-between items-center'>
            <a className='font-bold text-2xl' href='/'>Where in the world?</a>
            <div className='flex items-center gap-3'>
              {
                toggleBackground ? 
                <button onClick={handleBackground} className='w-[40px] h-[40px] flex items-center justify-center rounded-full'><LightMode className="w-[50%]"/></button> :
                <button onClick={handleBackground} className='w-[40px] h-[40px] flex items-center justify-center rounded-full'><DarkMode  className="w-[50%]"/></button> 
              }
              <button onClick={handleModal} className='bg-[#000000]/10 px-4 py-2 rounded hover:bg-[#000000]/30'>Add</button>
            </div>
        </div>
    </header>
  )
}

export default Header