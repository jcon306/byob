// import React from 'react'
// import './Board.css'

// const Board = () => {
//     return (
//         <div>
//             <div className='defaultBoard'></div>
//         </div>
//     )
// }

// export default Board

import React from 'react';
import './Board.css'

const Board = () => {
  const handleDrop = (event) => {
    event.preventDefault();
    const item = event.dataTransfer.getData('text/plain');
    const draggedImage = document.getElementById(item);
    const clonedImage = draggedImage.cloneNode(true);
    event.target.appendChild(clonedImage);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className='defaultBoard' onDrop={handleDrop} onDragOver={handleDragOver}>
    </div>
  );
};

export default Board;
