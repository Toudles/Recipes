// Homepage.js
import React, { useState } from 'react';
import './index.css';
import brownie from './assets/brownie.png';

// Recipe data with image paths
const recipes = {
  brownie: {
    title: 'Gooey Fudgy Brownies',
    ingredients: [
      'Unsalted Butter: 1/2 cup (113.5g)',
      'Oil: 1 tablespoon (14g)',
      'Instant Espresso Powder (optional): 1 tablespoon (12g)',
      'Brown Sugar: 1/2 cup (110g)',
      'Sugar: 2/3 cup (134g)',
      'Eggs: 2',
      'Flour: 1/2 cup (60g)',
      'Cocoa Powder: 1/2 cup (50g)',
      'Salt: 1/2 teaspoon'
    ],
    optionalFrosting: [
      'Unsalted Butter (room temp): 1 cup (227g)',
      'Powdered Sugar: 3 cups (360g)',
      'Cocoa Powder: 1/4 cup (25g)',
      'Milk or Cream: 3 tablespoons (45g)',
      'Vanilla Extract: 2 teaspoons',
      'Salt: 1/2 teaspoon',
      'Chocolate Sprinkles or Mini Chocolate Chips (for topping)'
    ],
    description: 'Rich, fudgy brownies that are a chocolate lover\'s dream. Perfect for a sweet treat or dessert!',
    imgSrc: './assets/brownie.png' // Ensure this path is correct
  }
};

function Homepage() {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (recipe) => {
    setModalContent(recipe);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <div className="navbar">
        <a href="/" className="nav-link">Home</a>
        <a href="/dessert" className="nav-link">Dessert</a>
        <a href="/breakfast" className="nav-link">Breakfast</a>
      </div>

      <div className="petals"></div>
      <div className="welcome-section">
        <h1>Welcome to My Virtual Cookbook!</h1>
        <p>Explore a variety of recipes including appetizers, main courses, and desserts.</p>
      </div>
      <div className="recent-recipes-box">
        <div className="recent-recipes">
          <h2>Recent Recipes</h2>
          <div className="recipes-container">
            <div className="recipe">
              <img src={brownie} alt="Brownie" />
              <a href="#" onClick={() => openModal(recipes.brownie)}>Gooey Fudgy Brownies</a>
            </div>
            {/* Add more recent recipes as needed */}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
            <h3>Ingredients:</h3>
            <ul>
              {modalContent.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {modalContent.optionalFrosting && (
              <>
                <h3>Optional Frosting:</h3>
                <ul>
                  {modalContent.optionalFrosting.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
