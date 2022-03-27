import React from 'react';
import BodyFolderItems from './bodyFolderItems';
import '../assets/stylesheets/Body.css'

export default function Body() {
    return (
        <div style={{ width: "80%", marginRight: "auto" }}>
            <div className='folderHead'>
                Folders
            </div>
            <div className='folderContainer'>
                <BodyFolderItems folderName={'something'} />
                <BodyFolderItems folderName={'something'} />
                <BodyFolderItems folderName={'something'} />
                <BodyFolderItems folderName={'something'} />
                <BodyFolderItems folderName={'something'} />
                <BodyFolderItems folderName={'something'} />
                <BodyFolderItems folderName={'something'} />
                <BodyFolderItems folderName={'something'} />
            </div>
        </div>
    )
}
