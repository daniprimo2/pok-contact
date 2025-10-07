'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, User, MapPin, Phone, Mail, Building, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { useAuth } from '@/hooks/useAuth';
import { ESTADOS_BRASIL } from '@/types';
import { formatPhone, formatCEP } from '@/lib/utils';

export default function PerfilPage() {
  const { lojista } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    nome: lojista?.nome || '',
    email: lojista?.email || '',
    empresa: lojista?.empresa || '',
    telefone: lojista?.telefone || '',
    cidade: lojista?.cidade || '',
    estado: lojista?.estado || '',
    cep: lojista?.cep || ''
  });
  
  const [passwordData, setPasswordData] = useState({
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    atual: false,
    nova: false,
    confirmar: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!lojista) {
      router.push('/login');
    }
  }, [lojista, router]);

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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateProfileForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    if (!formData.empresa.trim()) newErrors.empresa = 'Nome da empresa é obrigatório';
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória';
    if (!formData.estado) newErrors.estado = 'Estado é obrigatório';
    if (!formData.cep.trim()) newErrors.cep = 'CEP é obrigatório';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePasswordForm = () => {
    const newErrors: Record<string, string> = {};

    if (!passwordData.senhaAtual.trim()) newErrors.senhaAtual = 'Senha atual é obrigatória';
    if (!passwordData.novaSenha.trim()) newErrors.novaSenha = 'Nova senha é obrigatória';
    if (passwordData.novaSenha.length < 6) newErrors.novaSenha = 'Nova senha deve ter pelo menos 6 caracteres';
    if (!passwordData.confirmarSenha.trim()) newErrors.confirmarSenha = 'Confirmação de senha é obrigatória';
    if (passwordData.novaSenha !== passwordData.confirmarSenha) {
      newErrors.confirmarSenha = 'Senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateProfileForm()) return;

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In real app, call API to update profile
      console.log('Perfil atualizado:', formData);
      
      // Show success message (in real app, use toast/notification)
      alert('Perfil atualizado com sucesso!');
      
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Erro ao atualizar perfil. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePasswordForm()) return;

    setLoadingPassword(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In real app, call API to change password
      console.log('Senha alterada');
      
      // Reset form
      setPasswordData({
        senhaAtual: '',
        novaSenha: '',
        confirmarSenha: ''
      });
      
      // Show success message
      alert('Senha alterada com sucesso!');
      
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
      alert('Erro ao alterar senha. Verifique a senha atual.');
    } finally {
      setLoadingPassword(false);
    }
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  if (!lojista) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Meu Perfil
          </h1>
          <p className="text-muted-foreground">
            Gerencie suas informações pessoais e configurações da conta
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Info */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-medium text-lg">
                  {lojista.nome.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-semibold flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Informações Pessoais
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Atualize seus dados pessoais e informações de contato
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="nome"
                    label="Nome Completo"
                    value={formData.nome}
                    onChange={handleChange}
                    error={errors.nome}
                  />
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                {/* Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="empresa"
                    label="Nome da Empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    error={errors.empresa}
                  />
                  <Input
                    name="telefone"
                    label="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    error={errors.telefone}
                    maxLength={15}
                  />
                </div>

                {/* Address */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    name="cidade"
                    label="Cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    error={errors.cidade}
                  />
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Estado
                    </label>
                    <select
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      {ESTADOS_BRASIL.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                      ))}
                    </select>
                    {errors.estado && (
                      <p className="mt-2 text-sm text-error">{errors.estado}</p>
                    )}
                  </div>
                  <Input
                    name="cep"
                    label="CEP"
                    value={formData.cep}
                    onChange={handleChange}
                    error={errors.cep}
                    maxLength={9}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loading}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {loading ? 'Salvando...' : 'Salvar Alterações'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Alterar Senha</h3>
              <p className="text-sm text-muted-foreground">
                Mantenha sua conta segura alterando sua senha regularmente
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      name="senhaAtual"
                      type={showPasswords.atual ? "text" : "password"}
                      label="Senha Atual"
                      value={passwordData.senhaAtual}
                      onChange={handlePasswordChange}
                      error={errors.senhaAtual}
                      className="pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('atual')}
                      className="absolute right-3 top-11 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPasswords.atual ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <div className="relative">
                    <Input
                      name="novaSenha"
                      type={showPasswords.nova ? "text" : "password"}
                      label="Nova Senha"
                      value={passwordData.novaSenha}
                      onChange={handlePasswordChange}
                      error={errors.novaSenha}
                      className="pr-12"
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('nova')}
                      className="absolute right-3 top-11 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPasswords.nova ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <div className="relative">
                    <Input
                      name="confirmarSenha"
                      type={showPasswords.confirmar ? "text" : "password"}
                      label="Confirmar Nova Senha"
                      value={passwordData.confirmarSenha}
                      onChange={handlePasswordChange}
                      error={errors.confirmarSenha}
                      className="pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('confirmar')}
                      className="absolute right-3 top-11 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPasswords.confirmar ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    loading={loadingPassword}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {loadingPassword ? 'Alterando...' : 'Alterar Senha'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Informações da Conta</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ID da Conta:</span>
                  <span className="font-mono">{lojista.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Membro desde:</span>
                  <span>{new Date(lojista.createdAt).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Última atualização:</span>
                  <span>{new Date(lojista.updatedAt).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status da conta:</span>
                  <span className="text-success">Ativa</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
