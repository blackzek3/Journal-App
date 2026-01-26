import { Box, Typography, TextField, Grid, Button, Link, } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { checkingAutentication } from "../../store/auth/thunks";
export const LoginPage = () => {

  const dispath = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'neocampos4@gmail.com',
    password: '12345' 
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispath( checkingAutentication() );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogle')
  }

  return (

    <AuthLayout title="Login" >
      <Grid onSubmit={ onSubmit } container component="form"  spacing={2}>
           
          <Grid size={{ xs: 12, md: 15 }}>

            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="email@google.com"
              size="small"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />

          </Grid>

          <Grid size={{ xs: 12, md: 15 }}>

            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="password"
              size="small"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />

          </Grid>

        </Grid>



        {/* New */}

        <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid size={{ xs: 12, md: 6 }}>

            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>

          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>

            <Button
              variant="contained"
              fullWidth
              startIcon={<Google />}
              onClick={ onGoogleSignIn }
            >
              Google
            </Button>

          </Grid>

        </Grid>

        <Grid
          container
          // direction="row"
          justifyContent="end"
          sx={{ mt: 2 }}
        >

          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/register">
            Create an account.
          </Link>

        </Grid>
    </AuthLayout>
        
        


  );

};

