// Birthdays.js
// import React from 'react';

// const Birthdays = () => (
//   <div>
//     <h2>Birthdays</h2>
//     <p>Make birthdays extraordinary with customized themes, decorations, and a memorable celebration tailored to the guest of honor.</p>
//     {/* Add images or birthday-specific details */}
//   </div>
// );

// export default Birthdays;

// Birthdays.js
import React, { useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

const Birthdays = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchUnsplashImages('birthday event');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Birthdays</h2>
      <p>Make your birthday celebrations unforgettable with our custom event services.</p>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Birthday Event'} />
        ))}
      </div>
    </div>
  );
};

export default Birthdays;
