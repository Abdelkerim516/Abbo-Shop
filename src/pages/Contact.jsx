import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Contactez  <span className="text-red-400">Abbo-Shop</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Coordonnées</h3>
              <p className="text-gray-300">Vous avez une question ou besoin d'aide ? Nous sommes là pour vous accompagner dans votre transition électronique.</p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> N'djamena, Tchad</p>
              <p><strong>📧 Email:</strong> abboshop@gmail.com</p>
              <p><strong>📞 Phone:</strong> +235 68 10 17 97</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-1">Votre nom</label>
              <input type="text" placeholder="Abdel Abbo" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-1">Adresse email</label>
              <input type="email" placeholder="abdelabbo@gmail.com" className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-1">Votre message</label>
              <textarea rows="4" placeholder="Tapez votre message..." className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">
              Envoyer un message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;