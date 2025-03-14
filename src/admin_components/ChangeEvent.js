import React from 'react';
import { Link } from 'react-router-dom';
import {TextField, Button, Typography} from '@mui/material';
import {Box} from '@mui/material';

function AddEvent() {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const inputText = event.target.nextElementSibling;
    inputText.textContent = file.name;
  }

  return (
    <div className='root' id='root'>
      <form className="form">
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          <Typography variant='h2' padding={3} fontFamily='Popins' textAlign='center'>Изменение мероприятия</Typography>
          <Typography variant='body1' marginBottom={3} fontFamily='Popins' textAlign='center'>Введите измененные данные о мероприятии</Typography>
          <TextField fullWidth={true} margin='normal' label="Щелкунчик" variant="outlined"/>
          <TextField fullWidth={true} margin='normal' label="12.12.2024" variant="outlined" />
          <TextField fullWidth={true} margin='normal' label="20.12.2024" variant="outlined" />
          <TextField fullWidth={true} margin='normal' label="Большой театр" variant="outlined"/>
          <TextField fullWidth={true} margin='normal' label="20 BYN" variant="outlined"/>
          <TextField fullWidth={true} margin='normal' label="Добро пожаловать в волшебный мир классического балета! Откройте для себя удивительное представление, где юный герой вместе с вами отправится в увлекательное путешествие." variant="outlined" placeholder='Краткое описание мероприятия' />
          {/* <label class="input-file">
       <span class="input-file-text" type="text"></span>
       <input type="file" name="file"/>        
        <span class="input-file-btn" onChange={handleFileChange}>Выберите файл</span>
   </label> */}
   <input type="file" placeholder="Введите текст" className='file_input'></input>
          <Button type='submit' sx={{fontFamily:'Popins', marginTop:2, width: '60%', marginBottom:2}} variant="contained"><Link to="/register/login/admin" className='registr'>Изменить</Link></Button>
        </Box>
      </form>
    </div>
  )
}

export default AddEvent;
