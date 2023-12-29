import { View, Text } from 'react-native'
import React from 'react'
import { WeatherForecast } from '../Pages/home_page';

const ForecastItem = ({ forecast }: { forecast: WeatherForecast }) => {
    return (
        <View>
            <Text>{forecast.main.temp}</Text>
        </View>
  )
}

export default ForecastItem;