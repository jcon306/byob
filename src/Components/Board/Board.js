import React from 'react';
import defaultBoard from '../../Assets/defaultBoard.jpg'
import './Board.css'

const Board = () => {
  const handleDrop = (event) => {
    event.preventDefault();
    const item = event.dataTransfer.getData('text/plain');
    const draggedImage = document.getElementById(item);
  
    // Create a new image element
    const droppedImage = new Image()
    droppedImage.src = draggedImage.src
    droppedImage.className = 'droppedImage'
    draggedImage.draggable=true
  
    // Append the dropped image to the event target
    event.target.appendChild(droppedImage);
  };
  

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <img 
        className='defaultBoard'
        src={defaultBoard}
        alt='Empty Cheese Board'
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
        draggable={false}
        >
        
      </img>  
    </div>
  );
};

export default Board;
