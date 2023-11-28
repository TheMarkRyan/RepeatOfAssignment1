import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import { getGenres } from '../../api/tmdb-api';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/filterMovies.png';

const FilterMoviesCard = ({ onSearch, onFilter }) => {
  const { data: genresData, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = genresData.genres;

  const handleTextChange = (e) => {
    onSearch(e.target.value);
  };

  const handleGenreChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgb(150, 0, 0)" }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1" style={{ color: 'white' }}>
          Filter the movies.
        </Typography>
        <TextField
          sx={{
            margin: 1,
            minWidth: 220,
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
          }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="outlined"
          onChange={handleTextChange}
        />
        <FormControl sx={{ margin: 1, minWidth: 220 }}>
          <InputLabel id="genre-label" style={{ color: 'white' }}>Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value=""
            onChange={handleGenreChange}
            label="Genre"
            sx={{ color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          >
            <MenuItem value=""><em>All</em></MenuItem>
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
    </Card>
  );
};

export default FilterMoviesCard;