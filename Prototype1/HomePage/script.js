// script.js

// Function to get a dynamic greeting based on the time of the day
function getGreeting() {
    const currentTime = new Date().getHours();
    let greeting;
  
    if (currentTime < 12) {
      greeting = 'Good Morning';
    } else if (currentTime < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
  
    return greeting;
  }
  
  // Update the header with a dynamic greeting
  const header = document.querySelector('header');
  header.innerHTML += `<p>${getGreeting()}, Welcome to AyurMarg</p>`;
  
  // Update the search button click event to show a greeting alert
  function search() {
    const searchTerm = document.getElementById('searchInput').value;
  
    // Display a greeting alert with the user's input
    alert(`${getGreeting()}! You searched for: ${searchTerm}`);
  }
  
  // Add an event listener for the search button
  const searchButton = document.querySelector('button');
  searchButton.addEventListener('click', search);
  