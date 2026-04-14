import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Instituto Virtual</h3>
          <p className="leading-relaxed">
            Líderes en formación virtual en Latinoamérica. Brindamos acceso a educación de calidad con certificación económica para todos.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><Phone size={18} /> (604) 123 4567</li>
            <li className="flex items-center gap-3"><Mail size={18} /> info@institutovirtual.edu.co</li>
            <li className="flex items-center gap-3"><MapPin size={18} /> Colombia - Virtual</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Síguenos</h3>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Facebook /></a>
            <a href="#" className="p-3 bg-zinc-800 rounded-full hover:bg-pink-600 hover:text-white transition-all"><Instagram /></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-zinc-800 text-center text-sm">
        <p>© 2026 Instituto Virtual Latinoamericano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
