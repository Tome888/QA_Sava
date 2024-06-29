import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './policyselect.css'

const PolicySelect = () => {
  return (
    <div className='selectDiv'>
        <div className='formControls'>

        
        <select name="" id="" >
        <option value="" disabled selected>-- Изберете Полиса --</option>
        </select>
        <select name="" id="" >
        <option value="" disabled selected>Активни полиси</option>
        </select>
      
      </div>
      <div className="BtnBuy">
        
      <Button className='submitBtn' variant="outlined"><FontAwesomeIcon icon={faCirclePlus} /> Купи полиса</Button>
      </div>
      </div>
  )
}

export default PolicySelect
