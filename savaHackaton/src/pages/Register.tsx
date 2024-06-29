import { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
  FormHelperText
} from "@mui/material";
import { PhoneImg } from "../components/PhoneImg";


export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phoneNumber: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInputChange = (event:any) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const nameParts = formData.name.trim().split(" ");
    const errors = {
      name: nameParts.length < 2,
      phoneNumber: !/^\d{9}$/.test(formData.phoneNumber),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      password: formData.password.trim() === "",
      confirmPassword: formData.password !== formData.confirmPassword,
    };
    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if (validateForm()) {
      const userData = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      };
      console.log("User Data: ", userData);
    }
  };

  return (
    <section className="registerSection">
        <div className="registerWrapper">
      <p className="headerRegister">Регистрирај се</p>
      <form onSubmit={handleSubmit} className="formRegister">
        <TextField
          fullWidth
          id="name"
          label="Име и Презиме"
          variant="outlined"
          margin="normal"
          value={formData.name}
          onChange={handleInputChange}
          error={formErrors.name}
          helperText={formErrors.name ? "Мора да внесете и име и презиме" : ""}
          className="nameInput"
          sx={{'& .MuiOutlinedInput-root': { borderRadius: '30px', border: '1px solid black' }}}
          />
        <TextField
          fullWidth
          id="phoneNumber"
          label="Телефон"
          type="text"
          variant="outlined"
          margin="normal"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={formErrors.phoneNumber}
          helperText={formErrors.phoneNumber ? "Телефонскиот број мора да има точно 9 цифри" : ""}
          sx={{'& .MuiOutlinedInput-root': { borderRadius: '30px', border: '1px solid black' }}}
          />
        <TextField
          fullWidth
          id="email"
          label="Е-маил"
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={handleInputChange}
          error={formErrors.email}
          helperText={formErrors.email ? "Невалиден е-маил" : ""}
          sx={{'& .MuiOutlinedInput-root': { borderRadius: '30px', border: '1px solid black' }}}
          />
        <FormControl fullWidth variant="outlined" margin="normal" error={formErrors.password} sx={{'& .MuiOutlinedInput-root': { borderRadius: '30px', border: '1px solid black' }}}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  >
                  {showPassword ? (<i className="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            />
          {formErrors.password && <FormHelperText>Полето е задолжително</FormHelperText> }
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal" error={formErrors.confirmPassword} sx={{'& .MuiOutlinedInput-root': { borderRadius: '30px', border: '1px solid black' }}}>
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  >
                  {showPassword ? (<i className="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            />
          {formErrors.confirmPassword && <FormHelperText>Лозинките мора да се совпаѓаат</FormHelperText>}
        </FormControl>
        <Button
  type="submit"
  variant="contained"
  sx={{
    backgroundColor: "#1ea282",
    color: "white",
    width: "50%",
    '&:hover': {
      backgroundColor: "#178a6d",
    },
  }}
>
  Регистрирај се
</Button>
      </form>
            </div>
      <PhoneImg/>
    </section>
  );
}
