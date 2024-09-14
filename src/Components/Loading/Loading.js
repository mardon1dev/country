import React from 'react'

import "./loading.css"
const Loading = ({toggleBackground}) => {
  return (
  <div className="newtons-cradle">
    {
        Array(4).fill(0).map((_, i) => (
            <div className={`newtons-cradle__dot ${toggleBackground ? `after:bg-[#ffffff]` : `after:bg-[#000000]`}`} key={i}></div>
        ))
    }
  </div>

  )
}

export default Loading