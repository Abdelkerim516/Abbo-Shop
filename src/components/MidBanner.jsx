import banner from "../assets/ban.jpg"


 const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24">
        <div className="relative max-w-7xl mx-auto md: rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]" style={{
            backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
                <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        L'électronique de nouvelle génération à portée de main

                    </h1>
                    <p className="text-lg md:text-xl mb-6">Découvrez les dernières nouveautés</p>
                    <button className="bg-amber-300 hover:bg-amber-500 text-black font-semibold py-2 px-4 md:py-3 md:px-6
                    rounded-lg transition duration-300">Achetez maintenant</button>
                </div>
                </div>

        </div>

    </div>
  )
}

export default MidBanner