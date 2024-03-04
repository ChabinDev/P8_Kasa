import React, { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Caroussel = ({ images, id }) => {

  // utilisation du hook useState pour gérer l'état du slide actuel
const [currentSlide, setCurrentSlide] = useState(0);

// Fonction pour passer au slide suivant
const nextSlide = () => {
  setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
};

// Fonction pour revenir au slide précédent
const prevSlide = () => {
  setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
};

return (
  
  <div className='carousel'>
    {images.length > 1 && (
        <button className='prevButton' onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
    )}
          <div className='carousel-container'>

            {/* Boucle sur le tableau d'images pour les afficher dans le Caroussel */}
            {images.map((image, index) => (
              <div className={`carousel-container-img ${currentSlide === index ? 'active' : ''}`} key={index} style={{
                position: 'absolute',
                display: 'flex',
                top: 0,
                left: 0,
                justifyContent: 'center',
                width: '100%',
                height: '415px',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 0.5s ease', zIndex: currentSlide === index ? 1 : 0
              }}>
                <img className={` settingsImg carousel-container-img-${id}-${index + 1}`} src={image} alt={`Slide ${index}`} />
                </div>
            ))}
          </div>
           
              {images.length > 1 ? (
                <Fragment>
                  <button className='nextButton' onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
                  <div className="carousel-counter">
                    {currentSlide + 1} / {images.length}
                  </div>
                </Fragment>
               ) : (
                <Fragment>
                  <button className='prevButton' style={{ visibility: 'hidden'}}><FontAwesomeIcon icon={faChevronRight} style={{ visibility: 'hidden'}} /></button>
                  <button className='nextButton' style={{ visibility: 'hidden'}}><FontAwesomeIcon icon={faChevronLeft} style={{ visibility: 'hidden'}} /></button>
                  <div className='carousel-counter' style={{ visibility: 'hidden'}}></div>
                </Fragment>
              )}
        </div>
  );
};
  
export default Caroussel