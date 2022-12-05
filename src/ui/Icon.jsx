import React from 'react'

export default function Icon({name,extraClasses,onIconClick}) {
  
  const iconClasses =  extraClasses? `bi-${name} ${extraClasses} `:`bi-${name}`
  return (
    <i className={`$bi ${iconClasses}`} onClick={onIconClick}></i>
  )
}
