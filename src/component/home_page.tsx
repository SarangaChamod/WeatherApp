import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import * as Location from 'expo-location';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

// Define the structure of weather data
type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
type Weather = {
  name: string;
  main: MainWeather
};
type WeatherForecast = {
  main: MainWeather;
  dt: number;
}

const HomePage = () => {
  // State variables for location, error message, and weather data
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState('');
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<Weather[]>();
  // Fetch weather and forecast data on location change
  useEffect(() => {
    if (location) {
      fetchWeather();
      fetchForecast();
    };
  }, [location]);

  // Request Location permission from the mobile phone
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Fetch current weather based on location
  const fetchWeather = async () => {
    if (!location) {
      return;
    };

    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const results = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await results.json();
    setWeather(data);
  };

  // Fetch weather forecast based on location
  const fetchForecast = async () => {
    if (!location) {
      return;
    };
    const results = await fetch(
      `${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}&units=metric`
    );
    const data = await results.json();
    console.log(JSON.stringify(data, null, 2)); // Log forecast data
    setForecast(data.list);
  };

  // Show loading indicator while weather data is being fetched
  if (!weather) {
    return <ActivityIndicator />
  };

  // Render weather information when available
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>

      <FlatList
        data={forecast}
        horizontal
        renderItem={({ item }) =>
          <View>
            <Text>{item.main.temp}</Text>
          </View>}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    fontSize: 35,
  },
  temp: {
    fontSize: 70,
    color: 'gray'
  },
});

export default HomePage;
