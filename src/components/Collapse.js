import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ content, name, className, onClick }) => {

     // Utilisation du hook useState pour gérer l'état du collapse (ouvert/fermé) 
    const [isCollapsed, setIsCollapsed] = useState(true);

     // Fonction pour basculer l'état du collapse (passer de fermé à ouvert)
    const toggleCollapse = () => {
         setIsCollapsed(!isCollapsed);
     };

  return (
    <div className={className}>
      <div className='collapse-title'>
            {/* Affichage du nom du collapse */}
            <p>{name}</p>

            {/* Bouton pour switcher (ouvert / fermé) */}
            <button onClick={toggleCollapse} className={isCollapsed ? 'collapsed' : 'expanded'}>
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
      </div>
      <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        {!isCollapsed && (
            <div className='content-equip'>{content}</div>
            )}
      </div>
    </div>
  );
};

export default Collapse
