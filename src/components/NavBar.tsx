"use client";
import Link from "next/image";
import { useState } from "react";
import { Menu, X, graduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <graduationCap className="text-white" size={24} />
            </div>
            <span className="text-white font-bold text-xl tracking-tighter">INSTITUTO VIRTUAL</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-zinc-300 hover:text-white transition-colors">Inicio</Link>
              <Link href="/diplomados" className="text-zinc-300 hover:text-white transition-colors">Diplomados</Link>
              <Link href="#faq" className="text-zinc-300 hover:text-white transition-colors">Preguntas</Link>
              <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all">Campus Virtual</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 p-4 space-y-4">
          <Link href="/" className="block text-zinc-300 py-2">Inicio</Link>
          <Link href="/diplomados" className="block text-zinc-300 py-2">Diplomados</Link>
          <Link href="/login" className="block bg-blue-600 text-white text-center py-3 rounded-xl">Campus Virtual</Link>
        </div>
      )}
    </nav>
  );
}
