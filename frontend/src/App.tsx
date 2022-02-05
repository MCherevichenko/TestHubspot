import React from 'react';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
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
  const prop = data?.properties || "Waiting data";
  const b = Object.entries(prop);

  const submit = (event: any) => {
    dispatch(createEmail(event.email));
  }

  if (isFetching) {
    return (
      <Container sx={{ paddingTop: 10 }} maxWidth='md'>
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
  if (prop !== "Waiting data") {
    const rows: any = [];
    b.map(([propertyName, property]) => (
      rows.push({id: Math.random(), Property: propertyName, Value:property.value})
    ))
    const columns = [
      { field: 'Property', headerName: 'Property', width: 180 },
      { field: 'Value', headerName: 'Value', width: 300 },
    ];
    return (
      <Container sx={{ paddingTop: 10 }} maxWidth='md'>
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
            <div className='grid'>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </div>
        </form>
      </Container>

    )
  }

  return (
    <Container sx={{ paddingTop: 10 }} maxWidth='md'>
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
