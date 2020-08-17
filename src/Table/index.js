import React from 'react'
import {TableContainer, Caption, TableRow, TableHeading, TableCell, TableImage} from "./styled"
import { currencies } from '../utils/currency'

const Table = () => {
  return (
    <TableContainer>
      <Caption>
        Kurs walut z dnia: 16.06.2020 r.
      </Caption>
      <thead>
        <TableRow>
          <TableHeading scope='col'>
            Waluta
          </TableHeading>
          <TableHeading scope='col'>
            Kurs w PLN
          </TableHeading>
        </TableRow>
      </thead>
      <tbody>
        {currencies.map(currency => (
          <TableRow key={currency.symbol}>
            <TableCell>
              <TableImage
                src={currency.image}
                alt={currency.name}
              />
              {currency.symbol}
            </TableCell>
            <TableCell>{currency.rate}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  )
}

export default Table
