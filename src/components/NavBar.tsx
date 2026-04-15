//src/components/Navbar.tsx

"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 shadow-sm">
      {/* --- NIVEL SUPERIOR: Dorado --- */}
      <div className="bg-[#bda14c] text-white text-[13px] py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <Link href="/administrativo-docentes" className="hover:text-zinc-200 transition-colors">Ingreso Administrativo y Docentes</Link>
            <Link href="/certificados" className="hover:text-zinc-200 transition-colors">Descarga de certificados</Link>
            <Link href="#" className="hover:text-zinc-200 transition-colors">Buzón PSQR</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Buscar" 
                className="bg-white/20 border border-white/30 rounded-full py-1 px-4 pr-10 outline-none focus:bg-white/30 transition-all placeholder:text-white"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2" size={16} />
            </div>
            <Link href="#" className="bg-white text-[#bda14c] px-4 py-1 rounded-full font-bold hover:bg-zinc-100 transition-colors">
              Pagos en Línea
            </Link>
          </div>
        </div>
      </div>

      {/* --- NIVEL INFERIOR: Blanco --- */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo e Identidad */}
          <div className="flex items-center gap-3">
            <div className="text-[#bda14c]">
              <GraduationCap size={40} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#1a1a1a] font-black text-2xl tracking-tighter">INSTITUTO</span>
              <span className="text-[#bda14c] text-[10px] font-bold tracking-[0.2em]">DE COLOMBIA</span>
            </div>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-[#1a1a1a] font-medium text-[15px]">
              <Link href="/" className="text-[#bda14c] border-b-2 border-[#bda14c] pb-1">Inicio</Link>
              <button className="flex items-center gap-1 hover:text-[#bda14c] transition-colors">
                Institución <ChevronDown size={14} />
              </button>
              <Link href="/diplomados" className="hover:text-[#bda14c] transition-colors">Diplomados</Link>
              <button className="flex items-center gap-1 hover:text-[#bda14c] transition-colors">
                Inscripciones <ChevronDown size={14} />
              </button>
              <Link href="#" className="hover:text-[#bda14c] transition-colors">Blog</Link>
            </div>

            <Link href="/login" className="bg-[#bda14c] text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#a68d42] transition-all shadow-md">
              INGRESO A ESTUDIANTES <ChevronDown size={16} />
            </Link>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1a1a1a]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Adaptado */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="/" className="text-[#bda14c] font-bold">Inicio</Link>
          <Link href="/diplomados" className="text-zinc-700 font-medium border-t pt-4">Diplomados</Link>
          <Link href="#faq" className="text-zinc-700 font-medium">Preguntas</Link>
          <Link href="/login" className="bg-[#bda14c] text-white text-center py-4 rounded-xl font-bold shadow-lg">
            CAMPUS VIRTUAL
          </Link>
        </div>
      )}
    </nav>
  );
}