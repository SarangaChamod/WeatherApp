import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { WeatherForecast } from '../Pages/home_page';
import dayjs from 'dayjs';

const ForecastItem = ({ forecast }: { forecast: WeatherForecast }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.temp}>{Math.round(forecast.main.temp)}°C</Text>
            <Text style={styles.date}>{dayjs(forecast.dt * 1000).format('ddd ha')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'ghostwhite',
        padding: 10,
        aspectRatio: 9 / 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    temp: {
        fontSize: 25,
        color: 'gray',
        // fontFamily: 'Poppins_400Regular',
        

    },
    date: {
        color: 'gray',
        fontSize: 16,
        // fontFamily: 'Poppins_400Regular',
    }
})

export default ForecastItem;