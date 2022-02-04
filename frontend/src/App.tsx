import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { selectForm } from './store/selectors/formSelector';
import { useForm } from 'react-hook-form';
import { createEmail } from './actions/actions';
import './css/style.css';

const App: React.FC = () => {
  const { status, isFetching, error, data } = useSelector(selectForm);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (event: any) => {
    dispatch(createEmail(event.email));
  }

  if (isFetching) {
    return (
      <Container sx={{paddingTop:10}} maxWidth='sm'>
      <form onSubmit={handleSubmit(submit)}>
        <TextField 
          autoComplete='off'
          size="small"
          id='outlined-basic'
          label='Enter your email'
          variant='outlined'
          type={'email'}
          {...register('email', { required: true })}
        />
        <Button type='submit' variant='contained'>SEND</Button>
        <div className='user-data'>
          Loading
        </div>
      </form>
    </Container>
    );
  }

  console.log(data)
  return (
    <Container sx={{paddingTop:10}} maxWidth='sm'>
      <form onSubmit={handleSubmit(submit)}>
        <TextField 
          autoComplete='off'
          size="small"
          id='outlined-basic'
          label='Enter your email'
          variant='outlined'
          type={'email'}
          {...register('email', { required: true })}
        />
        <Button type='submit' variant='contained'>SEND</Button>
        <div className='user-data'>
          
        </div>
      </form>
    </Container>

  )
}

export default App;
