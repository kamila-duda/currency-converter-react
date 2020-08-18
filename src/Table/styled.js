import styled from 'styled-components'

export const TableContainer = styled.table`
  border-collapse: separate;
  width: 250px;
  font-size: 15px;
  border: 1px solid #000;
border-radius: 10px;
border-spacing: 0px;
`
export const Caption = styled.caption`
  font-size: 13px;
`
export const TableRow = styled.tr`
  padding: 5px;
`
export const TableHeading = styled.th`
  
  background-color: teal;
  padding: 5px;   
&:first-child{
  border-radius: 10px 0 0 0;
}
&:last-child{
  border-radius: 0 10px 0 0;
border-left: 1px solid #000; 
}
`

export const TableCell = styled.td`
  padding: 5px;  
border-top: 1px solid #000; 
&:nth-child(even){
border-left: 1px solid #000; 
}
`

export const TableImage = styled.img`
  width: 60px;
  border: 0.7px solid #000;
  margin: 0 auto;
  display: block;
`
