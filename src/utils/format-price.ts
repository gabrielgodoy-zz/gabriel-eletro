export default function formatPrice(numberToFormat: number): string {
  return (numberToFormat / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
