import React from 'react'

export default function Quote({ date, text }) {
  return (
    <div>
      <p>{date}</p>
      <q>{text}</q>
    </div>
  )
}
