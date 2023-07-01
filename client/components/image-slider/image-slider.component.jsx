import React, { useState, useEffect } from 'react';
import { imagesRef } from '../../firebase/firebase';
import { listAll,getDownloadURL } from 'firebase/storage';
const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    listAll(imagesRef)
    .then((result) => {
      const promises = result.items.map((imageRef) => getDownloadURL(imageRef));
      Promise.all(promises)
        .then((urls) => setImageUrls(urls))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}, []);
  
  return (
    <div className='gallery'>

      {imageUrls.map((url) => (
        <img key={url} src={url} alt="gallery" />
      ))}
    </div>
  );
};

export default ImageGallery;
