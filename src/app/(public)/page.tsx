import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-600/10 text-blue-500 border border-blue-500/20 px-4 py-1 rounded-full text-sm font-medium">
              Inscripciones Abiertas 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
              Aprende más, <br />
              <span className="text-blue-600">paga lo justo.</span>
            </h1>
            <p className="text-zinc-400 text-lg mt-6 max-w-lg">
              Diplomados virtuales de alta calidad. La inscripción es <span className="text-white font-bold">GRATUITA</span> y solo pagas la matrícula al finalizar.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
                Ver Diplomados
              </button>
              <div className="flex flex-col justify-center">
                <span className="text-sm text-zinc-500">Matrícula por solo</span>
                <span className="text-xl font-bold text-white">$80.000 COP</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
            {/* Aquí iría la imagen que generamos similar a la que subiste */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            <div className="flex items-center justify-center h-full text-zinc-700 uppercase tracking-widest font-bold">
              Espacio para Imagen Principal
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}