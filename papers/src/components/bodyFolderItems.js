import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import '../assets/stylesheets/bodyFolderItems.css';

export default function ({ folderName }) {
  return (
    <div style={{ padding: "10px 35px 10px 0" }}>
      <div className='folderItemsContainer'>
        <FolderIcon />
        <div className='folderItem'>
          {folderName}
        </div>
      </div>
    </div>
  )
}
