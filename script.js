// Sample product data for demonstration
const products = [
    'iPhone 14 Pro',
    'Samsung Galaxy S23',
    'MacBook Pro M2',
    'Dell XPS 13',
    'iPad Air',
    'Surface Pro 9',
    'AirPods Pro',
    'Sony WH-1000XM4',
    'Canon EOS R5',
    'Nintendo Switch OLED'
];

// DOM elements
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const searchResults = document.getElementById('searchResults');

// Search functionality
function performSearch(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '<p>Start typing to search for products...</p>';
        return;
    }

    const filteredProducts = products.filter(product => 
        product.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length > 0) {
        const resultHTML = filteredProducts
            .map(product => `<div class="product-item">${product}</div>`)
            .join('');
        searchResults.innerHTML = `
            <h3>Search Results for "${query}":</h3>
            <div class="product-list">${resultHTML}</div>
        `;
    } else {
        searchResults.innerHTML = `
            <p>No products found for "${query}". Try a different search term.</p>
        `;
    }
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(e.target.value);
    }
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    performSearch(searchInput.value);
});

// Focus management
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.transform = 'scale(1.02)';
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.transform = 'scale(1)';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    searchInput.focus();
});