"use client";

import { FormEvent, useState } from "react";

export default function CertificateSearchForm() {
  const [documentId, setDocumentId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleaned = documentId.replace(/[\s.,]/g, "");

    if (!cleaned) {
      setStatus("error");
      setMessage("Por favor ingresa tu número de documento.");
      return;
    }

    if (!/^\d+$/.test(cleaned)) {
      setStatus("error");
      setMessage("Ingresa solo números sin espacios, puntos ni comas.");
      return;
    }

    setStatus("success");
    setMessage(
      `Número válido: ${cleaned}. En una implementación real, aquí iniciaríamos la descarga del certificado.`
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-xl shadow-zinc-900/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-sm font-medium text-zinc-700">
          Número de Documento
          <input
            value={documentId}
            onChange={(event) => setDocumentId(event.target.value)}
            placeholder="Ej. 123456789"
            className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-base text-zinc-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-2xl bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-zinc-900"
        >
          Buscar
        </button>
      </form>

      {message ? (
        <div
          className={`mt-6 rounded-2xl px-5 py-4 text-sm ${
            status === "error" ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"
          }`}
        >
          {message}
        </div>
      ) : null}

      <p className="mt-6 text-sm leading-6 text-zinc-500">
        Para iniciar el proceso de descarga de certificados debe digitar su número de documento (sin espacios, puntos y comas) y luego dar clic en el botón "Buscar".
      </p>
    </div>
  );
}
