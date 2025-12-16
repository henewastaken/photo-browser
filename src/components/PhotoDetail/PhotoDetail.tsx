import { useParams } from 'react-router-dom';
import { usePhotoContext } from '../../context/PhotoProvider';

export const PhotoDetail = () => {
  const { id } = useParams();
  const { photos } = usePhotoContext();

  const photo = photos.find((p) => p.id === Number(id));

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <img
        src={photo.url}
        alt={photo.title}
      />
      <p>Album ID: {photo.albumId}</p>
    </div>
  );
};
