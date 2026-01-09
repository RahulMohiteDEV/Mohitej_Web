import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems] = useState(3);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  // Product categories data
  const productCategories = [
    {
      name: "Traditional Sweets",
      items: ["Gulab Jamun", "Rasgulla", "Kaju Katli", "Rasmalai", "Laddu", "Jalebi"]
    },
    {
      name: "Farsan & Namkeen",
      items: ["Fafda", "Chakri", "Khaman", "Dhokla", "Sev", "Gathiya"]
    },
    {
      name: "Festival Special",
      items: ["Diwali Gift Box", "Holi Special", "Rakhi Sweets", "Eid Special"]
    },
    {
      name: "Dry Fruits",
      items: ["Dry Fruit Mix", "Almond Barfi", "Pista Roll", "Kaju Rolls"]
    }
  ];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle Products dropdown
  const handleProductsClick = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  // Toggle mobile category expansion
  const toggleCategory = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  // Filter products based on search
  const filteredCategories = productCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  // Filter mobile products based on search
  const filteredMobileCategories = productCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.toLowerCase().includes(mobileSearchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `#products?search=${encodeURIComponent(searchQuery)}`;
      setIsProductsOpen(false);
    }
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      window.location.href = `#products?search=${encodeURIComponent(mobileSearchQuery)}`;
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <div className="bg-rose-950 border-b border-gray-200 text-white ">

      {/* Top Bar - Logo + Slider + Cart + User + Mobile Menu */}
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between py-2 md:py-3">

          {/* Mobile Menu Button - Improved Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              className="p-3 text-gray-700 hover:text-orange-600 transition-colors relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* Animated Hamburger Icon */}
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}></span>
                <span className={`w-full h-0.5 bg-white  transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}></span>
              </div>
            </button>
          </div>

          {/* Logo - Left Side (Desktop) / Center (Mobile) */}
          <div className="flex items-center lg:flex-none">
            <div className="w-40 h-16 md:w-48 md:h-20 lg:w-64 lg:h-24 flex items-center justify-center overflow-hidden">
              <img
                src="./images/LogoEng.png"
                alt="Sweet Treats Logo"
                className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Marquee Word Slider - Desktop Only */}
          <div className="hidden lg:flex flex-1 justify-center mx-8">
            <div className="relative overflow-hidden w-full max-w-2xl">
              <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                <span className="text-lg font-bold text-orange-600">Traditional Sweets</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">Fresh Farsan</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">Festival Special</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">Homemade Quality</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">25+ Years Experience</span>

                {/* Duplicate for seamless loop */}
                <span className="text-lg font-bold text-orange-600">Traditional Sweets</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">Fresh Farsan</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">Festival Special</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">Homemade Quality</span>
                <span className="text-lg font-bold text-orange-600">•</span>
                <span className="text-lg font-bold text-orange-600">25+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Cart and User Icons - Right Side */}
          <div className="flex items-center space-x-3 md:space-x-4 ">
            <button className="relative p-1 md:p-2 text-text-white hover:text-orange-600 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>

            <button className="p-1 md:p-2 text-text-white hover:text-orange-600 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop Only */}
      <div className="border-t border-gray-200 lg:border-t-0">
        <div className="container mx-auto px-4">

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 py-3">
            <a
              href="#home"
              className="text-text-white hover:text-orange-600 font-medium transition-colors py-2 border-b-2 border-transparent hover:border-orange-500"
            >
              Home
            </a>

            {/* Products Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleProductsClick}
                className="flex items-center gap-2 text-text-white hover:text-orange-600 font-medium py-2 transition-all duration-200 hover:border-b-2 hover:border-orange-500"
              >
                <span>Our Products</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Products Panel */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-3 w-[620px] bg-white rounded-2xl shadow-lg border border-gray-200 py-5 z-50">

                  {/* Let's find what you need */}
                  <div className="px-6 mb-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search your favorite sweets..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 text-sm transition-all"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Browse by Category */}
                  <div className="px-6">
                    {filteredCategories.length > 0 ? (
                      <div className="grid grid-cols-4 gap-5">
                        {filteredCategories.map((category, index) => (
                          <div key={index} className="space-y-3">
                            {/* Category Title */}
                            <h3 className="font-semibold text-orange-700 text-sm uppercase tracking-wide   pl-2 py-1">
                              {category.name}
                            </h3>

                            {/* Product List */}
                            <div className="space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href="#products"
                                  onClick={() => setIsProductsOpen(false)}
                                  className="block text-gray-700 hover:text-orange-700 text-sm py-1 px-2 hover:bg-orange-50 rounded-lg transition-all hover:translate-x-1"
                                >
                                  {item}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 mb-2">Nothing found for "{searchQuery}"</p>
                        <button
                          onClick={() => setSearchQuery('')}
                          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                        >
                          Try searching something else
                        </button>
                      </div>
                    )}
                  </div>

                  {/* See everything we offer */}
                  <div className="border-t border-gray-100 mt-6 pt-5 px-6">
                    <a
                      href="#products"
                      onClick={() => setIsProductsOpen(false)}
                      className="block text-center bg-orange-700 hover:bg-orange-900 text-white py-2.5 rounded-xl transition-colors text-sm font-semibold shadow-md hover:shadow-lg"
                    >
                      See All Products
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#about"
              className="text-text-white hover:text-orange-600 font-medium transition-colors py-2 border-b-2 border-transparent hover:border-orange-500"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="text-text-white hover:text-orange-600 font-medium transition-colors py-2 border-b-2 border-transparent hover:border-orange-500"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu - Improved Structure */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
              <div className="absolute left-0 top-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                <div className="flex flex-col h-full">

                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-gray-500 hover:text-orange-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Search */}
                  <div className="p-4 border-b border-gray-200">
                    <form onSubmit={handleMobileSearch} className="relative">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={mobileSearchQuery}
                        onChange={(e) => setMobileSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </form>
                  </div>

                  {/* Mobile Navigation Content */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-1 p-4">

                      {/* Home Link */}
                      <a
                        href="#home"
                        className="flex items-center justify-between p-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="font-medium">Home</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {/* Products Section - Expandable */}
                      <div className="border rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleCategory('products')}
                          className="flex items-center justify-between w-full p-3 text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                        >
                          <span className="font-medium">Products</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${expandedCategory === 'products' ? 'rotate-180' : ''
                              }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {expandedCategory === 'products' && (
                          <div className="bg-gray-50 border-t">
                            {/* Show filtered results if searching */}
                            {mobileSearchQuery ? (
                              filteredMobileCategories.length > 0 ? (
                                filteredMobileCategories.map((category, index) => (
                                  <div key={index} className="p-3 border-b border-gray-200 last:border-b-0">
                                    <h4 className="font-semibold text-orange-600 text-sm mb-2">{category.name}</h4>
                                    <div className="space-y-1">
                                      {category.items.map((item, itemIndex) => (
                                        <a
                                          key={itemIndex}
                                          href="#products"
                                          className="block p-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-white rounded transition-colors"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {item}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div className="p-4 text-center text-gray-500">
                                  No products found
                                </div>
                              )
                            ) : (
                              // Show all categories when not searching
                              productCategories.map((category, index) => (
                                <div key={index} className="p-3 border-b border-gray-200 last:border-b-0">
                                  <h4 className="font-semibold text-orange-600 text-sm mb-2">{category.name}</h4>
                                  <div className="space-y-1">
                                    {category.items.slice(0, 4).map((item, itemIndex) => (
                                      <a
                                        key={itemIndex}
                                        href="#products"
                                        className="block p-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-white rounded transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {item}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        )}
                      </div>

                      {/* About Link */}
                      <a
                        href="#about"
                        className="flex items-center justify-between p-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="font-medium">About Us</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {/* Contact Link */}
                      <a
                        href="#contact"
                        className="flex items-center justify-between p-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="font-medium">Contact</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add custom animations to CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 500px; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;