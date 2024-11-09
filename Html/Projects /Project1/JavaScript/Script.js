// JavaScript Code for Zomato-like Website

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Search Input Focus Handling
    const searchInput = document.querySelector("main input");
  
    searchInput.addEventListener("focus", function () {
      searchInput.style.backgroundColor = "#e8f5e9"; // Light green background on focus
    });
  
    searchInput.addEventListener("blur", function () {
      searchInput.style.backgroundColor = ""; // Remove background on blur
    });
  
    // Simulate Login Click
    const loginButton = document.querySelector("header ul li:nth-child(3) a");
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Login feature is under development!");
    });
  
    // Simulate Sign-up Click
    const signUpButton = document.querySelector("header ul li:nth-child(4) a");
    signUpButton.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Sign-up feature is under development!");
    });
  
    // Simulate 'Add Restaurant' Feature
    const addRestaurantButton = document.querySelector("header ul li:nth-child(2) a");
    addRestaurantButton.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Add restaurant feature coming soon!");
    });
  });
  