import React from 'react';
import CheeseIMG from '../../Assets/cheeseIMG.jpg'
import MeatIMG from '../../Assets/meatIMG.jpg'
import './SideBar.css'

import Draggable from 'react-draggable'

const SideBar = () => {
    const handleDragStart = (event, item) => {
      // Set the data to be transferred during the drag
      event.dataTransfer.setData('text/plain', item);
    };
  
    return (
      <div className='sidebarContainer'>
        <Draggable>
            <img
              className='defaultIMG'
              id='cheese'
              src={CheeseIMG}
              alt='Cheese'
              draggable
              onDragStart={(event) => handleDragStart(event, 'cheese')}
            />
        </Draggable>
        <Draggable>
            <img
              className='defaultIMG'
              id='meat'
              src={MeatIMG}
              alt='Meat'
              draggable
              onDragStart={(event) => handleDragStart(event, 'meat')}
            />
        </Draggable>
      </div>
    );
  };
  
  export default SideBar;
