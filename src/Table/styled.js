import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: separate;
  font-size: 15px;
  border: 1px solid #000;
  border-radius: 10px;
  border-spacing: 0px;
`;
export const Caption = styled.caption`
  font-size: 13px;
`;
export const Thead = styled.thead`
  border-top-right-radius: 10px;
  display: block;
  background-color: teal;
  border-top-left-radius: 10px;
`;
export const TableHeading = styled.th`
  width: 100px;
  padding: 5px;
  &:first-child {
    border-right: 1px solid #000;
  }
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #0000002b;
  }
`;
export const Tbody = styled.tbody`
  display: block;
  width: 100%;
  height: auto;
`;
export const TableCell = styled.td`
  padding: 15px;
  width: 100px;
  font-weight: bold;
  &:first-child {
    border-right: 1px solid black;
  }
`;
