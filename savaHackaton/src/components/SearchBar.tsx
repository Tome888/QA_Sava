import { InputAdornment, TextField } from '@mui/material'
import phoneIcon from '../assets/icons/Vector.png'


export function SearchBar(){
    return(
        <div className="searchBar" style={{justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}}>
                <img src={phoneIcon} alt="" />
                <p>0800 80 000</p>
            </div>
            <div className='searchWrapper'>
            <TextField
            id="outlined-basic"
      label="Пребарувај"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputAdornment>
        ),
             }}/>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-solid fa-earth-americas"></i>
            </div>
        </div>
    )
}