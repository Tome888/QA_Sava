import './policyinside.css';
import PolicySelect from './PolicySelect';
import { useState } from 'react';
import PolicyTable from './PolicyTable';

function createData(
  type: string,
  policyNo: string,
  packet: string,
  personNo: number,
  osigurenici: string,
  dateExp: string,
  price: number,
  paidBy: string,
  download: string
) {
  return { type, policyNo, packet, personNo, osigurenici, dateExp, price, paidBy, download };
}

const rows = [
  createData('Bike', "PO-123456", "", 1, "Емилија", "24/07 - 28/08", 1200, "card", "PDF"),
  createData('Car', "PO-123457", "", 2, "Емилија", "24/07 - 28/08", 1200, "card", "PDF"),
  createData('Bag', "PO-123458", "", 3, "Емилија", "24/07 - 28/08", 1200, "card", "PDF"),
  createData('Bike', "PO-123459", "", 4, "Емилија", "24/07 - 28/08", 1200, "card", "PDF"),
  createData('Bag', "PO-123460", "", 5, "Емилија", "24/07 - 28/08", 1200, "card", "PDF"),
];

const rowsPerPage = 3;

const PolicyInside = () => {
  const [page, setPage] = useState(0);

  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, Math.ceil(rows.length / rowsPerPage) - 1));
  };

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const rowsToDisplay = rows.slice(start, end);

  return (
    <div className='policyInside'>
      <h4>Полиси</h4>
      <PolicySelect />
      <PolicyTable 
        rows={rowsToDisplay} 
        handlePreviousPage={handlePreviousPage} 
        handleNextPage={handleNextPage} 
      />
    </div>
  )
}

export default PolicyInside;
