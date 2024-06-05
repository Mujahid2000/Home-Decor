

const Reviews = () => {

    const reviews = [
        {
          name: "Nico Jones",
          text: "Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.",
        },
        {
          name: "Tracy Willis",
          text: "What an amazing shopping experience! I tried other jewelers and didn't find anything I liked. Thank you so much.",
        },
        {
          name: "Susana Santos",
          text: "Great quality, and showed they can work through a problem and maintain excellent customer service!!",
        },
      ];
    return (
        <div>
            <div className="max-w-7xl mx-auto py-8 px-3">
      <h2 className="text-4xl text-pink-600 font-bold text-left mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border border-gray-500 rounded-lg ">
            <p className="text-4xl text-pink-500 font-semibold mb-2">“</p>
            <p className="mb-4 text-xl">{review.text}</p>
            <p className="font-bold text-xl text-center flex items-baseline">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Reviews;