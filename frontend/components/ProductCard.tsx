// /frontend/components/ProductCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  deloPrice: number;
  vendor: string;
  isDeloActive: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  deloPrice,
  vendor,
  isDeloActive,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] w-full sm:w-72 font-[Montserrat]">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{vendor}</p>
        <div className="mt-2">
          {isDeloActive ? (
            <>
              <p className="text-sm text-green-700 font-medium">DELO-time price</p>
              <p className="text-xl font-bold text-green-700">${deloPrice.toFixed(2)}</p>
              <p className="line-through text-sm text-gray-400">${price.toFixed(2)}</p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-700 font-medium">Regular price</p>
              <p className="text-xl font-bold text-gray-800">${price.toFixed(2)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
