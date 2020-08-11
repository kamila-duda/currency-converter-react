import React, { useState, useEffect } from 'react'
import './style.css'

const newDate = (date) => date.toLocaleDateString('pl', {
  month: 'long',
  weekday: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <p className='header__time'>Dzisiaj jest {newDate(date)}</p>
}

export default Time;
