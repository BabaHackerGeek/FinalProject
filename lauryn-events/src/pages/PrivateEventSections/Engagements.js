// Engagements.js
// import React from 'react';

// const Engagements = () => (
//   <div>
//     <h2>Engagements</h2>
//     <p>Celebrate your engagement with an unforgettable event that reflects your style and commitment.</p>
//     {/* Add images or additional content about engagement planning services */}
//   </div>
// );

// export default Engagements;

// Engagements.js
import React, { useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

const Engagements = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchUnsplashImages('engagement');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Engagements</h2>
      <p>Celebrate your engagement with a touch of elegance and unforgettable moments.</p>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Engagement Event'} />
        ))}
      </div>
    </div>
  );
};

export default Engagements;
