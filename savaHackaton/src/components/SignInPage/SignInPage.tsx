import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import './signinpage.css';
import { Button, TextField } from '@mui/material';
import PopUp from '../PopUp/PopUpComp/PopUp'; 

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError('');
    } else {
      setEmailError('Невалиден е-маил');
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 6) {
      setPasswordError('');
    } else {
      setPasswordError('Лозинката мора да има најмалку 6 карактери');
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      if (!email) setEmailError('Е-маил е задолжителен');
      if (!password) setPasswordError('Лозинка е задолжителна');
    }
  };

  const togglePhonePopup = () => {
    setIsPhonePopupOpen(!isPhonePopupOpen);
  };

  return (
    <div className='signInPage'>
      <div className="content">
        <img src="/images/SavaLogo.png" alt="Sava Logo" />
        <form onSubmit={handleSubmit}>
          <TextField
            className='inputField emailField'
            id="outlined-required"
            label="Е-маил"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
            fullWidth
          />
          <TextField
            className='inputField'
            id="outlined-password-input"
            label="Лозинка"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={!!passwordError}
            helperText={passwordError}
            autoComplete="current-password"
            fullWidth
          />
          <p className='forgetPassword'>Заборави лозинка?</p>
          <Button className='submitBtn' variant="contained" type="submit">Најави се</Button>
        </form>
        <p>Немаш профил? <span className='registerSpan'> Регистрирај се овде.</span></p>
        <p>или</p>
        <Button className='logInBtns' variant="outlined"><FontAwesomeIcon icon={faGoogle} /> Логирај се преку G-mail</Button>
        <Button className='logInBtns' variant="outlined"><FontAwesomeIcon icon={faMicrosoft} />Логирај се преку Microsoft</Button>
        <Button className='logInBtns' variant="outlined" onClick={togglePhonePopup}><FontAwesomeIcon icon={faPhoneVolume} />Логирај се преку телефон</Button>
      </div>
      <div className="mobileImg">
        <img src="/images/SavaPhone.png" alt="" />
      </div>

      <PopUp isOpen={isPhonePopupOpen} onClose={togglePhonePopup} />
    </div>
  );
}

export default SignInPage;
