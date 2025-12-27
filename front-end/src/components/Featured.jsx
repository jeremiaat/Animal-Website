import React, { useState, useEffect } from "react";

export default function Featured() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/animals/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAnimals(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch animals");
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  if (loading) return <p className="text-white text-center py-8">Loading...</p>;
  if (error) return <p className="text-red-500 bg-black text-center py-8">Sorry, {error}. Refresh the page</p>;
  if (!animals || animals.length === 0) return <p className="text-gray-400 text-center py-8">No animals found.</p>;

  return (
    <section className="py-24 bg-[#11100E]">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-white mb-2">Featured Creatures</h2>
        <p className="text-lg text-gray-400 mb-12 font-light">
          Get up close and personal with some amazing animals.
        </p>

        {/* The grid container should be outside the map function. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.map((animal) => (
            <div
              key={animal.id} // The `key` prop is crucial for list rendering.
              className="bg-gradient-to-br from-[#0d0d0d] to-[#333333] rounded-2xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <img className="w-full h-56 object-cover" src={animal.image_url} alt={animal.name} />
              <div className="p-6 text-left">
                <h3 className="text-xl font-medium text-white mb-2">{animal.name}</h3>
                <p className="text-gray-300 mb-4 font-light text-sm">{animal.description}</p>
                <a
                className="text-emerald-400 hover:text-emerald-300 font-medium group-hover:tracking-wider transition-all duration-300 text-sm" href={`/animals/${animal.id}`}>
                  Discover more <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
