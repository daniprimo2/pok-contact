'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { ProductCard } from '@/components/produto/ProductCard';
import { ProductFilters } from '@/components/produto/ProductFilters';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';
import { mockProdutos } from '@/lib/mockData';
import { FiltrosProdutos, Produto } from '@/types';

export default function DashboardPage() {
  const { lojista } = useAuth();
  const router = useRouter();
  
  // States
  const [search, setSearch] = useState('');
  const [filtros, setFiltros] = useState<FiltrosProdutos>({ status: 'disponivel' });
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!lojista) {
      router.push('/login');
    }
  }, [lojista, router]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return mockProdutos.filter(produto => {
      // Busca por texto
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesSearch = 
          produto.nome.toLowerCase().includes(searchLower) ||
          produto.descricao?.toLowerCase().includes(searchLower) ||
          produto.modelo.toLowerCase().includes(searchLower) ||
          produto.cor.toLowerCase().includes(searchLower) ||
          produto.lojista?.empresa.toLowerCase().includes(searchLower);
        
        if (!matchesSearch) return false;
      }

      // Filtro por estado
      if (filtros.estado && produto.lojista?.estado !== filtros.estado) {
        return false;
      }

      // Filtro por cidade
      if (filtros.cidade && !produto.lojista?.cidade.toLowerCase().includes(filtros.cidade.toLowerCase())) {
        return false;
      }

      // Filtro por preço
      if (filtros.precoMin && produto.preco < filtros.precoMin) {
        return false;
      }
      if (filtros.precoMax && produto.preco > filtros.precoMax) {
        return false;
      }

      // Filtro por categoria
      if (filtros.categoria && filtros.categoria.length > 0 && !filtros.categoria.includes(produto.categoria)) {
        return false;
      }

      // Filtro por status
      if (filtros.status && produto.status !== filtros.status) {
        return false;
      }

      return true;
    });
  }, [mockProdutos, search, filtros]);

  const handleClearFilters = () => {
    setFiltros({ status: 'disponivel' });
    setSearch('');
  };

  const handleProductDetails = (produto: Produto) => {
    setSelectedProduct(produto);
  };

  const handleContactSeller = (produto: Produto) => {
    setSelectedProduct(produto);
    setShowContactModal(true);
  };

  if (!lojista) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header onSearchChange={setSearch} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Feed de Produtos
          </h1>
          <p className="text-muted-foreground">
            Descubra produtos disponíveis de outros lojistas
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>

            {/* Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <ProductFilters
                filtros={filtros}
                onFiltersChange={setFiltros}
                onClearFilters={handleClearFilters}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Search Bar (Mobile) */}
              <div className="flex-1 md:hidden mr-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar produtos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Results Count */}
              <div className="text-sm text-muted-foreground">
                {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 ml-4">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }>
                {filteredProducts.map(produto => (
                  <ProductCard
                    key={produto.id}
                    produto={produto}
                    onDetailsClick={handleProductDetails}
                    onContactClick={handleContactSeller}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">Nenhum produto encontrado</p>
                  <p className="text-sm">Tente ajustar os filtros ou busca</p>
                </div>
                <Button variant="outline" onClick={handleClearFilters}>
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Product Details Modal */}
      {selectedProduct && !showContactModal && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.nome}
          size="lg"
        >
          <div className="space-y-6">
            {/* Product Images */}
            {selectedProduct.fotos && selectedProduct.fotos.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {selectedProduct.fotos.map((foto, index) => (
                  <img
                    key={index}
                    src={foto}
                    alt={`${selectedProduct.nome} - ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Detalhes do Produto</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Modelo:</span> {selectedProduct.modelo}
                  </div>
                  <div>
                    <span className="font-medium">Cor:</span> {selectedProduct.cor}
                  </div>
                  <div>
                    <span className="font-medium">Preço:</span> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedProduct.preco)}
                  </div>
                  <div>
                    <span className="font-medium">Quantidade:</span> {selectedProduct.quantidade}
                  </div>
                </div>
                {selectedProduct.descricao && (
                  <div className="mt-4">
                    <span className="font-medium">Descrição:</span>
                    <p className="mt-1 text-muted-foreground">{selectedProduct.descricao}</p>
                  </div>
                )}
              </div>

              {/* Seller Info */}
              {selectedProduct.lojista && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Informações do Vendedor</h3>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <div><span className="font-medium">Empresa:</span> {selectedProduct.lojista.empresa}</div>
                    <div><span className="font-medium">Vendedor:</span> {selectedProduct.lojista.nome}</div>
                    <div><span className="font-medium">Localização:</span> {selectedProduct.lojista.cidade}, {selectedProduct.lojista.estado}</div>
                    <div><span className="font-medium">Telefone:</span> {selectedProduct.lojista.telefone}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setSelectedProduct(null)}
                className="flex-1"
              >
                Fechar
              </Button>
              {selectedProduct.status === 'disponivel' && (
                <Button
                  variant="primary"
                  onClick={() => setShowContactModal(true)}
                  className="flex-1"
                >
                  Entrar em Contato
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* Contact Modal */}
      {selectedProduct && showContactModal && (
        <Modal
          isOpen={true}
          onClose={() => {
            setShowContactModal(false);
            setSelectedProduct(null);
          }}
          title="Entrar em Contato"
          size="md"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Entre em contato com <strong>{selectedProduct.lojista?.nome}</strong> da empresa <strong>{selectedProduct.lojista?.empresa}</strong> sobre o produto:
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">{selectedProduct.nome}</h4>
              <p className="text-sm text-muted-foreground">
                {selectedProduct.modelo} • {selectedProduct.cor} • {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(selectedProduct.preco)}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-medium">Telefone:</span>
                <p className="text-lg">{selectedProduct.lojista?.telefone}</p>
              </div>
              <div>
                <span className="font-medium">Email:</span>
                <p className="text-lg">{selectedProduct.lojista?.email}</p>
              </div>
              <div>
                <span className="font-medium">Localização:</span>
                <p>{selectedProduct.lojista?.cidade}, {selectedProduct.lojista?.estado}</p>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowContactModal(false);
                  setSelectedProduct(null);
                }}
                className="flex-1"
              >
                Fechar
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  window.open(`tel:${selectedProduct.lojista?.telefone}`, '_self');
                }}
                className="flex-1"
              >
                Ligar Agora
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
