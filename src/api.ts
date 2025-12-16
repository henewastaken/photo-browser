import type { AlbumType, PhotoType } from './helpers';

export const api = {
  async fetchPhotos(page: number = 1, perPage: number): Promise<PhotoType[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${perPage}`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    const data: PhotoType[] = await response.json();

    const fixedData = data.map((photo) => ({
      ...photo,
      url: `https://picsum.photos/seed/${photo.id}/300/300`,
      thumbnailUrl: `https://picsum.photos/seed/${photo.id}/50/50`,
    }));

    return fixedData;
  },
  async fetchAlbums(userId: string): Promise<AlbumType[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }
    const data: AlbumType[] = await response.json();

    return data;
  },
  async fetchPhotosByAlbum(albumId: string, page: number = 1, perPage: number): Promise<PhotoType[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_page=${page}&_limit=${perPage}`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos by album');
    }

    const data: PhotoType[] = await response.json();

    console.log(data.length);

    if (data.length > 0) {
      const fixedData = data.map((photo) => ({
        ...photo,
        url: `https://picsum.photos/seed/${photo.id}/300/300`,
        thumbnailUrl: `https://picsum.photos/seed/${photo.id}/50/50`,
      }));

      return fixedData;
    }
    return [];
  },
};
