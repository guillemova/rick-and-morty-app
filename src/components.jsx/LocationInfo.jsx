import React from 'react'
import "./style.css/locationInfo.css"

const LocationInfo = ({location}) => {

  return (
    <div>
      <h2 className='location__title'>{location?.name}</h2>
      <ul className='list__container'>
        <li><span>Type:</span> {location?.type}</li>
        <li><span>Dimension:</span> {location?.dimension}</li>
        <li><span>Population:</span>{location?.residents.length}</li>
      </ul>

    </div>
  )
}

export default LocationInfo