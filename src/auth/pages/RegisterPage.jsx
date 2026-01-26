import { Box, Typography, TextField, Grid, Button, Link, } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {

  return (

    <AuthLayout title="Registrate">
      <Grid container component="form" spacing={2}>
          
          <Grid size={{ xs: 12, md: 15 }}>

            <TextField
              id="Nombre"
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              size="small"
              fullWidth
            />

          </Grid>

          <Grid size={{ xs: 12, md: 15 }}>

            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="email@google.com"
              size="small"
              fullWidth
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
            />

          </Grid>

        </Grid>



        {/* New */}

        <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid size={{ xs: 12, md: 15 }}>

            <Button variant="contained" fullWidth>
              Crear cuenta
            </Button>

          </Grid>
      
          <Grid size={{ xs: 12, md: 6 }}>

          </Grid>

        </Grid>

        <Grid
          container
          // direction="row"
          justifyContent="end"
          sx={{ mt: 2 }}>
          <Typography sx={{ mr: 1 }}> ¿Ya tienes una cuenta? </Typography>  
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/login">
            Ingresar
          </Link>

        </Grid>
    </AuthLayout>
        
        


  );

};

