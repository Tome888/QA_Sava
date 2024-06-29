import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PolicyTableProps {
  rows: {
    type: string;
    policyNo: string;
    packet: string;
    personNo: number;
    osigurenici: string;
    dateExp: string;
    price: number;
    paidBy: string;
    download: string;
  }[];
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const PolicyTable: React.FC<PolicyTableProps> = ({ rows, handlePreviousPage, handleNextPage, }) => {
  return (
    <div className='table'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className='greenRow'>
              <TableCell>Тип</TableCell>
              <TableCell align="right">Број на полиса</TableCell>
              <TableCell align="right">Пакет</TableCell>
              <TableCell align="right">Бр. на лица</TableCell>
              <TableCell align="right">Осигуреници</TableCell>
              <TableCell align="right">Рок</TableCell>
              <TableCell align="right">Цена</TableCell>
              <TableCell align="right">Платено</TableCell>
              <TableCell align="right">Преземи</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.policyNo}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="right">{row.policyNo}</TableCell>
                <TableCell align="right">{row.packet}</TableCell>
                <TableCell align="right">{row.personNo}</TableCell>
                <TableCell align="right">{row.osigurenici}</TableCell>
                <TableCell align="right">{row.dateExp}</TableCell>
                <TableCell align="right">{row.price} ден.</TableCell>
                <TableCell align="right">{row.paidBy}</TableCell>
                <TableCell align="right">{row.download}</TableCell>
              </TableRow>
            ))}
            <TableRow className='greenRow'>
              <TableCell colSpan={9} align="center">Вкупен износ: {rows.reduce((sum, row) => sum + row.price, 0)} ден.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <FontAwesomeIcon icon={faAnglesLeft} onClick={handlePreviousPage} />
        <FontAwesomeIcon icon={faAnglesRight} onClick={handleNextPage} />
      </div>
    </div>
  )
}

export default PolicyTable;
