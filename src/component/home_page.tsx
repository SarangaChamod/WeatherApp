import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
console.warn(API_KEY);


type Weather = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
}
const HomePage = () => {

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState('');
  const [weatehr, setWeather] = useState<Weather>();


  useEffect(() => {
    if (location) {
      fetchWeather();
    }

  }, [location]);


  // Request Location premission form mobile phone
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log('Location:', location);
      setLocation(location);
    })();
  }, []);


  // set location using hard coding
  const fetchWeather = async () => {

    if (!location) {
      return;
    }

    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const results = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await results.json();
    console.log(JSON.stringify(data, null, 2));
    setWeather(data);
  };

  if (!weatehr) {
    return <ActivityIndicator />
  };


  return (

    <View style={styles.container}>
      <Text style={styles.location}>{weatehr.name}</Text>
      <Text style={styles.temp}>{Math.round(weatehr.main.temp)}°C</Text>

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
})

export default HomePage;
