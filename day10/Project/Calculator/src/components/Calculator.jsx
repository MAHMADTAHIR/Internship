import React, { useState } from 'react'
import Display from './Display'
import Buttons from './Buttons'

export default function Calculator() {
  const [input, setInput] = useState('')



  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString())
      } catch {
        setInput('Error')
      }
    } else if (value === 'C') {
      setInput('')
    } else {
      setInput(input + value)
    }
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className="card mx-auto p-3 shadow" style={{ maxWidth: '300px' }}>
        <Display input={input} />
        <Buttons handleClick={handleClick} />
      </div>
    </>
  )
}

    