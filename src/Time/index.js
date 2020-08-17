import React from 'react'
import {DateFormat} from "./styled"
import useCurrentDate from "./useCurrentDate"

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
  const date = useCurrentDate();

  return <DateFormat>Dzisiaj jest {newDate(date)}</DateFormat>
}

export default Time;
