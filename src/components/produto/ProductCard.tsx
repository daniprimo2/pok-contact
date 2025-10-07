'use client';

import React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Eye, 
  MessageCircle, 
  Clock,
  Package
} from 'lucide-react';
import { Card, CardContent, Badge } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Produto, STATUS_PRODUTO } from '@/types';
import { formatCurrency, timeAgo } from '@/lib/utils';

interface ProductCardProps {
  produto: Produto;
  onDetailsClick?: (produto: Produto) => void;
  onContactClick?: (produto: Produto) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  produto,
  onDetailsClick,
  onContactClick
}) => {
  const statusInfo = STATUS_PRODUTO.find(s => s.value === produto.status);
  const isAvailable = produto.status === 'disponivel' && produto.quantidade > 0;

  return (
    <Card hover className="overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {produto.fotos && produto.fotos.length > 0 ? (
          <Image
            src={produto.fotos[0]}
            alt={produto.nome}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Package className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant={produto.status === 'disponivel' ? 'success' : produto.status === 'vendido' ? 'error' : 'warning'}>
            {statusInfo?.label}
          </Badge>
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => onDetailsClick?.(produto)}
              className="backdrop-blur-sm bg-white/90 hover:bg-white"
            >
              <Eye className="h-4 w-4 mr-1" />
              Ver
            </Button>
            {isAvailable && (
              <Button
                size="sm"
                variant="primary"
                onClick={() => onContactClick?.(produto)}
                className="backdrop-blur-sm"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Contato
              </Button>
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Product Info */}
        <div className="space-y-3">
          {/* Title and Price */}
          <div>
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
              {produto.nome}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary-blue">
                {formatCurrency(produto.preco)}
              </span>
              <span className="text-sm text-muted-foreground">
                {produto.quantidade} disponível{produto.quantidade !== 1 ? 'is' : ''}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Modelo:</strong> {produto.modelo}</p>
            <p><strong>Cor:</strong> {produto.cor}</p>
            {produto.descricao && (
              <p className="line-clamp-2">
                <strong>Descrição:</strong> {produto.descricao}
              </p>
            )}
          </div>

          {/* Seller Info */}
          {produto.lojista && (
            <div className="border-t border-border pt-3 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {produto.lojista.empresa}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {produto.lojista.nome}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {produto.lojista.cidade}, {produto.lojista.estado}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {timeAgo(produto.createdAt)}
                </div>
              </div>

              {/* Contact Info (when available) */}
              {isAvailable && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Phone className="h-3 w-3 mr-1" />
                  {produto.lojista.telefone}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onDetailsClick?.(produto)}
          >
            <Eye className="h-4 w-4 mr-1" />
            Detalhes
          </Button>
          {isAvailable && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => onContactClick?.(produto)}
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Contatar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
