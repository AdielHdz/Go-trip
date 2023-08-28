import React from 'react';

export const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }) => {
    return (
      <div
        onClick={onImageUpload}
        {...dragProps}
        className={`container-dnd center-flex ${isDragging ? 'isDragging' : ''}`}
      >
        <div className=' border border-dotted border-black h-20 flex items-center justify-center w-32  '>+</div>
      </div>
    )
  }
