import Carousel from 'react-native-snap-carousel';

import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';

const { width } = Dimensions.get('window')

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, loading } = useMovies()
    const { top } = useSafeAreaInsets()
    
    if ( loading ) {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }

    return (
        <ScrollView>
          <View style={{ marginTop: top + 20}}>
            <View style={{ height: 440}}>
              <Carousel
                data={ nowPlaying }
                renderItem={({item}: any) => <MoviePoster movie={item} />}
                sliderWidth={ width }
                itemWidth={ 300 }
                inactiveSlideOpacity={ 0.9 }
              />  
            </View>
            {/* Popular Movies */}
           <HorizontalSlider title="Popular Movies" movies={ popular }/>
           <HorizontalSlider title="Top Rated" movies={ topRated }/>
           <HorizontalSlider title="Up Coming" movies={ upcoming }/>
          </View>
        </ScrollView>
    )
}

export default HomeScreen;
