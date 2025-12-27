import mammalsImg from "../assets/images/mammals.jpg";
import birdsImg from "../assets/images/birds.jpg";
import reptilesImg from "../assets/images/reptiles.jpg";
import aquaticImg from "../assets/images/aquatic.jpg";
import amphibiansImg from "../assets/images/amphibians.jpg";

export default function Categories() {
  return (
    <section className="py-20 bg-[#0A0A0A]" id="categories">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Explore the Animal Kingdom
        </h2>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Mammals */}
          <div className="relative group overflow-hidden rounded-xl h-80">
            <img
              src={mammalsImg}
              alt="Mammals"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">Mammals</h3>
            </div>
          </div>

          {/* Birds */}
          <div className="relative group overflow-hidden rounded-xl h-80">
            <img
              src={birdsImg}
              alt="Birds"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">Birds</h3>
            </div>
          </div>

          {/* Reptiles */}
          <div className="relative group overflow-hidden rounded-xl h-80">
            <img
              src={reptilesImg}
              alt="Reptiles"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">Reptiles</h3>
            </div>
          </div>

          {/* Aquatic Life */}
          <div className="relative group overflow-hidden rounded-xl h-80">
            <img
              src={aquaticImg}
              alt="Aquatic Life"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">
                Aquatic Life
              </h3>
            </div>
          </div>

          {/* Amphibians */}
          <div className="relative group overflow-hidden rounded-xl h-80">
            <img
              src={amphibiansImg}
              alt="Amphibians"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">Amphibians</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
