import React from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import { Container, Typography, Grid } from '@mui/material'
import '../styles/About.css'

const About = () => {
  return (
    <>
        <ResponsiveAppBar />
        <h1>About</h1>
        <Container sx={{ py: 5 }}>
            <Grid container spacing={4}>
                <Typography variant="h4" color="#020826" component="div">
                    Education
                </Typography>
            </Grid>
        </Container >
    </>
  )
}

export default About