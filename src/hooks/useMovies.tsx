import { useEffect, useState } from "react";
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[]
}

export const useMovies = () => {

    const [loading, setLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBNowResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBNowResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBNowResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBNowResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])
        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        })
        setLoading(false);
    }

    useEffect(() => {
        // Call movies
        getMovies()
    }, [])

    return {
        ...moviesState,
        loading
    }
}
