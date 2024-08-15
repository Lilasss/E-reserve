import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/flyer.jpeg';

const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => console.log(`${url} est préchargée.`);
  });
};

const Carousel = () => {
  const images = [
    { url: image1, link: '/page1' },
    { url: image1, link: '/page1' },
    { url: image1, link: '/page1' },
  ];

  React.useEffect(() => {
    preloadImages(images.map(image => image.url));
  }, [images]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-center my-10" style={{ marginTop: '100px' }}>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Rechercher un événement..."
            className="w-full h-10 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M17.65 17.65a7.5 7.5 0 1 0-10.6-10.6 7.5 7.5 0 0 0 10.6 10.6z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', paddingTop: '0px' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ padding: '0px' }}>
              <a href={image.link}>
                <div style={{
                  width: '100%',
                  height: '390px',
                  overflow: 'hidden',
                  borderRadius: '15px',
                  position: 'relative',
                  boxSizing: 'border-box',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain', // image tsy tapaka
                    }}
                  />
                </div>
              </a>
            </div>
          ))}
        </Slider>
        <style>{`
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    z-index: 1;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 24px;
    color: white;
  }

  .slick-slide {
    margin: 0px;
    padding: 0px;
  }
  
  .slick-list {
    padding: 0px !important;
  }
`}</style>

      </div>
    </>
  );
};

export default Carousel;
