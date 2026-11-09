// Carrinho demonstrativo — localStorage, sem backend. Pagamentos simulados.
const CART_KEY = 'bella_cart_v1';

function getCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCartCount();
}
function addToCart(id){
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  showToast(`${product.name} adicionado à sacola`);
  renderCartDrawer();
}
function removeFromCart(id){
  let cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCartDrawer();
}
function cartTotal(){
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
function cartCount(){
  return getCart().reduce((n, i) => n + i.qty, 0);
}
function renderCartCount(){
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = cartCount());
}
function renderCartDrawer(){
  const wrap = document.getElementById('cartItems');
  if (!wrap) return;
  const cart = getCart();
  if (cart.length === 0){
    wrap.innerHTML = '<div class="cart-empty">Sua sacola está vazia.<br>Que tal dar uma olhada nas novidades?</div>';
  } else {
    wrap.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(p => p.id === item.id);
      if (!p) return '';
      return `<div class="cart-item">
        <img src="${p.img}" alt="${p.name}">
        <div class="ci-info">
          <div class="name">${p.name}</div>
          <div class="meta">${p.brand} · Qtd ${item.qty} · ${formatBRL(p.price)}</div>
          <button class="remove" onclick="removeFromCart('${p.id}')">Remover</button>
        </div>
      </div>`;
    }).join('');
  }
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = formatBRL(cartTotal());
}
function showToast(msg){
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  renderCartDrawer();
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}
function toggleNav(){
  document.querySelector('nav.main-nav').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCartCount();
  renderCartDrawer();
});
