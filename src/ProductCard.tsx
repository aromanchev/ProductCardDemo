import React from 'react';

export enum Currency {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR'
}

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
}

const formatPrice = (priceInCents: number, curr: Currency): string => {
  const amount = priceInCents / 100;
  const localeMap: Record<Currency, string> = {
    [Currency.RUB]: 'ru-RU',
    [Currency.USD]: 'en-US',
    [Currency.EUR]: 'de-DE'
  };

  return new Intl.NumberFormat(localeMap[curr], {
    style: 'currency',
    currency: curr,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};

const ProductCard: React.FC<ProductCardProps> = ({ title, origin, price, currency, imageUrl }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
        <div className="origin-badge">{origin}</div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">{formatPrice(price, currency)}</div>
      </div>
    </div>
  );
};

export default ProductCard