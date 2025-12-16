import { FormControl, InputLabel, Select, MenuItem, Pagination, type SelectChangeEvent } from '@mui/material';
import { useState, useEffect } from 'react';
import { useAsyncData, ApiStatuses, type PhotoType } from '../../helpers';
import { usePhotoContext } from '../../context/PhotoProvider';
import './ListView.css';

interface ListViewProps {
  title: string;
  fetchData: (page: number, amount: number) => Promise<PhotoType[]>;
  renderItem: (item: PhotoType) => React.ReactNode;
  itemKey: (item: PhotoType) => string | number;
  totalPaginationPages?: number;
}

export const ListView = ({ title, fetchData, renderItem, itemKey, totalPaginationPages }: ListViewProps) => {
  const [photoAmount, setPhotoAmount] = useState('25');
  const [page, setPage] = useState(1);
  const { photos, setPhotos } = usePhotoContext();

  const handleChange = (event: SelectChangeEvent) => {
    setPhotoAmount(event.target.value);
    setPage(1); // Reset to first page when changing amount
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const loadPhotos = () => fetchData(page, Number(photoAmount));
  const [fetchedPhotos, isLoading, apiStatus] = useAsyncData<PhotoType[]>(loadPhotos, [], [photoAmount, page]);

  useEffect(() => {
    if (apiStatus === ApiStatuses.SUCCESS) {
      setPhotos(fetchedPhotos as PhotoType[]);
    }
  }, [fetchedPhotos, apiStatus, setPhotos]);

  // Limit pagination page count
  // Albums have 50 photos, this is a simplification for demo purposes
  const paginationCount = totalPaginationPages ? Math.ceil(totalPaginationPages / Number(photoAmount)) : 10;

  return (
    <>
      <h1>{title}</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='photosContainer'>
          <div className='header'>
            <FormControl
              variant='outlined'
              sx={{ minWidth: 180 }}
            >
              <InputLabel
                id='photoAmount'
                variant='standard'
                htmlFor='uncontrolled-native'
              >
                Number of items
              </InputLabel>
              <Select
                labelId='photoAmount'
                id='select-id'
                value={photoAmount}
                label='Photo Amount'
                onChange={handleChange}
              >
                <MenuItem value='25'>25</MenuItem>
                <MenuItem value='50'>50</MenuItem>
                <MenuItem value='75'>75</MenuItem>
                <MenuItem value='100'>100</MenuItem>
              </Select>
            </FormControl>
          </div>
          {apiStatus === ApiStatuses.INTERNAL_SERVER_ERROR && <p style={{ color: 'red' }}>Error loading data</p>}
          <div
            id='photos-grid'
            className='photosGrid'
          >
            {photos.map((photo) => (
              <div key={photo.id}>{renderItem(photo)}</div>
            ))}
          </div>
          <Pagination
            count={paginationCount}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};
