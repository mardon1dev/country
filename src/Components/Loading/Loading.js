import React from 'react'

import "./loading.css"
const Loading = ({toggleBackground}) => {
  return (
  <div className="newtons-cradle">
    <div className={`newtons-cradle__dot ${toggleBackground ? `after:bg-[#ffffff]` : `after:bg-[#000000]`}`}></div>
    <div className={`newtons-cradle__dot ${toggleBackground ? `after:bg-[#ffffff]` : `after:bg-[#000000]`}`}></div>
    <div className={`newtons-cradle__dot ${toggleBackground ? `after:bg-[#ffffff]` : `after:bg-[#000000]`}`}></div>
    <div className={`newtons-cradle__dot ${toggleBackground ? `after:bg-[#ffffff]` : `after:bg-[#000000]`}`}></div>
  </div>

  )
}

export default Loading