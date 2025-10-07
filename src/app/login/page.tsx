'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, loading, error, clearError } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    try {
      await login(formData.email, formData.senha);
      router.push('/dashboard');
    } catch (err) {
      // Erro já está sendo tratado no contexto
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) clearError();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-purple-50 to-teal-100 p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-lg">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text mb-2">Contact B2B</h1>
            <p className="text-slate-700 font-medium">Entre na sua conta</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              loading={loading}
            >
              {loading ? 'Entrando...' : 'Login'}
            </Button>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <p className="text-slate-700 font-medium">
              Não tem uma conta?{' '}
              <button
                onClick={() => router.push('/register')}
                className="font-semibold gradient-text hover:underline transition-colors"
              >
                Cadastre-se aqui
              </button>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-blue-50/80 border border-blue-300/60 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-blue-800 font-semibold mb-2">Credenciais de Demo:</p>
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>Email:</strong> joao@loja.com</p>
              <p><strong>Senha:</strong> senha123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
