'use client';

import React from 'react';
import { X, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { FiltrosProdutos, CATEGORIAS, ESTADOS_BRASIL } from '@/types';
import { formatCurrency } from '@/lib/utils';

interface ProductFiltersProps {
  filtros: FiltrosProdutos;
  onFiltersChange: (filtros: FiltrosProdutos) => void;
  onClearFilters: () => void;
  className?: string;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filtros,
  onFiltersChange,
  onClearFilters,
  className
}) => {
  const handleFilterChange = (key: keyof FiltrosProdutos, value: any) => {
    onFiltersChange({
      ...filtros,
      [key]: value
    });
  };

  const handleCategoriaToggle = (categoria: string) => {
    const currentCategorias = filtros.categoria || [];
    const newCategorias = currentCategorias.includes(categoria)
      ? currentCategorias.filter(c => c !== categoria)
      : [...currentCategorias, categoria];
    
    handleFilterChange('categoria', newCategorias.length > 0 ? newCategorias : undefined);
  };

  const hasActiveFilters = Object.values(filtros).some(value => {
    if (Array.isArray(value)) return value.length > 0;
    return value !== undefined && value !== '';
  });

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-primary-blue" />
            <h3 className="font-semibold text-foreground">Filtros</h3>
          </div>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Limpar
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Localização */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Localização</h4>
          
          <div className="space-y-2">
            <select
              value={filtros.estado || ''}
              onChange={(e) => handleFilterChange('estado', e.target.value || undefined)}
              className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-sm"
            >
              <option value="">Todos os estados</option>
              {ESTADOS_BRASIL.map(estado => (
                <option key={estado} value={estado}>{estado}</option>
              ))}
            </select>

            <Input
              placeholder="Cidade"
              value={filtros.cidade || ''}
              onChange={(e) => handleFilterChange('cidade', e.target.value || undefined)}
              className="text-sm"
            />
          </div>
        </div>

        {/* Faixa de Preço */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Faixa de Preço</h4>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Mínimo</label>
              <Input
                type="number"
                placeholder="0"
                value={filtros.precoMin || ''}
                onChange={(e) => handleFilterChange('precoMin', e.target.value ? Number(e.target.value) : undefined)}
                className="text-sm"
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Máximo</label>
              <Input
                type="number"
                placeholder="∞"
                value={filtros.precoMax || ''}
                onChange={(e) => handleFilterChange('precoMax', e.target.value ? Number(e.target.value) : undefined)}
                className="text-sm"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Faixas de preço predefinidas */}
          <div className="grid grid-cols-2 gap-1">
            {[
              { label: 'Até R$ 500', max: 500 },
              { label: 'R$ 500-1000', min: 500, max: 1000 },
              { label: 'R$ 1000-5000', min: 1000, max: 5000 },
              { label: 'Acima R$ 5000', min: 5000 }
            ].map((faixa, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => {
                  handleFilterChange('precoMin', faixa.min);
                  handleFilterChange('precoMax', faixa.max);
                }}
                className="text-xs h-8 px-2"
              >
                {faixa.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Categoria */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Categoria</h4>
          
          <div className="space-y-2">
            {CATEGORIAS.map(categoria => {
              const isSelected = filtros.categoria?.includes(categoria.value) || false;
              return (
                <label
                  key={categoria.value}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleCategoriaToggle(categoria.value)}
                    className="w-4 h-4 text-primary-blue bg-input border-border rounded focus:ring-primary-blue focus:ring-2"
                  />
                  <span className="text-sm text-foreground">
                    {categoria.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Status */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Status</h4>
          
          <div className="space-y-2">
            {[
              { value: 'disponivel', label: 'Disponível' },
              { value: 'reservado', label: 'Reservado' },
              { value: 'vendido', label: 'Vendido' }
            ].map(status => (
              <label
                key={status.value}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="status"
                  value={status.value}
                  checked={filtros.status === status.value}
                  onChange={(e) => handleFilterChange('status', e.target.value as any)}
                  className="w-4 h-4 text-primary-blue bg-input border-border focus:ring-primary-blue focus:ring-2"
                />
                <span className="text-sm text-foreground">
                  {status.label}
                </span>
              </label>
            ))}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                value=""
                checked={!filtros.status}
                onChange={() => handleFilterChange('status', undefined)}
                className="w-4 h-4 text-primary-blue bg-input border-border focus:ring-primary-blue focus:ring-2"
              />
              <span className="text-sm text-foreground">
                Todos
              </span>
            </label>
          </div>
        </div>

        {/* Resumo dos filtros ativos */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Filtros ativos:</p>
            <div className="flex flex-wrap gap-1">
              {filtros.estado && (
                <span className="inline-flex items-center px-2 py-1 bg-primary-blue/10 text-primary-blue rounded text-xs">
                  {filtros.estado}
                </span>
              )}
              {filtros.cidade && (
                <span className="inline-flex items-center px-2 py-1 bg-primary-blue/10 text-primary-blue rounded text-xs">
                  {filtros.cidade}
                </span>
              )}
              {filtros.precoMin && (
                <span className="inline-flex items-center px-2 py-1 bg-primary-blue/10 text-primary-blue rounded text-xs">
                  Min: {formatCurrency(filtros.precoMin)}
                </span>
              )}
              {filtros.precoMax && (
                <span className="inline-flex items-center px-2 py-1 bg-primary-blue/10 text-primary-blue rounded text-xs">
                  Max: {formatCurrency(filtros.precoMax)}
                </span>
              )}
              {filtros.categoria?.map(cat => (
                <span key={cat} className="inline-flex items-center px-2 py-1 bg-primary-blue/10 text-primary-blue rounded text-xs">
                  {CATEGORIAS.find(c => c.value === cat)?.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
