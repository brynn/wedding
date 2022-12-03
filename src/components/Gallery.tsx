import React from 'react';
import ImageGallery from 'react-image-gallery';
import {NUM_IMAGES} from '../consts';

const Gallery: React.FC = () => {
  const images = [];
  for (let i = 1; i <= NUM_IMAGES; i++) {
    images.push({
      original: `/img/ab${i}.jpg`,
    });
  }

  return (
    <div className="photo">
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        showNav={false}
        lazyLoad={true}
      />
    </div>
  );
};

export default Gallery;
