import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=7.0280&lon=79.9230&appid=d46527ddf41344446ad48150c01b1b10&units=metric';

const HomePage = () => {

  const fetchWeather = async () => { 

    console.log('Fetch Data');

    const results = await fetch(url);
    const  data = await results.json();
    console.log(JSON.stringify(data, null, 2));
  }

  useEffect(() => { 
    fetchWeather();
  }, [])
  return (
    <View>
      <Text>Content for Home Page</Text>
    </View>
  );
};

export default HomePage;
