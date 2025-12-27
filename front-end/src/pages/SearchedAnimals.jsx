import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Fetch recommendations from backend
  const fetchResults = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8000/api/animals/?q=${searchTerm}`
      );
      setResults(response.data);
    } catch (err) {
      console.error(err);
      setResults([]);
    }
  };

  // Debounce input to avoid too many requests
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResults(query);
    }, 300); // wait 300ms after typing stops

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <section className="relative z-10 pt-28 pb-24 text-center px-4">
      <p className="text-emerald-300 text-lg mb-4">Embark on a journey into the wild</p>
      <h1 className="text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight">
        Discover the{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
          Untamed Beauty
        </span>
        <br />
        of Nature
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8 relative">
        {/* Search Icon */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
          <FaSearch className="w-4 h-4" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for your favorite animal..."
          className="w-full glassmorphism text-white placeholder-gray-400 py-2.5 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
        />

        {/* Recommendations Dropdown */}
        {results.length > 0 && (
          <ul className="absolute w-full mt-1 bg-[var(--card-background)] rounded-lg shadow-lg overflow-hidden z-10 text-left">
            {results.map((animal) => (
              <li
                key={animal.id}
                className="px-4 py-2 cursor-pointer hover:bg-[var(--primary-color)] hover:text-black transition"
                onClick={() => {
                  setQuery(animal.name);
                  setResults([]);
                }}
              >
                {animal.name} - {animal.species}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <a
          className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-medium py-2.5 px-6 rounded-full transition duration-300"
          href="/animals"
        >
          Explore Now
        </a>
        <a
          className="glassmorphism hover:bg-white/10 text-white font-medium py-2.5 px-6 rounded-full transition duration-300"
          href="#"
        >
          Watch Video
        </a>
      </div>
    </section>
  );
}
