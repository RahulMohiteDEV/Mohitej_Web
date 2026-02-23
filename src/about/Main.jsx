import React from 'react';
import { 
  FaPlay, 
  FaShare, 
  FaRupeeSign, 
  FaStar, 
  FaRegClock,
  FaLeaf,
  FaHandHoldingHeart,
  FaAward,
  FaUsers,
  FaStore,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaQuoteLeft,
  FaQuoteRight
} from 'react-icons/fa';

const Main = () => {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          
  {/* Story Section - Two Column */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block">
                Our Journey
              </span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                From a Home Kitchen <br />to Your Heart
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in <span className="font-semibold text-red-600">2017</span>, Mohite Farasan And Sweets began as a humble 
                  home-based venture driven by passion, dedication, and a deep respect 
                  for traditional Indian flavors. What started in a small home kitchen 
                  has today grown into a trusted local brand known for authenticity, 
                  quality, and consistency.
                </p>
                
                <p className="relative pl-8 border-l-4 border-red-600 italic text-gray-700">
                  <FaQuoteLeft className="absolute -left-2 top-0 text-red-600 text-xl opacity-50" />
                  Our foundation is built on three core principles — Purity, Tradition, 
                  and Customer Satisfaction. These values guide everything we do.
                  <FaQuoteRight className="absolute right-0 bottom-0 text-red-600 text-xl opacity-50" />
                </p>
                
                <p>
                  We specialize in authentic Indian sweets and farsan, prepared using 
                  time-honored recipes while maintaining modern hygiene and food safety 
                  standards. Every product is crafted using carefully selected raw materials, 
                  ensuring consistent taste, freshness, and premium quality.
                </p>
                
                <p>
                  Unlike mass production brands, we focus on maintaining originality and 
                  handcrafted excellence. Our goal is not just to sell sweets, but to 
                  preserve the emotional and cultural value attached to Indian celebrations.
                </p>
                
                <button className="group inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all">
                  <span>Explore Our Story</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                  <div className="text-3xl font-bold text-red-600 mb-2">2017</div>
                  <div className="text-sm text-gray-500">Year Founded</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-sm text-gray-500">Products</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                  <div className="text-3xl font-bold text-red-600 mb-2">10k+</div>
                  <div className="text-sm text-gray-500">Happy Families</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition">
                  <div className="text-3xl font-bold text-red-600 mb-2">4.9</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
              
              {/* Founder Image Placeholder */}
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img 
                  src="/images/LogoEng.png" 
                  alt="Company logo" 
                  className="w-full h-full object-cover"
                />
                
              </div>
            </div>
          </div>

         

          {/* Signature Line */}
          <div className="text-center mt-16">
            <p className="text-2xl font-light italic text-gray-400">
              "From our home kitchen to your heart — since 2017"
            </p>
            <div className="w-24 h-px bg-gray-200 mx-auto my-6"></div>
            <p className="text-sm text-gray-400">
              Mohite Farasan & Sweets • Taste the Tradition. Feel the Care.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Main;