import type React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuBar.css';

export const MenuBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className='menubar'
      id='menu-bar'
    >
      <button
        id='photos-nav-button'
        onClick={() => handleNavigation('/photos')}
      >
        Photos
      </button>
      <button
        id='albums-nav-button'
        onClick={() => handleNavigation('/albums')}
      >
        Albums
      </button>
      <h2 className='text'>Photo Browser</h2>
    </div>
  );
};
