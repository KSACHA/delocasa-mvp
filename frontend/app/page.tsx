'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  deloPrice: number;
  vendor: string;
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isDeloActive, setIsDeloActive] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true); // Fixes hydration mismatch

    const fetchData = async () => {
      try {
        const productRes = await fetch('/api/products');
        const products = await productRes.json();
        setProducts(products);

        const deloRes = await fetch('/api/delo-status');
        const deloData = await deloRes.json();
        setIsDeloActive(deloData.deloActive);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchData();
  }, []);

  if (!mounted) {
    return null; // Skip SSR mismatch entirely
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 font-[Montserrat]">
        {isDeloActive ? 'DELO-time Deals' : 'Today’s Marketplace'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            deloPrice={product.deloPrice}
            vendor={product.vendor}
            isDeloActive={isDeloActive}
          />
        ))}
      </div>
    </main>
  );
}
