import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Link, Container, CssBaseline, Avatar } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Logo from '../../assets/newLogo.jpeg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInBox = styled(Box)({
  animation: `${fadeIn} 1s ease-in-out`,
});

export default function LoginSection() {
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate('/')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FadeInBox
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          alt="Your Company"
          src={Logo}
          style={{
            width: "200px",
            height: "200px",
            display: "block",
            margin: "0 auto",
          }}
        />
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Sign in to your account
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/services");
          }}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleNavigate}
            sx={{ mt: 3, mb: 2, background:'#00796b' }}
          >
            Sign In
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mt: 2 }}
          >
            Not a member? <Link href="/register">Register</Link>
          </Typography>
        </Box>
      </FadeInBox>
    </Container>
  );
}
