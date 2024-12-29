import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
function Cards({movie}) {
  return (
    <Card sx={{ maxWidth: 250}} className='shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
    <CardMedia
      component="img"
      alt="green iguana"
      height="100"
      image={movie.Poster}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {movie.Title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>

      </Typography>
    </CardContent>
    <CardActions>
    <NavLink to={`/movies/MovieDetails/${movie.imdbID}`}> <Button size="small">Watch NOw</Button></NavLink>
   
     
    </CardActions>
  </Card>
  )
}

export default Cards
