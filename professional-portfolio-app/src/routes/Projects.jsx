import React from 'react'
import ResponsiveAppBar from '../ResponsiveAppBar'
import { Box, Card, CardContent, Typography, Container, Grid } from '@mui/material';
import { projects } from '../projectsData'

const Projects = () => {
  return (
    <>
        <ResponsiveAppBar />
        <h1>Projects</h1>
        <Container sx={{ py: 5 }}>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card sx={{ borderRadius: 2, height: '100%' }}>
                    <CardContent>
                        <Typography variant="h5" color="#020826" component="div">
                            {project.name}
                        </Typography>
                        <Typography variant='h7' component='div'>
                            {project.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                            {project.description}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    </>
  )
}

export default Projects