import { useEffect, useMemo, useState } from 'react';
import { getProducts } from './api/products';
import type { Product } from './types/product';
import { ProductCard } from './components/ProductCard/ProductCard';
import { SearchInput } from './components/SearchInput/SearchInput';
import { ProductModal } from './components/ProductModal/ProductModal';
import './App.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []); 

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <main className="app">
      <h1>Каталог товаров</h1>

      <SearchInput value={search} onChange={setSearch} />

      <section className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
        ))}
      </section>

      {filteredProducts.length === 0 && <p>Товары не найдены</p>}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}

export default App;