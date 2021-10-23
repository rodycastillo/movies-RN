import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigator/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const { height } =Dimensions.get('window')


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({ route, navigation}: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const {isLoading, movieFull, cast } = useMovieDetails(movie.id)

    return (
        <ScrollView>
          <View style={ styles.imgContainer }>
            <View style={ styles.imgBorder }>
              <Image
                source={{ uri }}
                style={styles.posterImg}
              />
            </View>
            
          </View>
          
          <View style={ styles.marginContainer }>
             <Text style={ styles.subTitle }>{ movie.original_title }</Text>
             <Text style={ styles.title }>{ movie.title }</Text>
          </View>

          {
                isLoading ? <ActivityIndicator
                size={30}
                color="grey"
                style={{marginTop: 30}}
             /> 
             : <MovieDetails movieFull={movieFull!}  cast={ cast }/>

          }
        
            {/* Button Close */}
            <View style={ styles.btnBack }>
                <TouchableOpacity
                    onPress={ () => navigation.pop() }
                >
                    <Icon
                        color="white"
                        name="arrow-back-outline"
                        size={ 60 }
                    />
                </TouchableOpacity>
            </View>
         
        </ScrollView>
        
    )
}

export default DetailScreen;


const styles = StyleSheet.create({
    imgContainer: {
        width: '100%',
        height: height * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 7,
        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    imgBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImg: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnBack: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    }
})