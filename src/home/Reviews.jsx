import React from 'react'


const reviews = [
  {
    name: "Amit Shah",
    location: "Ahmedabad",
    review:
      "Amazing taste and freshness. Their sweets remind me of traditional homemade flavors.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    location: "Vadodara",
    review:
      "Best farsana quality. Hygienic and always fresh. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rakesh Mehta",
    location: "Surat",
    review:
      "Ordered for a family function. Everyone loved the taste. Will order again.",
    rating: 4,
  },
];

const Reviews = () => {
  return (
   <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          What Our Customers Say
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm mb-4">
                “{item.review}”
              </p>

              {/* Customer Info */}
              <div className="border-t pt-3">
                <h4 className="font-semibold text-sm">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reviews
