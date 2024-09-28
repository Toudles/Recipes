import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import pancake from './assets/pancake.png'; // Example image
import omelette from './assets/omelette.png'; // Example image

function Breakfast() {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/dessert">Dessert</a>
        <a className="nav-link" href="/breakfast">Breakfast</a>
      </nav>
      
      <div className="petals"></div>
      <div className="welcome-section">
        <h1>Here is a recipe for breakfast!</h1>
      </div>
      <div className="recent-recipes-box">
        <div className="recent-recipes">
          <div className="recipes-container">
            <div className="recipe">
              <img src={pancake} alt="Pancake" />
              <a onClick={() => openModal('Coming Soon')}>Fluffy Pancakes</a>
            </div>
            <div className="recipe">
              <img src={omelette} alt="Omelette" />
              <a onClick={() => openModal('Coming Soon')}>Cheese Omelette</a>
            </div>
            {/* Add more breakfast recipes as needed */}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <h2>{modalContent}</h2>
            {/* You can add more detailed content here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Breakfast;
