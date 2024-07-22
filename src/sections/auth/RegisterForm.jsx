import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
  CssBaseline,
  Avatar,
} from '@mui/material'
import { styled, keyframes } from '@mui/system'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Logo from '../../assets/newLogo.jpeg'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const FadeInBox = styled(Box)({
  animation: `${fadeIn} 1s ease-in-out`,
})

export default function RegisterSection() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <FadeInBox
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          alt='Your Company'
          src={Logo}
          style={{
            width: '200px',
            height: '200px',
            display: 'block',
            margin: '0 auto',
          }}
        />
        <Typography component='h1' variant='h5' sx={{ mt: 2 }}>
          Register a new account
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box
          component='form'
          onSubmit={(e) => {
            e.preventDefault()
            navigate('/services')
          }}
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='new-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            onClick={handleNavigate}
            sx={{ mt: 3, mb: 2, background: '#00796b' }}
          >
            Register
          </Button>
          <Typography
            variant='body2'
            color='textSecondary'
            align='center'
            sx={{ mt: 2 }}
          >
            Already have an account? <Link href='/login'>Sign in</Link>
          </Typography>
        </Box>
      </FadeInBox>
    </Container>
  )
}
