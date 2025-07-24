'use client';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <AlertTriangle className="w-16 h-16 text-delca-orange mb-6" />
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Página Não Encontrada</h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Oops! O endereço que você está tentando acessar não existe.
      </p>
      <Link href="/" className="inline-flex items-center px-8 py-4 bg-delca-blue text-white font-semibold rounded-lg hover:bg-delca-blue/90 transition-colors">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
