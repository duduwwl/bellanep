// Catálogo demonstrativo — Bella Boutique (Nepomuceno-MG)
const PRODUCTS = [
  { id: 'p01', name: 'Top Preto Amarração', brand: 'Morena Rosa', linha: 'feminino', price: 389.9, img: 'fotos/look-preto-wrap.jpg' },
  { id: 'p02', name: 'Conjunto Jacquard Amarelo', brand: 'Maria.Valentina', linha: 'feminino', price: 459.0, img: 'fotos/look-amarelo-seda.jpg' },
  { id: 'p03', name: 'Vestido Longo Azul Linho', brand: 'Morena Rosa', linha: 'feminino', price: 329.9, img: 'fotos/look-azul-longo.jpg' },
  { id: 'p04', name: 'Vestido Midi Renda Dourada', brand: 'Maria.Valentina', linha: 'feminino', price: 419.9, img: 'fotos/look-renda-dourada.jpg' },
  { id: 'p05', name: 'Conjunto Tricot Listrado', brand: 'Morena Rosa', linha: 'feminino', price: 279.9, img: 'fotos/look-listrado-shorts.jpg' },
  { id: 'p06', name: 'Conjunto Alfaiataria Terracota', brand: 'Maria.Valentina', linha: 'feminino', price: 399.0, img: 'fotos/look-terracota-conjunto.jpg' },
  { id: 'p07', name: 'Polo Branca Essential', brand: 'SOUL', linha: 'masculino', price: 169.9, img: 'fotos/masculino-polo-branca.jpg' },
  { id: 'p08', name: 'Camisa Linho + Bermuda', brand: 'SOUL', linha: 'masculino', price: 299.0, img: 'fotos/masculino-linho-praia.jpg' },
  { id: 'p09', name: 'Polo Piquet Bordô', brand: 'SOUL', linha: 'masculino', price: 189.9, img: 'fotos/masculino-soul-polo.jpg' },
  { id: 'p10', name: 'Top Estampa Floral Vermelha', brand: 'Morena Rosa', linha: 'feminino', price: 349.9, img: 'fotos/look-estampa-vermelha.jpg' },
  { id: 'p11', name: 'Vestido Longo Animal Print', brand: 'Maria.Valentina', linha: 'beachwear', price: 379.9, img: 'fotos/look-animal-print.jpg' },
  { id: 'p12', name: 'Camisa + Jeans Reto', brand: 'Morena Rosa', linha: 'feminino', price: 319.9, img: 'fotos/look-jeans-casual.jpg' },
  { id: 'p13', name: 'Blusa Estampa Noturna', brand: 'Maria.Valentina', linha: 'feminino', price: 259.9, img: 'fotos/look-estampa-noturna.jpg' },
  { id: 'p14', name: 'Conjunto Listras Marinho', brand: 'Morena Rosa', linha: 'feminino', price: 299.9, img: 'fotos/look-listras-marinho.jpg' },
  { id: 'p15', name: 'Vestido Preto Festa', brand: 'Maria.Valentina', linha: 'feminino', price: 439.9, img: 'fotos/look-preto-festa.jpg' },
  { id: 'p16', name: 'Vestido Rosa Festa', brand: 'Maria.Valentina', linha: 'feminino', price: 459.9, img: 'fotos/look-rosa-festa.jpg' },
  { id: 'p17', name: 'Top Preto Amarração II', brand: 'Morena Rosa', linha: 'feminino', price: 269.9, img: 'fotos/look-preto-wrap.jpg' },
];

function formatBRL(v){
  return v.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}
