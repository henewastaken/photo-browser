import { createContext, useContext, useState, type ReactNode } from 'react';
import type { PhotoType } from '../helpers';

interface PhotoContextType {
  photos: PhotoType[];
  setPhotos: (photos: PhotoType[]) => void;
  selectedPhoto: PhotoType | null;
  setSelectedPhoto: (photo: PhotoType | null) => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider = ({ children }: { children: ReactNode }) => {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | null>(null);

  return <PhotoContext.Provider value={{ photos, setPhotos, selectedPhoto, setSelectedPhoto }}>{children}</PhotoContext.Provider>;
};

export const usePhotoContext = () => {
  const context = useContext(PhotoContext);
  if (context === undefined) {
    throw new Error('usePhotoContext must be used within a PhotoProvider');
  }
  return context;
};
