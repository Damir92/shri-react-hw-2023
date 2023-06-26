import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getMovies: builder.query({query: () => 'movies'}),
        getMovie: builder.query({query: (movieId) => `movie?movieId=${movieId}`}),
        getMoviesForCinema: builder.query({query: (cinemaId) => `movie?cinemaId=${cinemaId}`}),
        getCinemas: builder.query({query: () => 'cinemas'}),
        getReviews: builder.query({query: () => 'reviews'}),
        getReviewsForMovie: builder.query({query: (movieId) => `reviews?movieId=${movieId}`})
    })
})

export const { useGetMoviesQuery, useGetMovieQuery, useGetReviewsForMovieQuery } = movieApi