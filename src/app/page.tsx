'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Smartphone } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { lojista } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect based on authentication status
    if (lojista) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [lojista, router]);

  // Loading screen while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-purple-50 to-teal-100">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-lg animate-pulse">
          <Smartphone className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold gradient-text mb-2">Contact B2B</h1>
        <p className="text-gray-600">Carregando...</p>
      </div>
    </div>
  );
}
