import React from 'react'

function Modal({children, modal, setModal, toggleBackground}) {

  return (
        <div onClick={(e)=> e.target.id === "modal" ? setModal(!modal) : ""} className={`fixed inset-0 bg-[#000000]/30 grid items-center z-20 ${modal ? `scale-100` : `scale-0`} px-4`} id='modal'>
            <div className={`relative mx-auto my-8 min-w-3xl p-8 ${toggleBackground ? `bg-[#2B3844] text-white` : `bg-[#ffffff] text-black`} rounded-lg shadow-xl`}>
                {children}
            </div>
        </div>
  )
}

export default Modal