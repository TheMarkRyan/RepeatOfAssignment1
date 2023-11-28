## Assignment 1 - ReactJS app.

Name: Mark Ryan

## Overview

This repository contains my Web App Development 2 assignment 1. It is built off of the react-movie-labs I did as part of the module. It is launched with "npm start" in the following folder: D:\webappdev2\Assignment1\TMDB-React-Assignment1\movies and is hosted locally.

It is a movie fan application built off of the TMDB (The Movie DataBase) API. I used fetches to the API to access the lists of movies by category and functions such as search by name and favouriting. 


## Features

+ Made the favouriting system functional. Click on heart icon on movie card to send it to favourites page.
+ Made filter movie component's search functional 
+ Implemented filtering by genre for home page. Got stuck trying to implement it in other pages (mixing genre search with exclusive page movie search). So filtering by genre is only in home page. 
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
+ Favourite Movies Page="/movies/favorites" 
+ Movies Now Playing in Cinema Page="/movies/now_playing" 
+ Recommended Movies: "/movies/:id/recommendations"
+ Upcoming Movies Page="/movies/upcoming" 
+ The Home Page:="/"  
+ Trending Movies Page:="/movies/trending" 

 ## Routing
From my routes (in my index.js (App) ):
<Routes>
          Route path="/movies/latest" element={<LatestMoviesPage />} - LatestMoviesPage.js
          Route path="/reviews/:id" element={<MovieReviewPage />} - movieReviewPage.js
          Route path="/movies/top_rated" element={<TopRatedMoviesPage />} -TopRatedMoviesPage.js
          Route path="/movies/favorites" element={<FavoriteMoviesPage />} - favoriteMoviesPage.js
          Route path="/movies/now_playing" element={<NowPlayingMoviesPage />} - NowPlayingMoviesPage.js
          Route path="/movies/:id" element={<MoviePage />} 
          Route path="/movies/:id/recommendations" element={<MovieRecommendationsPage />} - MovieRecommendationsPage.js
          Route path="/movies/upcoming" element={<UpcomingMoviesPage />} - UpcomingMoviesPage.js
          Route path="/" element={<HomePage />} 
          Route path="*" element={<Navigate to="/" />} 
          Route path="/movies/trending" element={<TrendingMoviesPage />} - TrendingMoviesPage.js
          Route path="/movies/popular" element={<PopularMoviesPage />} - PopularMoviesPage.js
        


## Independent Learning
+ Used StackOverFlow for troubleshooting and guidance. Helped me properly understand the API calls/fetching. 
+ Used ChatGPT AI tool for troubleshooting e.g explaining errors I received in understandable terminology and telling me where the errors are and how to fix them.
+ Used https://www.rapidtables.com/web/color/RGB_Color.html for RGB values when doing CSS. 
+ Used ChatGPT AI tool to help get search function in D:\webappdev2\Assignment1\TMDB-React-Assignment1\movies\src\components\filterMoviesCard component to only search movies exclusive to each page. 
+ Used Reddit thread as help to make toggle light/dark mode button. It caused me problems so I deleted it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

