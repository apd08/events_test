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
          <Typography variant='h2' padding={3} fontFamily='Popins' textAlign='center'>Добавление мероприятия</Typography>
          <Typography variant='body1' marginBottom={3} fontFamily='Popins' textAlign='center'>Введите данные о мероприятии</Typography>
          <TextField fullWidth={true} margin='normal' label="Название" variant="outlined" placeholder='Введите название мероприятия' />
          <TextField fullWidth={true} margin='normal' label="Дата начала" variant="outlined" placeholder='Введите дату начала мероприятия' />
          <TextField fullWidth={true} margin='normal' label="Дата окончания" variant="outlined" placeholder='Введите дату окончания мероприятия' />
          <TextField fullWidth={true} margin='normal' label="Место проведения" variant="outlined" placeholder='Введите адрес'/>
          <TextField fullWidth={true} margin='normal' label="Стоимость" variant="outlined" placeholder='Введите стоимость'/>
          <TextField fullWidth={true} margin='normal' label="Описание" variant="outlined" placeholder='Краткое описание мероприятия' />
          {/* <label class="input-file">
       <span class="input-file-text" type="text"></span>
       <input type="file" name="file"/>        
        <span class="input-file-btn" onChange={handleFileChange}>Выберите файл</span>
   </label> */}
   <input type="file" placeholder="Введите текст" className='file_input'></input>
          <Button type='submit' sx={{fontFamily:'Popins', marginTop:2, width: '60%', marginBottom:2}} variant="contained"><Link to="/register/login/admin" className='registr'>Добавить</Link></Button>
        </Box>
      </form>
    </div>
  )
}

export default AddEvent;
