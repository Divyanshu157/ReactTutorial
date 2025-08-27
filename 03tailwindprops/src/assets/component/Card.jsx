// Card.jsx
function Card({ title, description, imageUrl }) {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
      />

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>

        {/* Button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
