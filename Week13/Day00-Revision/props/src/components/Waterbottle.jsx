import React from 'react'

export default function Waterbottle({name="Sistema", colour="White"}) {
  return (
    <div>
        <h1>Water Bottle</h1>
        {name}
        {colour}
    </div>
  )
}
