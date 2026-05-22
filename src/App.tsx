import { useEffect, useState } from 'react';
import { getProducts } from './api/products';
import type { Product } from './types/product';
import { ProductCard } from './components/ProductCard/ProductCard';
import './App.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []); 

  return (
    <main className="app">
      <h1>Каталог товаров</h1>

      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => {}} />
        ))}
      </section>
    </main>
  );
}

export default App;