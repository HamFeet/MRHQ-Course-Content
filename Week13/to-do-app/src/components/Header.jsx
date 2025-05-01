import React from 'react'

export default function Header({userName}) {
  return (
    <div className='header'>
      <h1>{userName}'s To-Do-List</h1>
    </div>
  )
}
