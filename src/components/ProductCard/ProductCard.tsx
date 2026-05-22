import type { Product } from '../../types/product'
import './ProductCard.scss'

type ProductCardProps = {
  product: Product
  onClick: (product: Product) => void
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <article className="product-card">
      <img className="product-card__image" src={product.image} alt={product.title} />
      <div className="product-card__content">
        <div className="product-card__meta">
          <span>{product.category}</span>
          <strong>${product.price.toFixed(2)}</strong>
        </div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={() => onClick(product)}>
        Посмотреть детали
      </button>
    </article>
  )
}
