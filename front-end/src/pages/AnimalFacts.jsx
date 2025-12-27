import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const AnimalFacts = () => {
    const [facts, setfacts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(()=> {
        const fetchFacts = async () =>{
            try{
                const response = await fetch('http://127.0.0.1:8000/api/allfacts');
                if(!response.ok){
                    throw new Error (`Http Error! status; ${response.status}`)
                }
                const data =  await response.json();
                setfacts(data);
            }
            catch(err){
                console.error(err)
                setError('Failed to fetch facts')
            }finally{
                setLoading(false)
            }
        };
        fetchFacts();

    },[])

    
  return (
    <>
    <Navbar />
        <section className='py-24 bg-[#11100e]'>
            <div className="container mx-auto text-center px-4">
                <div className='p-4'>
                    <h2
                    className='text-gray-300 text-3xl font-sans font-semibold p-2'
                    >ANIMAL FACTS</h2>
                    <p
                    className='text-gray-500'
                    >You can read incredible facts about animals here</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facts.map((fact)=> (
                        <div className="relative group overflow-hidden rounded-xl h-80">
                                    <img
                                      src={fact.image_url}
                                      alt="Mammals"
                                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="text-left absolute inset-0 bg-gradient-to-t from-black/80 to-transparent py-40 px-2">
                                      <h4
                                    className='text-gray-300 mb-4 font-light text-lg'
                                    >{fact.name}</h4>
                                    
                                    <h3
                                    className='text-xl font-medium text-gray-100 mb-2'
                                    >{fact.fact}</h3>
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

export default AnimalFacts
