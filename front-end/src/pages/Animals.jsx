import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Animals = () => {
    const [animals, setAnimals] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchAnimals = async () =>{
            try{
                const response = await fetch('http://127.0.0.1:8000/api/allanimals/');
                if (!response.ok){
                    throw new Error (`Http Error! status: ${response.status}`)

                }
                const data = await response.json();
                setAnimals(data);

            }
            catch(err){
                console.error(err);
                setError('Failed to fetch animals');

            }finally{
                setLoading(false);
            }
        };
        fetchAnimals();
    },[])
  return (
    <>
    <Navbar />
    <section className="py-24 bg-[#11100E]">
        <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-semibold text-white mb-2"> All animals</h2>
            <p className="text-lg text-gray-400 mb-12 font-light"> watch featured world animals with details</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {animals.map((animal) => (
                    <div
                    key={animal.id} // The `key` prop is crucial for list rendering.
                    className="bg-gradient-to-br from-[#0d0d0d] to-[#333333] rounded-2xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 shadow-lg"
                    >
                    <img className="w-full lg:h-56 h-32 object-cover" src={animal.image_url} alt={animal.name} />
                    <div className="p-6 text-left">
                        <h3 className="text-xl font-medium text-white mb-2">{animal.name}</h3>
                        <p className="text-gray-300 mb-4 font-light text-sm">{animal.description}</p>
                        <a
                        className="text-emerald-400 hover:text-emerald-300 font-medium group-hover:tracking-wider transition-all duration-300 text-sm" href={`/animals/${animal.id}`}>
                        Read more <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Animals
