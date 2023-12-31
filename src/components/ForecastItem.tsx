import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { WeatherForecast } from '../Pages/home_page';
import dayjs from 'dayjs';
import {BlurView} from 'expo-blur';

const ForecastItem = ({ forecast }: { forecast: WeatherForecast }) => {
    return (
        <BlurView intensity={30} style={styles.container}>
            <Text style={styles.temp}>{Math.round(forecast.main.temp)}°C</Text>
            <Text style={styles.date}>{dayjs(forecast.dt * 1000).format('ddd ha')}</Text>
        </BlurView>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'ghostwhite',
        padding: 10,
        aspectRatio: 9 / 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'hidden',
        borderColor:'white',
        borderWidth:StyleSheet.hairlineWidth,
        
    },
    temp: {
        fontSize: 30,
        color: 'ghostwhite',
        fontWeight: 'bold'
        

    },
    date: {
        color: 'ghostwhite',
        fontSize: 15,
        
    }
})

export default ForecastItem;