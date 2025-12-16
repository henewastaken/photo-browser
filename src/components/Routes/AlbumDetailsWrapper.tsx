import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { ListView } from '../ListView/ListView';
import { Photo } from '../Photo/Photo';

export const AlbumDetailWrapper = () => {
  const { id: albumId } = useParams<{ id: string }>();

  return (
    <ListView
      title={`Album ${albumId} Photos`}
      fetchData={(page, amount) => api.fetchPhotosByAlbum(albumId || '0', page, amount)}
      renderItem={(photo) => <Photo {...photo} />}
      itemKey={(photo) => photo.id}
      totalPaginationPages={50}
    />
  );
};
