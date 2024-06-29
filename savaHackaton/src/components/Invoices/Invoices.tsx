// Invoices.tsx
import './invoices.css';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import InvoiceDialog from './InvoiceDialog';

function createData(
  invoiceNo: string,
  policies: string,
  osigurenici: string,
  dateExp: string,
  price: number,
  paidBy: string,
  forPaying: string,
  status: string,
) {
  return { invoiceNo , policies, osigurenici, dateExp, price, paidBy, forPaying, status};
}

const rows = [
  createData("F-1", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Плати сега"),
  createData("F-2", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Платено"),
  createData("F-3", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Платено"),
  createData("F-4", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Платено"),
  createData("F-5", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Платено"),
  createData("F-6", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Платено"),
  createData("F-7", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Платено"),
  createData("F-8", "Изберете полиси", "Емилија", "28/06/2024", 0, "", "", "Платено") 
];

const Invoices = () => {
  const [page, setPage] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);const rowsPerPage = 3;
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null); 
  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, Math.ceil(rows.length / rowsPerPage) - 1));
  };

  const handleInvoiceClick = (invoice: any) => {
    setSelectedInvoice(invoice);
    if (invoice.status === 'Плати сега') {
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const rowsToDisplay = rows.slice(start, end);

  return (
    <div className='invoices'>
      <h4>Фактури</h4>
      <div className='formControls'>
        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-name-label">-- Изберете фактура --</InputLabel>
          <Select
            sx={{
              '& .MuiSelect-select': {
                paddingRight: 4,
                paddingLeft: 2,
                paddingTop: 1,
                paddingBottom: 1,
              }
            }}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            input={<OutlinedInput label="-- Изберете фактура --" />}
          >
          </Select>
        </FormControl>
        <Button className='submitBtn' variant="outlined">
          Плати брзо  
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className='greenRow'>
              <TableCell>Број на фактури</TableCell>
              <TableCell align="right">Полиси</TableCell>
              <TableCell align="right">Осигуреници</TableCell>
              <TableCell align="right">Рок</TableCell>
              <TableCell align="right">Износ</TableCell>
              <TableCell align="right">Платено со</TableCell>
              <TableCell align="right">За плаќање</TableCell>
              <TableCell align="right">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsToDisplay.map((row) => (
              <TableRow
                key={row.invoiceNo}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleInvoiceClick(row)} // Handle click event for each row
              >
                <TableCell component="th" scope="row">
                  {row.invoiceNo}
                </TableCell>
                <TableCell align="right">{row.policies}</TableCell>
                <TableCell align="right">{row.osigurenici}</TableCell>
                <TableCell align="right">{row.dateExp}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.paidBy}</TableCell>
                <TableCell align="right">{row.forPaying}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
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
      {openDialog && (
        <InvoiceDialog open={openDialog} onClose={handleCloseDialog} />
      )}
    </div>
  );
}

export default Invoices;
