export const metadata = {
  title: "Ingreso Administrativo y Docentes | Politécnico de Colombia",
  description: "Página de ingreso para administrativos y docentes del portal PoliSoft.",
};

export default function AdministrativoDocentesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-amber-200 sm:text-4xl">
            ¡Bienvenido@ a PoliSoft!
          </h1>
          <p className="mt-3 text-base text-zinc-300">
            ¡Educación sin límites!
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-zinc-100">Correo: *</label>
            <div className="mt-3 relative rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-sm focus-within:border-amber-300 focus-within:ring-2 focus-within:ring-amber-300/20">
              <span className="absolute inset-y-0 left-4 flex items-center text-amber-200">@</span>
              <input
                type="email"
                placeholder="ejemplo@mail.com"
                className="w-full bg-transparent pl-10 text-sm text-white placeholder:text-zinc-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-100">Contraseña: *</label>
            <div className="mt-3 relative rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-sm focus-within:border-amber-300 focus-within:ring-2 focus-within:ring-amber-300/20">
              <span className="absolute inset-y-0 left-4 flex items-center text-amber-200">*</span>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full bg-transparent pl-10 text-sm text-white placeholder:text-zinc-400 outline-none"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm text-zinc-300">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/10 text-amber-500 focus:ring-amber-400" />
            Recuérdame
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-amber-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Acceso exclusivo para administrativos y docentes. Si no tienes credenciales, comunícate con el área administrativa.
        </p>
      </div>
    </main>
  );
}
