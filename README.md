# MovieSite

MovieSite is a web application that allows users to browse and explore popular and top-rated movies. The application fetches data from the [TMDb API](https://www.themoviedb.org/documentation/api) to display the latest movies, their details, and ratings.

## Table of Contents

- [MovieSite](#moviesite)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
    - [`Card`](#card)
    - [`Footer`](#footer)
    - [`Hero`](#hero)
    - [`Home`](#home)
    - [`Loader`](#loader)
    - [`MovieDetails`](#moviedetails)
    - [`App`](#app)
    - [`main`](#main)
  - [API](#api)
  - [License](#license)

## Features

- Display featured movies with posters and ratings
- View detailed information about each movie
- Search for movies
- Responsive design for various screen sizes

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Siddami/movie-app.git
    cd movie-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your TMDb API key:

    ```sh
    REACT_APP_API_KEY=your_api_key_here
    ```

4. Start the development server:

    ```sh
    npm start
    ```

## Usage

Open your browser and navigate to `http://localhost:3000` to see the application in action. Use the search bar to look for specific movies or click on a movie card to view detailed information.

## Components

### `Card`

Displays a grid of movie cards with the movie poster, title, release date, and ratings.

### `Footer`

Contains links to social media profiles, terms of use, privacy policy, and other footer information.

### `Hero`

Shows the hero section with a featured movie, including its poster, title, ratings, and a brief description.

### `Home`

The main page that includes the `Hero`, `Card`, and `Footer` components. It fetches the top-rated movies from the TMDb API.

### `Loader`

A loading spinner component displayed while data is being fetched.

### `MovieDetails`

Displays detailed information about a selected movie, including its overview, genre, runtime, ratings, and popularity.

### `App`

Defines the routes for the application. It includes routes for the home page and movie details page.

### `main`

Entry point of the React application. It renders the `App` component wrapped in a `BrowserRouter`.

## API

This application uses the TMDb API to fetch movie data. Ensure you have a valid API key from [TMDb](https://www.themoviedb.org/documentation/api).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Developed by Abdulkareem Yetunde Siddiqat.

Feel free to contribute to this project by opening issues or submitting pull requests.