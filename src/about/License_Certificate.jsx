import React from 'react'

const License_Certificate = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Simple Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Accreditations
        </h2>
        <p className="text-gray-500 mb-12">
          Government Registered • Fully Certified
        </p>

        {/* Only Images Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          
          {/* FSSAI Manufacturing */}
          <div className="text-center">
            <img 
              src="/images/fssai-logo.png" 
              alt="FSSAI Manufacturing"
              className="h-20 md:h-24 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x100?text=FSSAI";
              }}
            />
          </div>
          
          {/* FSSAI Retail */}
          <div className="text-center">
            <img 
              src="/images/fssai-logo.png" 
              alt="FSSAI Retail"
              className="h-20 md:h-24 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x100?text=FSSAI";
              }}
            />
          </div>
          
          {/* Udyam */}
          <div className="text-center">
            <img 
              src="/images/Logo.png" 
              alt="Udyam Registration"
              className="h-20 md:h-24 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x100?text=Udyam";
              }}
            />
          </div>
          
        </div>

        {/* Optional: Small line at bottom */}
        <div className="w-24 h-px bg-gray-200 mx-auto mt-12"></div>
        
      </div>
    </div>
  )
}

export default License_Certificate