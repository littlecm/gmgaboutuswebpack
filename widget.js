import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './app/component'; // Adjust the path as needed
import './app/styles.css'; // Assuming your styles are set up to be importable like this

function renderWidget(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const dealership = container.getAttribute('data-dealership'); // Get the dealership attribute
        ReactDOM.render(<AboutUs dealership={dealership} />, container); // Pass the dealership prop
    } else {
        console.error('Container not found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderWidget('about-us-container');
});

// Optionally export the render function for manual initialization
export { renderWidget };
