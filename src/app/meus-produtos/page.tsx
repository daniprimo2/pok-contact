'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2, Eye, MoreVertical, Package } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, Badge } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { useAuth } from '@/hooks/useAuth';
import { mockProdutos } from '@/lib/mockData';
import { Produto, STATUS_PRODUTO } from '@/types';
import { formatCurrency, timeAgo } from '@/lib/utils';

export default function MeusProdutosPage() {
  const { lojista } = useAuth();
  const router = useRouter();
  
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!lojista) {
      router.push('/login');
    }
  }, [lojista, router]);

  // Filter products by current user
  const meusProdutos = useMemo(() => {
    return mockProdutos.filter(produto => produto.lojistaId === lojista?.id);
  }, [lojista?.id]);

  const handleStatusChange = (produto: Produto, novoStatus: 'disponivel' | 'vendido' | 'reservado') => {
    // In real app, call API to update product status
    console.log(`Alterando status do produto ${produto.id} para ${novoStatus}`);
  };

  const handleDeleteProduct = (produto: Produto) => {
    setSelectedProduct(produto);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedProduct) {
      // In real app, call API to delete product
      console.log(`Excluindo produto ${selectedProduct.id}`);
      setShowDeleteModal(false);
      setSelectedProduct(null);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'disponivel': return 'success';
      case 'vendido': return 'error';
      case 'reservado': return 'warning';
      default: return 'default';
    }
  };

  if (!lojista) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Meus Produtos
            </h1>
            <p className="text-muted-foreground">
              Gerencie seu estoque no marketplace
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() => router.push('/publicar')}
            className="mt-4 sm:mt-0"
          >
            <Plus className="h-4 w-4 mr-2" />
            Publicar Produto
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold text-foreground">{meusProdutos.length}</p>
                </div>
                <Package className="h-8 w-8 text-primary-blue" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Disponíveis</p>
                  <p className="text-2xl font-bold text-success">
                    {meusProdutos.filter(p => p.status === 'disponivel').length}
                  </p>
                </div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Vendidos</p>
                  <p className="text-2xl font-bold text-error">
                    {meusProdutos.filter(p => p.status === 'vendido').length}
                  </p>
                </div>
                <div className="w-3 h-3 bg-error rounded-full"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reservados</p>
                  <p className="text-2xl font-bold text-warning">
                    {meusProdutos.filter(p => p.status === 'reservado').length}
                  </p>
                </div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products List */}
        {meusProdutos.length > 0 ? (
          <div className="space-y-4">
            {meusProdutos.map(produto => (
              <Card key={produto.id} hover>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      {produto.fotos && produto.fotos.length > 0 ? (
                        <img
                          src={produto.fotos[0]}
                          alt={produto.nome}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                          <Package className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground text-lg truncate">
                            {produto.nome}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {produto.modelo} • {produto.cor}
                          </p>
                        </div>
                        <Badge variant={getStatusBadgeVariant(produto.status) as any}>
                          {STATUS_PRODUTO.find(s => s.value === produto.status)?.label}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Preço:</span>
                          <p className="font-semibold text-primary-blue">
                            {formatCurrency(produto.preco)}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Quantidade:</span>
                          <p className="text-foreground">{produto.quantidade}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Categoria:</span>
                          <p className="text-foreground capitalize">{produto.categoria}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Publicado:</span>
                          <p className="text-foreground">{timeAgo(produto.createdAt)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      {/* Status Change */}
                      <select
                        value={produto.status}
                        onChange={(e) => handleStatusChange(produto, e.target.value as any)}
                        className="px-3 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      >
                        <option value="disponivel">Disponível</option>
                        <option value="reservado">Reservado</option>
                        <option value="vendido">Vendido</option>
                      </select>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedProduct(produto)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => console.log('Editar produto', produto.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProduct(produto)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Você ainda não publicou nenhum produto. Comece agora!
              </p>
              <Button
                variant="primary"
                onClick={() => router.push('/publicar')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Publicar Primeiro Produto
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Product Details Modal */}
      {selectedProduct && !showDeleteModal && (
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
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Modelo:</span> {selectedProduct.modelo}
                </div>
                <div>
                  <span className="font-medium">Cor:</span> {selectedProduct.cor}
                </div>
                <div>
                  <span className="font-medium">Preço:</span> {formatCurrency(selectedProduct.preco)}
                </div>
                <div>
                  <span className="font-medium">Quantidade:</span> {selectedProduct.quantidade}
                </div>
                <div>
                  <span className="font-medium">Status:</span> 
                  <Badge variant={getStatusBadgeVariant(selectedProduct.status) as any} className="ml-2">
                    {STATUS_PRODUTO.find(s => s.value === selectedProduct.status)?.label}
                  </Badge>
                </div>
                <div>
                  <span className="font-medium">Categoria:</span> {selectedProduct.categoria}
                </div>
              </div>
              
              {selectedProduct.descricao && (
                <div>
                  <span className="font-medium">Descrição:</span>
                  <p className="mt-1 text-muted-foreground">{selectedProduct.descricao}</p>
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
              <Button
                variant="primary"
                onClick={() => {
                  console.log('Editar produto', selectedProduct.id);
                  setSelectedProduct(null);
                }}
                className="flex-1"
              >
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedProduct && (
        <Modal
          isOpen={true}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedProduct(null);
          }}
          title="Confirmar Exclusão"
          size="md"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Tem certeza que deseja excluir o produto <strong>{selectedProduct.nome}</strong>?
              Esta ação não pode ser desfeita.
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                {selectedProduct.fotos && selectedProduct.fotos.length > 0 && (
                  <img
                    src={selectedProduct.fotos[0]}
                    alt={selectedProduct.nome}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h4 className="font-medium">{selectedProduct.nome}</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProduct.modelo} • {formatCurrency(selectedProduct.preco)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedProduct(null);
                }}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={confirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Excluir
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
