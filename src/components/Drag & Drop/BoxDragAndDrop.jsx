import React from 'react';


export const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }) => {
    return (
      <div
        onClick={onImageUpload}
        {...dragProps}
        className={`container-dnd center-flex ${isDragging ? 'isDragging' : ''}`}
      >
        <div className=' border border-dotted border-black h-11 pt-2 text-center'>+</div>
      </div>
    )
  }
