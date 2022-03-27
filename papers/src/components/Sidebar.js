import React from 'react';
import NewFile from './NewFile';
import SidebarItems from './SidebarItems';
import '../assets/stylesheets/Sidebar.css';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StorageIcon from '@material-ui/icons/Storage';
const Sidebar = () => {
  return (
    <div className='sideBar' >
      <NewFile />
      <div className='sideBar__ItemsContainer'>
        <SidebarItems arrow icon={(<InsertDriveFileIcon />)} label={'Drive'} />

        <SidebarItems icon={(<QueryBuilderIcon />)} label={'Recent'} />

        <SidebarItems icon={(<StorageIcon />)} label={'Storage'} />

      </div>


    </div>
  )
}

export default Sidebar;
