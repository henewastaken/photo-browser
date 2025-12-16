import { useEffect, useState } from 'react';
import { api } from '../../api';
import { ApiStatuses, useAsyncData, type AlbumType } from '../../helpers';
import './AlbumView.css';
import { useNavigate } from 'react-router-dom';

export const AlbumsView = () => {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const loadAlbums = () => api.fetchAlbums('1');
  const [fetchedAlbums, isAlbumsLoading, apiStatus] = useAsyncData<AlbumType[]>(loadAlbums, [], []);

  useEffect(() => {
    if (apiStatus === ApiStatuses.SUCCESS && fetchedAlbums.length > 0) {
      setAlbums(fetchedAlbums);
    }
  }, [fetchedAlbums, apiStatus]);

  const handleAlbumClick = (albumId: number) => {
    navigate(`/albums/${albumId}`);
  };

  return (
    <>
      {isAlbumsLoading ? (
        <div>Loading photos...</div>
      ) : (
        <div className='albumsContainer'>
          <div className='header'>
            <h1>Your Albums</h1>
          </div>
          {apiStatus === ApiStatuses.INTERNAL_SERVER_ERROR && <p style={{ color: 'red' }}>{'error'}</p>}
          <div
            id='albums-grid'
            className='albumsGrid'
          >
            {albums.map((album) => (
              <button
                onClick={() => handleAlbumClick(album.id)}
                key={album.id}
              >
                {album.id}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
