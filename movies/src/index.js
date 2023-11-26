import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import LatestMoviesPage from './pages/LatestMoviesPage';
import SiteHeader from './components/siteHeader';
import HomePage from "./pages/homePage";
import TopRatedMoviesPage from './pages/TopRatedMoviesPage';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import MoviePage from "./pages/movieDetailsPage";
import PopularMoviesPage from './pages/PopularMoviesPage';
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import NowPlayingMoviesPage from './pages/NowPlayingMoviesPage';
import TrendingMoviesPage from './pages/TrendingMoviesPage';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600000, // 1 hour in milliseconds
      cacheTime: 3600000, // 1 hour in milliseconds
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <div style={{ border: '40px solid maroon', minHeight: '100vh', backgroundColor: '#000221', boxSizing: 'border-box', margin: 0 }}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/movies/latest" element={<LatestMoviesPage />} />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
          <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/now_playing" element={<NowPlayingMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/movies/trending" element={<TrendingMoviesPage />} />
          <Route path="/movies/popular" element={<PopularMoviesPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);