# React Native Weather Application

This is a simple weather application built with React Native that provides current weather information based on the user's location.

## Features

- **Current Weather:** Display current weather details including temperature, humidity, wind speed, etc.
- **Location-based:** Automatically fetches the user's location to provide local weather information.
- **Responsive Design:** Works well on various screen sizes.

## Installation

1. Clone the repository: `https://github.com/SarangaChamod/WeatherApp.git`
2. Navigate to the project directory: `cd WeatherApp`
3. Install dependencies: `npm install` or `yarn install`

## Usage

### Running the App

- **iOS:** Run `npx react-native run-ios` or open `ios/WeatherApp.xcworkspace` in Xcode and run the project.
- **Android:** Run `npx react-native run-android` or open the project in Android Studio and run the app.

### Configuration

To use the weather API, you need to obtain an API key from OpenWeatherMap.

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Add your API key to the `.env` file: `EXPO_PUBLIC_API_KEY= your_api_key_here`


## Technologies Used

- **React Native:** Frontend framework for building mobile applications.
- **Expo:** Toolchain for developing and building React Native apps.
- **OpenWeatherMap API:** Used for fetching weather data.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React Native Community:** For the amazing tools and libraries.
- **OpenWeatherMap:** For providing weather data through their API.



