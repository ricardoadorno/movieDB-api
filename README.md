# MovieDB API Project

This project that uses the MovieDB API to display access a vast collection of movie data, including titles, synopses, ratings, and more. It is built using React, Vite, React-Query, Sass, and React-Router-Dom.

**Preview: <https://movie-db-project-ten.vercel.app//>**

## Features

- Search movies and TV shows
- Responsive design that works well on desktop and mobile devices

### Future Implementations

- Expand on show details page
- Infine scroll
- Add a watchlist
- Add AI recommendations, with OpenAI API

The app contains the following pages:

- Home page: Displays trending movies and TV shows.
- Search page: Allows you to search for movies and TV shows by title and filter by genre.
- Movie/TV show details page: Displays information about a specific movie or TV show, including cast, crew, and reviews.

## Technologies

This project uses the following technologies:

- React
- Vite
- React-Query
- Sass
- React-Router-Dom

## Installation

To run this project locally, follow these steps:

1. Clone this repository
1. Install dependencies by running `npm install` in the project directory
1. Create a .env file in the project directory and add your personal MovieDB API key like this:

   ```html
   VITE_MOVIEDB_API_KEY = your_api_key_here
   ```

   _You can get a free API key by signing up for a free account at <https://www.themoviedb.org/account/signup>"_

1. Run `npm run dev` start to start the development server

1. Once the development server is running, you can access the app by visiting `http://localhost:5173` in your web browser.

## Credits

![Movie DB Logo](https://raw.githubusercontent.com/zisiszikos/the-movie-db-example/master/tmdb.png)

## License

MIT License

Copyright (c) 2023 Ricardo Castro Adorno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
