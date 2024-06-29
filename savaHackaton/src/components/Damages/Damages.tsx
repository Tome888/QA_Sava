import './damages.css';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleDot, faCirclePlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function createDamages(
  name: string,
  tecenje: string
) {
  return {
    name,
    tecenje,
  };
}

const damagesList = [
  createDamages("PO-1234", "obrabotka"),
  createDamages("PO-789", "likvidacija"),
  createDamages("PO-456", "isplatena"),
  createDamages("PO-123", "odbiena")
];

const Damages = () => {
  const [selectedDamage, setSelectedDamage] = useState<null | { name: string; tecenje: string }>(null);

  const handleDamageClick = (damage: { name: string; tecenje: string }) => {
    setSelectedDamage(damage);
  };

  const getIcons = (tecenje: string) => {
    switch (tecenje) {
      case 'obrabotka':
        return [faCircleDot, faCircleDot, faCircleDot];
      case 'likvidacija':
        return [faCircleCheck, faCircleDot, faCircleDot];
      case 'isplatena':
        return [faCircleCheck, faCircleCheck, faCircleCheck];
      case 'odbiena':
        return [faCircleCheck, faCircleCheck, faCircleXmark];
      default:
        return [faCircleDot, faCircleDot, faCircleDot];
    }
  };

  const getIconText = (tecenje: string, index: number) => {
    if (index === 0) {
      return 'obrabotka';
    } else if (index === 1) {
      return 'likvidacija';
    } else if (index === 2) {
      return tecenje === 'odbiena' ? 'odbiena' : 'isplatena';
    }
    return '';
  };

  return (
    <div className='damages'>
      <h4>Штети</h4>
      <div className='formControls'>
        <FormControl sx={{ m: 1, width: 250 }}>
          <InputLabel id="demo-multiple-name-label">-- Изберете полиса --</InputLabel>
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
            input={<OutlinedInput label="-- Изберете полиса --" />}
          >
          </Select>
        </FormControl>
        <Button className='submitBtn' variant="outlined">
          <FontAwesomeIcon icon={faCirclePlus} /> Купи полиса
        </Button>
      </div>

      <div className="submitDamages">
        <div className="left fb-25">
          <h4>Пријави штети</h4>
          {damagesList.map((damage, index) => (
            <div key={index} className="damage">
              <Button onClick={() => handleDamageClick(damage)}>{damage.name}</Button>
            </div>
          ))}
        </div>
        <div className="right fb-75">
          {selectedDamage ? (
            <div className="damageDetails">
              <h3>{selectedDamage.name}</h3>
              <p>Течење: {selectedDamage.tecenje}</p>
              <div className="damageWrapper">

              {getIcons(selectedDamage.tecenje).map((icon, index) => (
                  <div key={index} className="iconWrapper">
                  <FontAwesomeIcon
                    className={icon === faCircleXmark ? "iconsTecenje iconXmark" : "iconsTecenje"}
                    icon={icon}
                    />
                  <p>{getIconText(selectedDamage.tecenje, index)}</p>
                </div>
              ))}
            </div>
              </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Damages;
