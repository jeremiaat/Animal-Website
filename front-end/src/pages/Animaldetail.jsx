// AnimalDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Helper component for displaying divided detail rows (Characteristics)
const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-white/10 py-4">
    <p className="text-white/50 text-sm">{label}</p>
    <p className="text-sm font-medium text-right">{value}</p>
  </div>
);

// Helper component for displaying taxonomy
const TaxonomyItem = ({ label, value }) => (
    <div className="py-2 border-b border-white/10 last:border-b-0">
        <span className="text-sm font-semibold text-white/50 block">{label}</span>
        <span className="text-base text-white">{value}</span>
    </div>
);


export default function AnimalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define colors
  const BG_MAIN = "bg-[#11100e]"; 
  const BG_HEADER_CONTENT = "bg-[#11100e]"; 
  const TEXT_COLOR = "text-white";
  const PRIMARY_COLOR = "bg-primary"; 

  useEffect(() => {
    // ... (Fetch logic remains the same)
    const fetchAnimal = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/animals/${id}/`);
        if (!res.ok) {
          throw new Error('Animal not found or API error.');
        }
        const data = await res.json();
        setAnimal(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load animal data.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnimal();
  }, [id]);

  // --- Conditional Renders ---
  if (loading) {
    return (
      <div className={`flex flex-col min-h-screen ${BG_MAIN} ${TEXT_COLOR} font-display items-center justify-center`}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    );
  }

  if (error || !animal) {
    return (
      <div className={`flex flex-col min-h-screen ${BG_MAIN} ${TEXT_COLOR} font-display items-center justify-center`}>
        <p className="text-2xl mb-6 text-red-400">{error || "Animal not found."}</p>
        <button 
            onClick={() => navigate('/animals')}
            className={`px-6 py-3 ${PRIMARY_COLOR} hover:opacity-90 text-gray-900 font-medium rounded-lg transition-colors`}
        >
            Back to Animals
        </button>
      </div>
    );
  }

  // --- Main Detail View (Fixed Width on Large Screens) ---
  return (
    <>
    <Navbar />
    <div className={`flex flex-col  min-h-screen ${BG_MAIN} ${TEXT_COLOR} font-display animate-fade-in`}>
      {/* 🛑 WRAPPER FOR CENTERING AND MAX-WIDTH 🛑 */}
      {/* max-w-xl is for medium screens and up, mx-auto centers it. 
         lg:max-w-3xl gives it more width on extra large screens. */}
      <div className="max-w-xl mx-auto w-full lg:max-w-full"> 

        <main className="flex-1 pb-24">
          
          {/* Fixed Header (Now contained within the max-width wrapper) */}
          

          {/* Image Section */}
          {/* We must ensure the image takes the full width of its container (max-w-3xl on desktop) */}
          <div className="relative h-96 lg:h-screen w-full">
              <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url("${animal.image_url}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
          </div>

          {/* Scrolling Content Section */}
          {/* The content container now matches the header color and stays within the max-width */}
          <div className={`p-6 -mt-10 relative ${BG_HEADER_CONTENT} rounded-t-xl shadow-2xl`}>
              
              {/* Name and Scientific Name */}
              <h2 className="text-2xl font-bold">{animal.name}</h2>
              <p className="mt-2 text-white/70 italic text-lg">{animal.scientific_name}</p>

              {/* Description */}
              <p className="mt-4 text-white/70 leading-relaxed">
                  {animal.description}
              </p>

              {/* Fun Fact */}
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/50">
                  <h3 className="text-primary text-sm font-semibold mb-1">FUN FACT 💡</h3>
                  <p className="text-white">{animal.fact}</p>
              </div>
              
              {/* Characteristics Section */}
              <div className="mt-6">
                  <h3 className="text-xl font-bold">Characteristics</h3>
                  <div className="mt-2 space-y-0 divide-y divide-white/10">
                      <DetailRow label="Diet" value={animal.diet} />
                      <DetailRow label="Size" value={animal.size} />
                      <DetailRow label="Lifespan" value={animal.lifespan} />
                      <DetailRow label="Conservation Status" value={animal.conservation_status} />
                      <DetailRow label="Continent" value={animal.continent} />
                  </div>
              </div>

              {/* Taxonomy Section */}
              <div className="mt-6">
                  <h3 className="text-xl font-bold">Taxonomy</h3>
                  <div className="mt-2 space-y-0 divide-y divide-white/10">
                      <TaxonomyItem label="Class" value={animal.animal_class} />
                      <TaxonomyItem label="Order" value={animal.order} />
                      <TaxonomyItem label="Family" value={animal.family} />
                  </div>
              </div>
              
              {/* Back Button */}
              
          </div>

        </main>
      </div>
    </div>
    <Footer />
    </>
  );
}