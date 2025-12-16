# Photos viewer

Photo viewer is a React application for displaying photos and albums.
The app is using JSONPlaceholder API (https://jsonplaceholder.typicode.com/guide/) to fetch photo and album data. The API returns broken image url's so they are replaced using picsum.photos (https://picsum.photos/) random photo endpoint, using the photo id as a seed.

There are two main views, album view and photos view.
Photos view displays all photos, and album view displays all albums and by selecting album all photos belonging to the album is shown.
Clicking an image will open it's details and show a larger image (the image size is assumed for demo purposes).

Some assumptions/hardcoded values are used for this demo and the lack of backend, to keep the code simple and clean.

## Tech Stack

- **React 19**
- **TypeScript**
- **React Router**
- **Material-UI**
- **Vite**
- **Cypress**

# How to run

- make sure that npm is installed
- npm install
- npm run dev
  to run tests
- npm run cypress:open
  or
- npm run test:e2e
