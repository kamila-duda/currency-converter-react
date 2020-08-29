import React from 'react'
import {
  TableContainer,
  Caption,
  Thead,
  TableHeading,
  Tbody,
  TableRow,
  TableCell
} from './styled'

const Table = ({ date, rates }) => {
  const objectEntries = Object.entries(rates)
  const sortedRates = objectEntries.sort()
  return (
    <TableContainer>
      <Caption>Kurs z dnia: {date} z European Central Bank.</Caption>
      <Thead>
        <tr>
          <TableHeading scope='col'>Waluta</TableHeading>
          <TableHeading scope='col'>Kurs w PLN</TableHeading>
        </tr>
      </Thead>
      <Tbody>
        {sortedRates.map(rates => (
          <TableRow key={rates[0]}>
            <TableCell>{rates[0]}</TableCell>
            <TableCell>{(1 / rates[1]).toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </Tbody>
    </TableContainer>
  )
}

export default Table
