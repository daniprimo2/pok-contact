'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Smartphone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';
import { ESTADOS_BRASIL } from '@/types';
import { formatPhone, formatCEP } from '@/lib/utils';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    empresa: '',
    telefone: '',
    cidade: '',
    estado: '',
    cep: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  
  const { register, loading, error, clearError } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    try {
      await register(formData);
      router.push('/dashboard');
    } catch (err) {
      // Erro já está sendo tratado no contexto
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Formatação automática
    if (name === 'telefone') {
      processedValue = formatPhone(value);
    } else if (name === 'cep') {
      processedValue = formatCEP(value);
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));
    if (error) clearError();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-purple-50 to-teal-100 p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-2xl">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/login')}
              className="mr-4 text-slate-700 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mr-3 shadow-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Contact B2B</h1>
                <p className="text-slate-700 text-sm font-medium">Criar nova conta</p>
              </div>
            </div>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Dados Pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="nome"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="empresa"
                placeholder="Nome da empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90"
                required
              />
              <Input
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90"
                maxLength={15}
                required
              />
            </div>

            {/* Endereço */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                name="cidade"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90"
                required
              />
              <select
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-foreground"
                required
              >
                <option value="">Selecione o estado</option>
                {ESTADOS_BRASIL.map(estado => (
                  <option key={estado} value={estado}>{estado}</option>
                ))}
              </select>
              <Input
                name="cep"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90"
                maxLength={9}
                required
              />
            </div>

            {/* Senha */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="senha"
                placeholder="Criar senha"
                value={formData.senha}
                onChange={handleChange}
                className="bg-white/70 border-white/50 placeholder:text-slate-600 text-slate-800 focus:bg-white/90 pr-12"
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              loading={loading}
            >
              {loading ? 'Criando conta...' : 'Criar Conta'}
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-700 font-medium">
              Já tem uma conta?{' '}
              <button
                onClick={() => router.push('/login')}
                className="font-medium gradient-text hover:underline transition-colors"
              >
                Entre aqui
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
