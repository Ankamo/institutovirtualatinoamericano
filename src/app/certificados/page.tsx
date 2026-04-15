import CertificateSearchForm from "@/components/CertificateSearchForm";

export const metadata = {
  title: "Descargar Certificados | Politécnico de Colombia",
  description: "Descarga tu certificado virtual ingresando tu número de documento sin espacios, puntos ni comas.",
};

export default function CertificadosPage() {
  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-950">
      <section className="flex min-h-screen items-center justify-center px-6 py-12 md:px-12">
        <div className="w-full max-w-3xl rounded-[38px] border border-zinc-200 bg-white p-10 shadow-[0_35px_60px_-30px_rgba(15,23,42,0.35)] sm:p-12">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                Certificados
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                Descarga tu certificado virtual
              </h1>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
                Haz realidad el esfuerzo de tus estudios. Descarga el certificado de tu diplomado virtual cursado, aprobado y pagado.
              </p>
            </div>

            <CertificateSearchForm />

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-6 text-zinc-600">
              <p className="font-semibold text-zinc-900">Instrucciones</p>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                <li>Digita tu número de documento sin espacios, puntos ni comas.</li>
                <li>Presiona el botón "Buscar" para validar tu registro.</li>
                <li>En la siguiente versión, el sistema generará el enlace de descarga del certificado.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
