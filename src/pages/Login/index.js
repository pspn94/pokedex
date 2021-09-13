import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';


function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form 
      className={classes.root} 
      noValidate 
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      >
      <Typography variant='h4'>Login</Typography>
      <TextField label="E-mail" {...register('email')}/>
      <TextField label="Senha" {...register('senha')} type='password'/>
      <Button color='primary' variant='contained' >Entrar</Button>
    </form>
  );
}

export default Login;