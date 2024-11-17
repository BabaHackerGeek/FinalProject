// BarMitzvah.js
// import React from 'react';

// const BarMitzvah = () => (
//   <div>
//     <h2>Bar/Bat Mitzvah</h2>
//     <p>Celebrate this special milestone with a meaningful and personalized Bar or Bat Mitzvah ceremony and celebration.</p>
//     {/* Add images or content specific to Bar/Bat Mitzvah events */}
//   </div>
// );

// export default BarMitzvah;

// BarMitzvah.js
import React, { useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../../services/unsplashService';

const BarMitzvah = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchUnsplashImages('bar mitzvah');
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Bar/Bat Mitzvah</h2>
      <p>Celebrate this important milestone with elegance and tradition.</p>
      <div className="image-carousel">
        {images.map((image, index) => (
          <img key={index} src={image.urls.small} alt={image.alt_description || 'Bar/Bat Mitzvah'} />
        ))}
      </div>
    </div>
  );
};

export default BarMitzvah;
