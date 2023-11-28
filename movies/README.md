## Assignment 1 - ReactJS app.

Name: Mark Ryan

## Overview

This repository contains my Web App Development 2 assignment 1. It is built off of the react-movie-labs I did as part of the module. It is launched with "npm start" in the following folder: D:\webappdev2\Assignment1\TMDB-React-Assignment1\movies and is hosted locally.

It is a movie fan application built off of the TMDB (The Movie DataBase) API. I used fetches to the API to access the lists of movies by category and functions such as search by name and favouriting. 


## Features

+ Made the favouriting system functional.
+ Made filter movie component's search functional (could not figure out genre filtering)
+ Added multiple new API endpoints, made the search function work independently for each. Eg when you use earch bar in Trending Movies, it only searches through movies in that page.
+ Made changes to css like background colors and images.
+ Changed the site header to include a drop down button instead of having multiple buttons along the menu bar for navigation.
+ Added a movie recommendations section to movie details page.
+ Could not figure out how to search by actors or connect actors to movies.
+ Could not figure out how to use Firebase or pagination.

## API endpoints
 + Route path="/movies/latest" 
 + Movie Review Page: /reviews/:id" 
 + Top Rated Movies Page="/movies/top_rated" 
  Favourite Movies Page="/movies/favorites" 
+ Movies Now Playing in Cinema Page="/movies/now_playing" 
+ Recommended Movies: "/movies/:id/recommendations"
+ Upcoming Movies Page="/movies/upcoming" 
+ The Home Page:="/"  
 + Trending Movies Page:="/movies/trending" 

## Independent Learning
+ Used StackOverFlow for troubleshooting and guidance.
+ Used ChatGPT for troubleshooting e.g explaining errors I received in understandable terminology and telling me where the errors are and how to fix them.
+ Used https://www.rapidtables.com/web/color/RGB_Color.html for RGB values when doing CSS. 
+ Used ChatGPT to help get search function in D:\webappdev2\Assignment1\TMDB-React-Assignment1\movies\src\components\filterMoviesCard component to only search movies exclusive to each page. 
+ 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

