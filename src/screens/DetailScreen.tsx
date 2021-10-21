import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import movieDB from '../api/movieDB';

import { MovieDBNowPlaying } from '../interfaces/movieInterface';

const DetailScreen = () => {

    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing')
            .then( res => {
                console.log(res.data.results[0].title);
            });
    }, [])

    return (
        <View>
            <Text>Detail Screen</Text>
        </View>
    )
}

export default DetailScreen;
