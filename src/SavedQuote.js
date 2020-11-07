import React from 'react'

export default function SavedQuote({ date, text, handleClick }) {
  return (
    <div>
      <p>{date}</p>
      <q>{text}</q>
      <button onClick={handleClick}>&times;</button>
    </div>
  )
}
