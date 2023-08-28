import React from 'react';



export const ImageSelected = ({ 
    img, 
    loading, 
    onUpload, 
    onImageRemove, 
    onImageUpdate 
}) => {

  return (
    <div>
      <img className='image-selected' src={img} alt='image-selected' width={300} />
      <div className='container-buttons'>
        {
          loading
            ? <p className='loading-label'>Upload image ⏳...</p>
            : <>
              <button className='border border-neutral-400 mt-5 p-2 rounded-xl bg-iconsPurple text-white' disabled={loading} onClick={onUpload}>Accept 📤</button>
              <button  disabled={loading} onClick={() => onImageRemove(0)}>Cancel ❌</button>
            </>
        }
      </div>
    </div>
  )
}
