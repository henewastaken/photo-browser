import { Routes, Route } from 'react-router-dom';
import { PhotoDetail } from './components/PhotoDetail/PhotoDetail';
import { MenuBar } from './components/MenuBar/MenuBar';
import { AlbumsView } from './components/AlbumView/AlbumView';
import { AlbumDetailWrapper } from './components/Routes/AlbumDetailsWrapper';
import { PhotoViewWrapper } from './components/Routes/PhotoViewWrapper';

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route
          path='/'
          element={<h1>Welcome to photo viewer</h1>}
        />
        <Route
          path='/photos'
          element={<PhotoViewWrapper />}
        />
        <Route
          path='/photo/:id'
          element={<PhotoDetail />}
        />
        <Route
          path='/albums'
          element={<AlbumsView />}
        />
        <Route
          path='/albums/:id'
          element={<AlbumDetailWrapper />}
        />
      </Routes>
    </>
  );
}

export default App;
