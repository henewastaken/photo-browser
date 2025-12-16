import { api } from '../../api';
import { ListView } from '../ListView/ListView';
import { Photo } from '../Photo/Photo';

export const PhotoViewWrapper = () => {
  return (
    <ListView
      title='Your photos'
      fetchData={api.fetchPhotos}
      renderItem={(photo) => <Photo {...photo} />}
      itemKey={(photo) => photo.id}
    />
  );
};
