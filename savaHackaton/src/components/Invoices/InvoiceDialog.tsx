import { Radio, Dialog, FormControlLabel, RadioGroup, Checkbox, Button } from '@mui/material';
import React, { useState } from 'react';
import './invoicedialog.css'
import { faCircleMinus, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface InvoiceDialogProps {
  open: boolean;
  onClose: () => void;
}

const InvoiceDialog: React.FC<InvoiceDialogProps> = ({ open, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod((event.target as HTMLInputElement).value);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth={"lg"}
      PaperProps={{
        sx: {
          borderRadius: "30px",
          height: "85%",
        }
      }}
    >
        
      <h3>Плаќање на фактура F1-1</h3>
      <div className='dialogInv'>
        <div className="InvDialogLeft">
          <h3>Краток преглед</h3>
          <div className="row">
            <p>Износ:</p>
            <p>0.00ден.</p>
          </div>
          <div className="row">
            <p>Данок:</p>
            <p>0.00ден.</p>
          </div>
          <div className="row">
            <p>Попуст:</p>
            <p>0.00ден.</p>
          </div>
          <div className="row border">
            <p><strong>Вкупна Сума:</strong></p>
            <p>0.00ден.</p>
          </div>
          <div className='flexDiv'>
            <h5>Метод на плаќање</h5>
            <RadioGroup value={selectedMethod} onChange={handleMethodChange} defaultValue="method1">
                <div className='radioGroup'>

              <FormControlLabel
                value="method1"
                control={<Radio />}
                label="Зачувани"
                />
              <FormControlLabel
                value="method2"
                control={<Radio />}
                label="Ново"
                />
                </div>
            </RadioGroup>
          </div>
          <p className='cardPar'><FontAwesomeIcon icon={faCreditCard} />Кредитна/Дебитна картичка</p>
          <h5>Информации за картичката</h5>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={2}>5245 0078 2258 4978</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left" >25/06</TableCell>
            <TableCell align="center" >345</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left" colSpan={2}>Емилија Василева</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <div className='infoPay'>
        <h3>Информации за наплата</h3>
        <p><FormControlLabel control={<Checkbox defaultChecked />} label="" />Користете ги информациите за мојата адреса за контакт </p>
        <Button className='submitBtn' variant="outlined">Плати</Button>
    </div>
        </div>
        <div className="InvDialogRight">
        <div className='greenRowCode'></div>
            <div className="heading">
                <h3>Преглед</h3>
                <Button className='headingBtn' variant="contained">Преземете PDF</Button>
                <Button className='headingBtn' variant="contained">Испрати на е-пошта</Button>
                <Button className='headingBtn' variant="contained">Печати</Button>
            </div>
            <div className="robotDiv">
                <img src="./images/SavaRobot.png" alt="" />
                <p>Фактура број: 52247</p>
                <p><FontAwesomeIcon icon={faCircleMinus} /> Плаќањето е на чекање</p>
            </div>
            <div className='infoDiv'>
            <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Фактурирана до</TableCell>
            <TableCell align="right">Рок на достасуавње</TableCell>
            <TableCell align="right">Број на случај</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell >Сава</TableCell>
          <TableCell >Јул. 05 2024</TableCell>
          <TableCell >52247-GH3</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
            <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Опис на ставката</TableCell>
            <TableCell align="right">Количина</TableCell>
            <TableCell align="right">Цена</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>

          <TableCell ></TableCell>
          <TableCell >Износ</TableCell>
          <TableCell >0.00ден.</TableCell>
            </TableRow>
            <TableRow>

          <TableCell ></TableCell>
          <TableCell >Данок</TableCell>
          <TableCell >0.00ден.</TableCell>
            </TableRow>
            <TableRow>

          <TableCell ></TableCell>
          <TableCell >Попуст</TableCell>
          <TableCell >0.00ден.</TableCell>
            </TableRow>
            <TableRow>
          <TableCell ></TableCell>
          <TableCell >Вкупна сума</TableCell>
          <TableCell >0.00ден.</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

            </div>
            <div className='greenRowCode'>
                <div className="greenInfo">
                    <h5>Ви Благодариме</h5>
                    <p>+0800 80 000  mk.sava.insure</p>
                </div>
            </div>
        </div>
      </div>
    </Dialog>
  );
}

export default InvoiceDialog;
