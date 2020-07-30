import React, { useState, useEffect } from 'react'
import './style.css'

const Time = () => {
  const [date, setDate] = useState()

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDate = new Date().toLocaleDateString('pl', {
        month: 'long',
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
      setDate(newDate)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <p className='header__time'>Dzisiaj jest {date}</p>
}

export default Time;
