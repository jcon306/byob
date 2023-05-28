import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Board from '../Board/Board';
import './Build.css'

const Build = () => {
  return (
    <div className='byobContainer'>
        <SideBar />
        <Board />
    </div>
  )
};

export default Build;
