import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchUnsplashImages } from '../services/unsplashService';

const MarriageProposal = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchUnsplashImages("marriage proposal", 5);
      setImages(fetchedImages);
    };
    loadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h2>Marriage Proposal</h2>
      <p>Create a memorable marriage proposal with our expert event planning services, tailored to your love story.</p>
      
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} style={{ width: '100%', borderRadius: '10px' }} />
            <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>
              Photo by <a href={image.user.links.html} target="_blank" rel="noopener noreferrer">{image.user.name}</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MarriageProposal;
