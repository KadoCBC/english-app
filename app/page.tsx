'use client'
import Image from "next/image";
import  { useState} from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="text-center space-y-10">
      <h2 className="text-3xl font-semibold w-100 break-words"> 
        Uma nova forma para se aprender um idioma!
      </h2>

      <div className="flex flex-col gap-6 items-center">
        <button className="botao-personalizado">
          COMECE AGORA
        </button>
        <button 
        className="botao-personalizado"
        onClick={() => setShowModal(true)}
        >
          JÁ TENHO CONTA
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-center mb-6 text-white">Entrar</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu usuário"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
              <input
                type="password"
                placeholder="Sua senha"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

// 'text- 3x1' -> tamanho do texto