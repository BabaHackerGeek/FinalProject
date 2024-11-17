// LuxuryEvents.js
// import React from 'react';

// const LuxuryEvents = () => (
//   <div>
//     <h2>Luxury Events in Hotels</h2>
//     <p>Host an exclusive event in a luxurious hotel setting, offering elegance, style, and impeccable service for you and your guests.</p>
//     {/* Add images or luxury event details */}
//   </div>
// );

// export default LuxuryEvents;

// LuxuryEvents.js
import React, { useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

const LuxuryEvents = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchUnsplashImages('luxury hotel events');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Luxury Events in Hotels</h2>
      <p>Indulge in luxury with our high-end event planning services for exclusive venues.</p>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Luxury Event'} />
        ))}
      </div>
    </div>
  );
};

export default LuxuryEvents;
