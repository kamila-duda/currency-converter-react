import React, { useState, useEffect } from 'react'
import {DateFormat} from "./styled"

const newDate = (date) => date.toLocaleDateString(undefined, {
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

  return <DateFormat>Dzisiaj jest {newDate(date)}</DateFormat>
}

export default Time;
