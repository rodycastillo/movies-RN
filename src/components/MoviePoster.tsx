import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


interface Props {
    movie: Movie,
    height?: number,
    width?: number
}


export const MoviePoster = ({ movie, height=420, width=300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    
    return (
        <View style={{
            width,
            height,
            marginHorizontal: 8
            }}>
            <View style={ styles.imgContainer }>
               <Image
                    source={{uri}}
                    style={ styles.img }
                /> 
            </View>
                     
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 7,
        flex: 1,
        elevation: 10,
    },
    img: {
        flex: 1,
        borderRadius: 18,
    }
})