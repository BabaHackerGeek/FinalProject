// Weddings.js
// import React from 'react';

// const Weddings = () => (
//   <div>
//     <h2>Weddings</h2>
//     <p>Our team designs breathtaking weddings that perfectly capture the beauty of your union, creating memories to last a lifetime.</p>
//     {/* Add images or wedding-specific content */}
//   </div>
// );

// export default Weddings;

// Weddings.js
import React, { useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

const Weddings = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchUnsplashImages('wedding');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Weddings</h2>
      <p>Make your wedding a day to remember with our customized planning services.</p>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Wedding Event'} />
        ))}
      </div>
    </div>
  );
};

export default Weddings;

