"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "¿La inscripción realmente es gratuita?",
    a: "Sí, el acceso a todos nuestros diplomados virtuales es completamente gratuito. Solo realizas un pago único de $80.000 COP al finalizar si deseas obtener tu certificación oficial."
  },
  {
    q: "¿A qué hora son las clases?",
    a: "Nuestros diplomados son 100% asincrónicos, lo que significa que puedes acceder al material las 24 horas del día, los 7 días de la semana, y estudiar a tu propio ritmo."
  },
  {
    q: "¿Qué requisitos necesito para inscribirme?",
    a: "Solo necesitas conexión a internet y muchas ganas de aprender. No requerimos bachillerato completo para los diplomados de educación informal."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
              >
                <span className="font-medium text-white">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-zinc-500" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
