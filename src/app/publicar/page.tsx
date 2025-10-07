'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, X, Plus, Save, ArrowLeft } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { useAuth } from '@/hooks/useAuth';
import { CATEGORIAS } from '@/types';
import { formatCurrency } from '@/lib/utils';

export default function PublicarPage() {
  const { lojista } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    modelo: '',
    cor: '',
    preco: '',
    quantidade: '',
    categoria: '',
    fotos: [] as string[]
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!lojista) {
      router.push('/login');
    }
  }, [lojista, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Simulate image upload (in real app, upload to S3/storage service)
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setFormData(prev => ({
          ...prev,
          fotos: [...prev.fotos, imageUrl]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      fotos: prev.fotos.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.modelo.trim()) newErrors.modelo = 'Modelo é obrigatório';
    if (!formData.cor.trim()) newErrors.cor = 'Cor é obrigatória';
    if (!formData.categoria) newErrors.categoria = 'Categoria é obrigatória';
    
    const preco = parseFloat(formData.preco);
    if (!formData.preco || isNaN(preco) || preco <= 0) {
      newErrors.preco = 'Preço deve ser maior que zero';
    }
    
    const quantidade = parseInt(formData.quantidade);
    if (!formData.quantidade || isNaN(quantidade) || quantidade < 0) {
      newErrors.quantidade = 'Quantidade deve ser maior ou igual a zero';
    }

    if (formData.fotos.length === 0) {
      newErrors.fotos = 'Adicione pelo menos uma foto';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, call API to create product
      console.log('Produto criado:', {
        ...formData,
        preco: parseFloat(formData.preco),
        quantidade: parseInt(formData.quantidade),
        lojistaId: lojista?.id
      });
      
      // Redirect to dashboard with success message
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    } finally {
      setLoading(false);
    }
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
            Publicar Produto
          </h1>
          <p className="text-muted-foreground">
            Adicione um novo produto ao seu estoque no marketplace
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Informações Básicas</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="nome"
                  label="Nome do Produto *"
                  placeholder="Ex: iPhone 15 Pro Max"
                  value={formData.nome}
                  onChange={handleChange}
                  error={errors.nome}
                />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Categoria *
                  </label>
                  <select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    <option value="">Selecione uma categoria</option>
                    {CATEGORIAS.map(categoria => (
                      <option key={categoria.value} value={categoria.value}>
                        {categoria.label}
                      </option>
                    ))}
                  </select>
                  {errors.categoria && (
                    <p className="mt-2 text-sm text-error">{errors.categoria}</p>
                  )}
                </div>
              </div>

              <Textarea
                name="descricao"
                label="Descrição"
                placeholder="Descreva o produto em detalhes..."
                value={formData.descricao}
                onChange={handleChange}
                rows={4}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="modelo"
                  label="Modelo *"
                  placeholder="Ex: A3101, SM-S928B"
                  value={formData.modelo}
                  onChange={handleChange}
                  error={errors.modelo}
                />
                <Input
                  name="cor"
                  label="Cor *"
                  placeholder="Ex: Azul Titânio, Preto"
                  value={formData.cor}
                  onChange={handleChange}
                  error={errors.cor}
                />
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Inventory */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Preço e Estoque</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="preco"
                    label="Preço (R$) *"
                    type="number"
                    placeholder="0,00"
                    value={formData.preco}
                    onChange={handleChange}
                    error={errors.preco}
                    min="0"
                    step="0.01"
                  />
                  {formData.preco && !isNaN(parseFloat(formData.preco)) && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatCurrency(parseFloat(formData.preco))}
                    </p>
                  )}
                </div>
                <Input
                  name="quantidade"
                  label="Quantidade *"
                  type="number"
                  placeholder="0"
                  value={formData.quantidade}
                  onChange={handleChange}
                  error={errors.quantidade}
                  min="0"
                />
              </div>
            </CardContent>
          </Card>

          {/* Photos */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Fotos do Produto</h3>
              <p className="text-sm text-muted-foreground">
                Adicione até 4 fotos do produto (formatos: JPG, PNG)
              </p>
            </CardHeader>
            <CardContent>
              {/* Upload Area */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {formData.fotos.map((foto, index) => (
                  <div key={index} className="relative">
                    <img
                      src={foto}
                      alt={`Foto ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-border"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 p-0 bg-red-500 hover:bg-red-600 text-white rounded-full"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                
                {formData.fotos.length < 4 && (
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-border border-dashed rounded-lg cursor-pointer hover:border-primary-blue transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-6 h-6 mb-2 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground text-center">
                        Adicionar<br />Foto
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
              
              {errors.fotos && (
                <p className="text-sm text-error">{errors.fotos}</p>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="sm:w-auto"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              loading={loading}
              className="sm:w-auto"
            >
              <Save className="h-4 w-4 mr-2" />
              {loading ? 'Publicando...' : 'Publicar Produto'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
