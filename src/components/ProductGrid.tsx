import { Plus } from '@phosphor-icons/react/dist/csr/Plus';
import { useState } from 'react';
import { useCopy, useLocale } from '../i18n/locale';
import { tx, type Product } from '../types';

type ProductGridProps = {
  products: Product[];
  onAdd: (product: Product) => void;
};

function ProductTile({ product, onAdd }: { product: Product; onAdd: (product: Product) => void }) {
  const t = useCopy();
  const { locale } = useLocale();
  const [focused, setFocused] = useState(false);

  const revealOnTouch = () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setFocused((open) => !open);
  };

  return (
    <article className="product-tile" onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
      <div className="product-tile-media" onClick={revealOnTouch}>
        <img src={product.image} alt={tx(product.imageAlt, locale)} loading="lazy" />
        <img
          className={`product-tile-model ${focused ? 'is-focused' : ''}`}
          src={product.modelImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>
      <div className="product-tile-meta">
        <div>
          <span className="tile-category">{tx(product.category, locale)}</span>
          <h3>{product.name}</h3>
          <p>{tx(product.detail, locale)}</p>
        </div>
        <button className="tile-add" type="button" onClick={() => onAdd(product)}>
          <Plus size={17} weight="light" aria-hidden="true" />
          <span>{t.addToBag}</span>
        </button>
      </div>
    </article>
  );
}

export function ProductGrid({ products, onAdd }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductTile key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
