// CorporateCelebrations.js
// import React from 'react';

// const CorporateCelebrations = () => (
//   <div>
//     <h2>Corporate Celebrations</h2>
//     <p>Elevate your business events with our sophisticated planning services, from corporate galas to team-building activities.</p>
//     {/* Add corporate celebration details or images */}
//   </div>
// );

// export default CorporateCelebrations;

// CorporateCelebrations.js
import React, { useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

const CorporateCelebrations = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchUnsplashImages('corporate celebrations');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Corporate Celebrations</h2>
      <p>Host impactful corporate events with professional planning and execution.</p>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Corporate Celebration'} />
        ))}
      </div>
    </div>
  );
};

export default CorporateCelebrations;
