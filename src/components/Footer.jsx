import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <h1 className='text-red-500 text-2xl font-bold'>Abbo-Shop</h1>
            </Link>
            <p className='mt-2 text-sm'>Alimentez votre monde avec le meilleur de l'électronique.</p>
            <p className='mt-2 text-sm'>N'djamena, Tchad</p>
            <p className='text-sm'>Courriel: abboshop@gmail.com</p>
            <p className='text-sm'>Téléphone: +235 68 10 17 97</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Service client</h3>
            <ul className='mt-2 text-sm space-y-2'>
               <a href=""> <li>Contactez-nous</li></a>
                <a href=""><li>Expédition et retours</li></a>
                <a href=""><li>FAQ</li></a>
                <a href=""><li>Suivi des commandes</li></a>
            </ul>
        </div>
        {/* Lien Reseaux sociaux */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Suivez-nous</h3>
            <div className='flex space-x-4 mt-2'>
                <a href=""><FaFacebook/></a>
                <a href=""><FaInstagram/></a>
                <a href=""><FaTwitterSquare/></a>
                <a href=""><FaPinterest/></a>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Restez informé</h3>
            <p className='mt-2 text-sm'>Abonnez-vous pour recevoir des offres spéciales, des cadeaux gratuits et plus encore
</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Abbo-Shop</span>. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer