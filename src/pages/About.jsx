import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">À propos de Abbo-Shop</h1>

        <p className="text-gray-700 text-lg">
          Bienvenue chez <span className="font-semibold text-red-600">Abbo-Shop</span>,  votre destination incontournable pour les dernières nouveautés en électronique. Des gadgets de pointe aux accessoires indispensables, nous sommes là pour booster votre vie technologique avec des produits haut de gamme et un service imbattable.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Notre mission</h2>
          <p className="text-gray-700 text-base">
Chez Abbo-Shop, notre mission est de rendre les technologies innovantes accessibles à tous. Notre passion est de connecter chacun aux outils et technologies nécessaires pour s'épanouir dans le monde numérique, le tout à des prix compétitifs et avec rapidité et soin.

          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Pourquoi choisir Abbo-Shop ?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Produits électroniques de qualité supérieure de marques de confiance</li>
            <li>Expédition ultra-rapide et sécurisée</li>
            <li>Un support client fiable, toujours prêt à vous aider</li>
            <li>Retours faciles et expérience d'achat sans tracas</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Notre vision</h2>
          <p className="text-gray-700 text-base">
            Nous envisageons un avenir où la technologie améliorera le quotidien. Chez Abbo-Shop, nous nous engageons à rester à la pointe du progrès en proposant des solutions innovantes, à la fois pratiques et abordables.
          </p>
        </div>

      </div>
              <h1 className="text-4xl font-bold  text-center">Rejoignez la famille Dev-Web et Mobile</h1>
              <iframe src="https://e.widgetbot.io/channels/1288146716432011324/1288146716432011326" allow="clipboard-write; fullscreen" height="900" width="1500"></iframe>
      <div className="text-center mt-10">
          {/* <h3 className="text-xl font-semibold text-red-600 mb-2">Rejoignez la famille Zaptro</h3>
          <p className="text-gray-700 mb-4">
Que vous soyez un passionné de technologie, un professionnel ou que vous recherchiez simplement quelque chose de cool et de fonctionnel, Zaptro a quelque chose pour tout le monde.

          </p> */}
         <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
        
    </div>
  );
};

export default About;