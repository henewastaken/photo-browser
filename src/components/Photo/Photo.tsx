import type React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePhotoContext } from '../../context/PhotoProvider';
import type { PhotoType } from '../../helpers';
import './Photo.css';

export const Photo: React.FC<PhotoType> = ({ id, title, albumId, url, thumbnailUrl }) => {
  const navigate = useNavigate();
  const { setSelectedPhoto } = usePhotoContext();

  const handlePhotoClick = () => {
    setSelectedPhoto({
      id,
      title,
      albumId,
      url,
      thumbnailUrl,
    });
    navigate(`/photo/${id}`);
  };

  return (
    <div className='photo'>
      {id}
      {/* Using photo id as random seed */}
      <button onClick={handlePhotoClick}>
        <img
          src={thumbnailUrl}
          alt={title}
        />
      </button>
      {/* <p>TITLE: {title}</p> */}
    </div>
  );
};
