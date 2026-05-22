import { useEffect } from 'react';
import type { Product } from '../../types/product';
import './ProductModal.scss';

interface Props {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>x</button>

        <img src={product.image} alt={product.title} />

        <div className="modal__content">
          <span>{product.category}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <strong>{product.price.toLocaleString('ru-RU')} ₽</strong>
          <button className="modal__buy">Купить</button>
        </div>
      </div>
    </div>
  );
}