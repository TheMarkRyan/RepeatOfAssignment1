import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3} lg={2}> 
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={10}>
        <Grid container spacing={2}>
          {props.movies.map((m) => (
            <Grid item xs={6} sm={4} md={3} lg={4} key={m.id}>
              <Movie movie={m} selectFavorite={props.selectFavorite} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieList;