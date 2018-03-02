export default function formatPrice(price: number): string {
  const priceInString = price.toString();
  const cents = priceInString.slice(-2);
  const reais = priceInString.slice(0, priceInString.length - 2);

  return `R$ ${reais},${cents}`;
}
