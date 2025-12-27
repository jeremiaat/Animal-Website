import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wallpapers = () => {
    const [wallpapers, setwallpapers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    
        React.useEffect(()=> {
            const fetchwallpapers = async () =>{
                try{
                    const response = await fetch('http://127.0.0.1:8000/api/allfacts');
                    if(!response.ok){
                        throw new Error (`Http Error! status; ${response.status}`)
                    }
                    const data =  await response.json();
                    setwallpapers(data);
                }
                catch(err){
                    console.error(err)
                    setError('Failed to fetch facts')
                }finally{
                    setLoading(false)
                }
            };
            fetchwallpapers();
    
        },[])
        if (loading) {
    return (
      <div className={`flex flex-col min-h-screen bg-[#11100e] text-white font-display items-center justify-center`}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <p className="mt-4 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    
    <>
    <Navbar />
    <section className='py-24 bg-[#11100e]'>
            <div className="container mx-auto text-center px-4">
                <div className='p-4'>
                    <h2
                    className='text-gray-300 text-3xl font-sans font-semibold p-2'
                    >WALLPAPERS</h2>
                    <p
                    className='text-gray-500'
                    >Explore high quality and incredible Animal wallpapers</p>
                </div>

                <div className='columns-2 md:columns-3 lg:columns-4'>
                    {wallpapers.map((wallpaper)=> (
                        <div className="m-2 rounded-2xl overflow-hidden">
                                    <img
                                      src={wallpaper.image_url}
                                      alt="Mammals"
                                      className="w-full h-full object-cover transform transition duration-500"
                                    />
                        </div>
                        
                    ))}

                </div>

            </div>

        </section>
    <Footer />
    </>
  )
}

export default Wallpapers
