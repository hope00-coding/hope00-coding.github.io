document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});







// script.js
const products = [
    {
        category: 'red',
        image: 'red-wine.jpg',
        name: 'Özel Karışım Kırmızı',
        description: 'Meşe fıçıda 18 ay dinlendirilmiş',
        price: 299.99
    },
    {
        category: 'white',
        image: 'white-wine.jpg',
        name: 'Chardonnay Beyaz',
        description: 'Taze meyve notaları ile',
        price: 249.99
    },
    {
        category: 'other',
        image: 'champagne.jpg',
        name: 'Premium Şampanya',
        description: 'Özel kutulu versiyon',
        price: 399.99
    },
    {
        category: 'red',
        image: 'merlot.jpg',
        name: 'Merlot Reserve',
        description: 'Yumuşak tanenli özel seçim',
        price: 349.99
    }
];

// DOM Elementleri
const productsWrapper = document.getElementById('productsWrapper');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearFilterBtn = document.getElementById('clearFilter');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

let activeFilter = 'all';
let currentScroll = 0;
const cardWidth = 220; // Kart genişliği + gap

// Ürünleri Oluşturma
function createProductCards() {
    productsWrapper.innerHTML = '';
    const filteredProducts = activeFilter === 'all' 
        ? products 
        : products.filter(p => p.category === activeFilter);
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" class="product-image" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price.toFixed(2)} TL</div>
                <button class="buy-btn">Sepete Ekle</button>
            </div>
        `;
        productsWrapper.appendChild(card);
    });
}

// Filtre Güncelleme
function updateFilter() {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${activeFilter}"]`).classList.add('active');
    clearFilterBtn.classList.toggle('visible', activeFilter !== 'all');
    createProductCards();
    productsWrapper.scrollLeft = 0; // Filtre değişince scroll'u sıfırla
}

// Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        updateFilter();
    });
});

clearFilterBtn.addEventListener('click', () => {
    activeFilter = 'all';
    updateFilter();
});

scrollLeft.addEventListener('click', () => {
    productsWrapper.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    productsWrapper.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
});

// İlk Yükleme
document.addEventListener('DOMContentLoaded', () => {
    createProductCards();
    updateFilter();
});
