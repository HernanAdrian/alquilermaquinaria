import { CheckCircle2, Home } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Solicitud Recibida | Maqon',
  robots: 'noindex',
};

export default function SuccessPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-neutral-200 p-8 shadow-xl text-center">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h1 className="text-3xl font-black text-neutral-900 mb-4">
          ¡Solicitud Recibida!
        </h1>
        <p className="text-neutral-600 text-lg mb-8">
          Te contactaremos en menos de <strong>2 horas</strong> con el presupuesto final.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          <Home size={20} />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
