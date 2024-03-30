import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to filter products based on company
  const filterProductsByCompany = (company) => {
    const filtered = products.filter(product => product.company === company);
    setFilteredProducts(filtered);
  };

  // Function to handle search input
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query) || product.company.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="search-container">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
        <div className="company-list">
          <h3>Companies</h3>
          <ul>
            {Array.from(new Set(products.map(product => product.company))).map(company => (
              <li key={company} onClick={() => filterProductsByCompany(company)}>{company}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main-content">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;



const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-1.jpeg',
    price: 9.99,
    category: 'Furniture'
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-2.jpeg',
    price: 79.99,
    category: 'Furniture'
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-3.jpeg',
    price: 25.99,
    category: 'Furniture'
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-4.jpeg',
    price: 45.99,
    category: 'Furniture'
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image: 'https://course-api.com/images/store/product-5.jpeg',
    price: 6.99,
    category: 'Furniture'
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-6.jpeg',
    price: 69.99,
    category: 'Furniture'
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-7.jpeg',
    price: 8.99,
    category: 'Furniture'
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-8.jpeg',
    price: 21.99,
    category: 'Furniture'
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image: 'https://course-api.com/images/store/product-9.jpeg',
    price: 39.95,
    category: 'Furniture'
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-10.jpeg',
    price: 29.98,
    category: 'Furniture'
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image: 'https://course-api.com/images/store/product-11.jpeg',
    price: 10.99,
    category: 'Furniture'
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image: 'https://course-api.com/images/store/product-12.jpeg',
    price: 9.99,
    category: 'Furniture'
  },
];
